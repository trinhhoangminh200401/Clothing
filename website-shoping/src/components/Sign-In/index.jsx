import { useState } from "react";
import {
  signInWithGooglePopup,
  signInEmailandPassword,
  createUserDocAuth,
} from "../../utils/firebase";
import FormInput from "../Form";
import Button, { ButtonType } from "../Button";
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
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInwithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      if (user) {
        toast.success("Login is success Welcome to the website", {
          position: toast.POSITION.TOP_LEFT,
        });
      }
      createUserDocAuth()
    } catch (error) {
      if (error.code === "auth/internal-error") {
        toast.error("Your connection to Google has been failed!", {
          position: toast.POSITION.TOP_LEFT,
        });
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value }); // change value in input
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInEmailandPassword(email, password);

      if (user) {
        toast.success("Login is success Welcome to the website", {
          position: toast.POSITION.TOP_LEFT,
        });
        resetFormFields();
      }
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
        case "auth/network-request-failed":
          toast.error("Your Network has been request failed!", {
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
            <Button type="submit" buttonType={ButtonType.default}>
              Sign In
            </Button>
            <Button onClick={signInwithGoogle} buttonType={ButtonType.Google}>
              Google
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignIn;
