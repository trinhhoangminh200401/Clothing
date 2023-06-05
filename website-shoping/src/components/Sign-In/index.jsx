import { useState } from "react";
import {
  createUserDocAuth,
  signInWithGooglePopup,
  signInEmailandPassword,
} from "../../utils/firebase";
import FormInput from "../Form";
import Button from "../Button";
import "./signin.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInwithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocAuth(user);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value }); // change value in input
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInEmailandPassword(email, password);
     if(response){
        toast.success("Login is success Welcome to the website",{
          position:toast.POSITION.TOP_LEFT
        })
     }
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          toast.error("Your Password was wrong!", {
            position: toast.POSITION.TOP_LEFT,
          });
          break;
        case "auth/user-not-found":
          toast.error("no user associated with this email !", {
            position: toast.POSITION.TOP_LEFT,
          });
          break;
          default:
            console.log(error);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="sign-in-container">
        <h2>ALready have an accounts</h2>
        <span>Sign In</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <div className="buttons-container">
            <Button type="submit" buttonType="default">
              Sign In
            </Button>
            <Button onClick={signInwithGoogle} buttonType="Google">
              Google sign in
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignIn;
