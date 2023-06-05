import { useState } from "react";
import {
  createEmailandPassword,
  createUserDocAuth,
} from "../../utils/firebase";
import './signup.scss'
import FormInput from "../Form";
import Button from "../Button";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  //   console.log(formFields);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value }); // change value in input
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return; // return nothing 
    try {
      const { user } = await createEmailandPassword(email, password);
      await createUserDocAuth(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      console.log("error to create username", error);
    }
  };
  return (
    <div className="sign-up-container">
   <h2>Don't have any account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
         <FormInput
          label="ConfirmPassword"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType="createAccount" type="submit">Create account</Button>
      </form>
    </div>
  );
};
export default SignUp;
