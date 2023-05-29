import { createUserDocAuth, signInWithGooglePopup } from "../utils/firebase";

function SignIn() {
  const logGoogleuser = async () => {
    const {user}= await signInWithGooglePopup();
    
    createUserDocAuth(user)
  };
  return (
    <div>
      <button onClick={logGoogleuser}>
        <h1>SignIn Page</h1>
      </button>
    </div>
  );
}

export default SignIn;
