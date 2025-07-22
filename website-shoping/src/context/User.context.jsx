import { createContext,useEffect, useReducer } from "react";
// as the actual value you want to access 
import { onAuthchangedListener, createUserDocAuth} from "../utils/firebase";
import { createAction } from "../utils/reducer.utils";
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
  const setCurrentUser =(user)=>{
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
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