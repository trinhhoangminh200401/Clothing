import { useContext, useState } from "react";
import {
  createEmailandPassword,
  createUserDocAuth,
} from "../../utils/firebase";
import "./signup.scss";
import FormInput from "../Form";
import Button, { ButtonType } from "../Button";
const defaultFormFields = {
  displayName: "",
  displayNameError: "",
  Email: "",
  EmailError: "",
  password: "",
  passwordError: "",
  confirmPassword: "",
  confirmPasswordError: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, Email, password, confirmPassword } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log( value,)
    setFormFields({ 
      ...formFields, 
      [name]: value,
      [`${name}Error`]:
      (name === 'displayName' && value.trim() === '') ? 'Display Name is required' :
      (name === 'Email' && value.trim() === '') ? 'Email is required' :
      (name === 'password' && value.trim() === '') ? 'Password is required' :
      (name === 'confirmPassword' && value.trim() === '') ? 'Confirm Password is required' :
      (name === 'confirmPassword' && value !== formFields.password) ? 'Passwords do not match' :
      ''
     }); // change value in input
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
   
    try {
      const { user } = await createEmailandPassword(email, password);
      await createUserDocAuth(user, { displayName });
      resetFormFields();
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
          onChange={handleChange}
          name="displayName"
          value={displayName}
          error={formFields.displayNameError}
          
        />
       
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="Email"
          value={Email}
          error={formFields.EmailError}
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          error={formFields.passwordError} 

        />
        <FormInput
          label="ConfirmPassword"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          error={formFields.confirmPasswordError} 
        />
        <Button buttonType={ButtonType.createAccount} type="submit">
          Create account
        </Button>
      </form>
    </div>
  );
};
export default SignUp;
