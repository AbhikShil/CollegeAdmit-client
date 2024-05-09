import React, { useState,useEffect } from "react";
import {auth} from "../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBInput,
} from 'mdb-react-ui-kit';
const Register= () => {
  const [email,setEmail]= useState('');
  const navigate= useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token){
      navigate(`/`)
    }
  }, [user,navigate]);
  const handleSubmit = async(e)=> {
    e.preventDefault();
    const config={
      url: 'http://'+window.location.hostname+'/register/complete',
      handleCodeInApp: true
    }
    sendSignInLinkToEmail(auth,email,config).then(() => {
      toast.success(`Email is sent to ${email}. Click the link to complete your registration`);
      window.localStorage.setItem('emailForSignIn', email);
    })
    setEmail("");
  };
  return (
    <div className="container p-5 register" style={{margin: 'auto',width: '60%',padding: '10px', marginTop:'5%'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div style={{textAlign:"center", color:"black"}}>
            <h2 style={{marginBottom:'5%'}}>Hey Buddy</h2>
            <p>To continue please Sign Up to our page.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <MDBInput className='mb-4 ' type='email' id='form1Example1' label='Email address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input className="btn-primary" style={{borderRadius:'8px', width:'100%'}} type='submit' value='Sign Up'/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
