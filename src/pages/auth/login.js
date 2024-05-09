import React, { useState,useEffect } from "react";
import {auth,googleAuthProvider} from "../../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import {GoogleOutlined} from '@ant-design/icons'
import {Button} from 'antd';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBInput,
} from 'mdb-react-ui-kit';
import axios from 'axios';

const createOrUpdateUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/create-or-update-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

const Login= () => {
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  const roleBasedRedirect = (res) => {
    if (res.data.role === "admin") {
      navigate(`/admin/dashboard`);
    } 
    else if(res.data.role === "college"){
      navigate(`/college/applications`)
    }
    else {
      navigate(`/`);
    }
  };

  useEffect(() => {
    if (user && user.token){
      navigate(`/`)
    }
  }, [user,navigate]);

  const googleLogin = async (e)=>{
    e.preventDefault();
    signInWithPopup(auth,googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        console.log("logintok:",idTokenResult.token);
        createOrUpdateUser(idTokenResult.token)
        .then((res) => {
          localStorage.setItem("curentUser",res.data._id);
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
          toast.success(`Login Successfull`);
          roleBasedRedirect(res);
        }).catch=(e)=>{
          console.log("somerror",e);
        };
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  }

  const handleSubmit = async(e)=> {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password).then(async (result)=>{
      const {user} =  result;
      console.log('user=',user)
      const idTokenResult= await user.getIdTokenResult();
      createOrUpdateUser(idTokenResult.token)
        .then((res) => {
          localStorage.setItem("curentUser",res.data._id);
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
          toast.success(`Login Successfull`);
          roleBasedRedirect(res);
        })
        .catch=(e)=>{
          console.log("somerror",e);
        };
      // dispatch({
      //   type: 'LOGGED_IN_USER',
      //   payload : {
      //     name: user.displayName,
      //     email: user.email,
      //     token : idTokenResult.token,
      //   },
      // });
    }).catch((e)=>{
      console.log(e);
      toast.error(e.message);
      setLoading(false);
    });
  }
  return (
    <div className="container p-5 register" style={{margin: 'auto',width: '60%',padding: '10px', marginTop:'5%'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div style={{textAlign:"center", color:"black"}}>
            {loading ? <h2 style={{marginBottom:'5%'}}>Loading..</h2>: <h2 style={{marginBottom:'5%'}}>Log In</h2>}
            <p>Please LogIn To Continue.</p>
          </div>
          <form>
            <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <MDBInput className='mb-4 ' type='password' id='form1Example2' label='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input className="btn-primary me-2" style={{borderRadius:'3px', width:'100%', marginBottom:'5%'}} type='submit' value='Log In' disabled={!email || password.length<6} onClick={handleSubmit}/>
            {/* <input className="btn-danger me-2" style={{borderRadius:'3px', width:'100%'}} fab icon= type='submit' value='Login With Google' onClick={googleLogin}/> */}
            <Button onClick={googleLogin} className='' style={{ borderRadius:'3px', backgroundColor: '#dd4b39', width:'100%', color:'white', marginBottom:'3%' }} icon={<GoogleOutlined style={{marginRight:'3%'}}/>}>
              Login with Google
            </Button>
            <Link to="/forgot/password" className="float-right text-primary">
            Forgot Password
          </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
