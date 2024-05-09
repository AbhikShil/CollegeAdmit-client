import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { MDBInput } from "mdb-react-ui-kit";
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate= useNavigate();

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token){
        navigate(`/`);
    }
  }, [user,navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };

    await sendPasswordResetEmail(auth, email, config)
      .then(() => {
        setEmail("");
        setLoading(false);
        toast.success("Check your email for password reset link");
      })
      .catch((error) => {
        setLoading(false);
        if(error.message=='Firebase: Error (auth/user-not-found).'){
            toast.error(`This email is not registered with us.`);
        }
        else{
            toast.error(`Internal Server Error.`);
        }
        console.log("ERROR MSG IN FORGOT PASSWORD", error);
      });
  };

  return (
    <div className="container p-5 register" style={{margin: 'auto',width: '60%',padding: '10px', marginTop:'5%'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div style={{textAlign:"center", color:"black"}}>
          {loading ? (<h2 className="text-danger">Loading</h2>) : (<h2>Reset Password</h2>)}
          </div>
          <form onSubmit={handleSubmit} style={{marginTop:'10%'}} >
            <MDBInput className='mb-4 ' type='email' id='form1Example1' label='Email address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input className="btn-primary" style={{borderRadius:'8px', width:'100%'}} type='submit' value='Reset Password'/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
