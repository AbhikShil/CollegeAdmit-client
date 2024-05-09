import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics"
import {getAuth} from "firebase/auth"
import {GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAbIs_Di5bj3j9O4nNdibUD0y8DVgM6Q8A",
    authDomain: "nodon-fe38b.firebaseapp.com",
    projectId: "nodon-fe38b",
    storageBucket: "nodon-fe38b.appspot.com",
    messagingSenderId: "1024215224280",
    appId: "1:1024215224280:web:853ac630ad8a5519aeecad",
    measurementId: "G-G5H9V52EC3"
  };
  //firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  export const auth=getAuth();
  export const googleAuthProvider=new GoogleAuthProvider(); 