import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
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

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, GoogleProvider);
export const signInGooglewithRedirect = () =>
  signInWithRedirect(auth, GoogleProvider);
const db = getFirestore();
// create database in in firestore 
/* 
  + createUserDocAuth have two param 
        + userauth : create users collection have name users and get id from that user
        + additionInfor: get more field  when create user name with init equals {}

*/
export const createUserDocAuth = async (userauth,additionalInfor={}) => {
  const userReference = doc(db, "users", userauth.uid);
  
  const userSnap = await getDoc(userReference);
  if (!userauth) return;
  if (!userSnap.exists()) {
    const { displayName, email } = userauth;
    const createAt = new Date();
    try {
      await setDoc(userReference, {
        displayName,
        email,
        createAt,
        ...additionalInfor
      });
      // console.log(auth.currentUser);
      // console.log(displayName)
    } catch (error) {
      console.log("creating user has been failed", error.message);
    }
   
    return userReference;
  }

  // if user data exist
  // create/ set the document with data from userauth in collection
  // rerturn userRef
};
//  create email annd password by signup
export const createEmailandPassword = async (email, password) => {
  try {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error.code == "auth/email-already-in-use") {
      alert("username has been already use");
    } else {
      console.log("error create email and user fail", error.message);
    }
  }
};
export const signInEmailandPassword = async (email, password) => {
  
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  
};
