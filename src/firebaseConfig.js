
import { initializeApp } from "firebase/app";
// llamamos los metodos
import {signInWithEmailAndPassword,getAuth, signOut,createUserWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";

import  {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env. VITE_PROJECTID,
  storageBucket: import.meta.env. VITE_STORAGE,
  messagingSenderId: import.meta.env. VITE_MESSAGIN,
  appId: import.meta.env. VITE_APPID
};

const app = initializeApp(firebaseConfig);

// inicializo autenticacion
const auth = getAuth(app)
export const db = getFirestore(app)

export const onSigIn = async ({email,password})=>{

try {
    const res = await  signInWithEmailAndPassword(auth,email,password)
    return res
}catch (error){

}

} 


export const logout =  ()=>{
    signOut(auth)
}


export const signUp = async ({email,password}) => {
  const res =  await createUserWithEmailAndPassword(auth,email,password)
  return res;
};

export const forgotPassword = async (email) =>{
 let res =  await sendPasswordResetEmail (auth,email)
 return res
}