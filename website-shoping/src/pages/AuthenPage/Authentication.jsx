import SignIn from "../../components/Sign-In";
import SignUp from "../../components/Sign-up";
import './authen.scss'
function Authentication() {
 
  return (
    <div className="authentication-container">
      <SignIn/>
      <SignUp />
    </div>
  );
}

export default Authentication;
