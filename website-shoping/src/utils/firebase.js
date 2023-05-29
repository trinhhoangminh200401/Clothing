import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {  doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBSm8zlV9GBIvJUtMlHygzzMvfDSq0VJc4",
  authDomain: "clothing-website-36404.firebaseapp.com",
  projectId: "clothing-website-36404",
  storageBucket: "clothing-website-36404.appspot.com",
  messagingSenderId: "124832721315",
  appId: "1:124832721315:web:0e43aaf59c3d6146591216",
};

// Initialize Firebase

const firsebaseapp = initializeApp(firebaseConfig);
const GoogleProvider = new GoogleAuthProvider();
const FacebookProVider = new FacebookAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () =>signInWithPopup(auth, GoogleProvider);
const db = getFirestore()
export const createUserDocAuth = async (userauth)=>{
      const userReference =  doc(db,"users",userauth.uid)
      console.log(userReference)
  const userSnap = await getDoc(userReference)
  if(!userSnap.exists()){
    const {displayName,email}=userauth
    const createAt = new Date()
    try {
      await setDoc(userReference,{
        displayName,email,createAt
      })
    } catch (error) {
      console.log("creating user has been fail",error.message)
      
    }
  }
  // if user data exist
  // create/ set the document with data from userauth in collection 
  // rerturn userRef
}