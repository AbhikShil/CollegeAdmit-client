import React, { useState,useEffect } from "react";
import {auth} from "../../firebase";
import { signInWithEmailLink, updatePassword, updateProfile } from "firebase/auth";

import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBInput,
} from 'mdb-react-ui-kit';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { createOrUpdateUser } from "../../functions/auth";
const RegisterComplete= () => {
  const [email,setEmail]= useState('');
  const [password,setPassword]=useState('');
  const [name,setName]=useState('');
  const dispatch= useDispatch();
  let navigate=useNavigate(); 
  // const { user } = useSelector((state) => ({ ...state }));

  useEffect(()=> {
    // if (user && user.token){
    //   navigate(`/`)
    // }
    setEmail(window.localStorage.getItem('emailForSignIn'));
  },[]);

  const handleSubmit = async(e)=> {
    e.preventDefault();
    if(!name){
      toast.error(`Full Name is required`);
      return;
    }
    if(!email || !password){
      toast.error(`Email and Password is required`);
      return;
    }
    if(password.length<6){
      toast.error(`Password must be atleast of 6 characters`);
      return;
    }
      signInWithEmailLink(auth,email,window.location.href).then(async (result) => {
        console.log("Result=",result);
        if(result['user'].emailVerified){
          window.localStorage.removeItem('emailForSignIn');
          let {user}= result;
          console.log(user);
          console.log(name);
          await updatePassword(user,password).then(() => {
            toast.success(`Password Set Successfully`);
          });

          await updateProfile(user, {
            displayName: name, photoURL: ""
          }).then(() => {
            toast.success(`Sign Up Successfull`);
          })
          //await updatePassword(password);
          const idTokenResult= auth.currentUser.getIdTokenResult(true);
          console.log("IdToken:",(await idTokenResult));
          createOrUpdateUser((await idTokenResult).token)
        .then((res) => {
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });
          localStorage.setItem("curentUser",res.data._id);
        })
        .catch=(e)=>{
          console.log("somerror",e);
        };
        }
        navigate(`/`);
        
        // Clear email from storage.
        //window.localStorage.removeItem('emailForSignIn');
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      }).catch((e)=>{
      console.log(e);
      toast.error(`Either The Token Has Expired Or The Key Is Invalid, Please Try Again!!`);
    });
    
  };
  return (
    <div className="container p-5 register" style={{margin: 'auto',width: '60%',padding: '10px', marginTop:'5%'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div style={{textAlign:"center", color:"black"}}>
            <h2 style={{marginBottom:'5%'}}>Hey Buddy</h2>
            <p>Please Complete The Registration</p>
          </div>
          <form onSubmit={handleSubmit}>
            <MDBInput className='mb-4 ' type='email' id='form1Example1' label='Email address' value={email} disabled/>
            <MDBInput className='mb-4 ' type='text' id='form1Example2' label='Full Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <MDBInput className='mb-4 ' type='password' id='form1Example3' label='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input className="btn-primary" style={{borderRadius:'8px', width:'100%'}} type='submit' value='Sign Up'/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterComplete;
