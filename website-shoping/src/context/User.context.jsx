import { createContext, useState, useEffect } from "react";
// as the actual value you want to access 
import { onAuthchangedListener, createUserDocAuth} from "../utils/firebase";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,

});
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser}; 
  useEffect(()=>{
    const unsubcribe= onAuthchangedListener((user)=>{
      if (user){
         createUserDocAuth(user);

      } 
        setCurrentUser(user)
    })
    return unsubcribe
  },[])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
