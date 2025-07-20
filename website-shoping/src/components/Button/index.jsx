/* Default,google, inverted */
import './button.scss'
import { BaseButton, CreateAccount, GoogleSignInButton, InvertedButton } from './button.styled'
export const ButtonType ={
    Google:"google-sign-in",
    inverted:"inverted",
    createAccount:'create-account',
    default:'default',
}
const getButton = (buttonType = ButtonType) => ({
    
    [ButtonType.default]: BaseButton,
    [ButtonType.Google]: GoogleSignInButton,
    [ButtonType.inverted]: InvertedButton,
    [ButtonType.createAccount]:CreateAccount 
}[buttonType])
const Button = ({ children, buttonType, ...props }) => {
    const CustomButton = getButton(buttonType)
    return  <CustomButton {...props}> {children} </CustomButton>
        {/* <button className={`button-container ${ButtonType[buttonType]}`}
        {...props}
        >
         
        </button> */}
    
}
export default Button