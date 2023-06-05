/* Default,google, inverted */
import './button.scss'
const ButtonType ={
    Google:"google-sign-in",
    inverted:"inverted",
    createAccount:'create-account',
    default:'default'
}
const Button =({children,buttonType,...props})=>{
    return(
        <button className={`button-container ${ButtonType[buttonType]}`}
        {...props}
        >
            {children}
        </button>
    )
}
export default Button