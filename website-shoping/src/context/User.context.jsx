import { createContext,useEffect, useReducer } from "react";
// as the actual value you want to access 
import { onAuthchangedListener, createUserDocAuth} from "../utils/firebase";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,

});
const INIT_STATE={
  currentUser:null
}
export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state,dispatch] = useReducer(userReducer,INIT_STATE)
  const {currentUser}=state
  console.log('current',currentUser)
  const setCurrentUser =(user)=>{
    dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER,payload:user})
  }
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
export const USER_ACTION_TYPES={
    SET_CURRENT_USER:'SET_CURRENT_USER'
}
const userReducer = (state,action)=>{
  console.log('dispatch')
  console.log(action)
  const{type,payload}=action
  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser:payload
      }
    default:
      throw new Error(`Unhandle Type ${type} in useReducer`)
  }
}