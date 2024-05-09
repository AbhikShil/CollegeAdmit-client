import React, { useState } from "react";
import UserNav from "../../components/nav/UserNav";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { updatePassword } from "firebase/auth";
import { MDBInput } from "mdb-react-ui-kit";

const Password = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(password);


    await updatePassword(auth.currentUser,password)
      .then(() => {
        setLoading(false);
        setPassword("");
        toast.success("Password updated");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  // const passwordUpdateForm = () => (
  //   <div className="container p-5 register" style={{margin: 'auto',width: '60%',padding: '10px', marginTop:'5%'}}>
  //     <div className="row">
  //       <div className="col-md-6 offset-md-3">
  //         <form onSubmit={handleSubmit}>
  //           <MDBInput className='mb-4 ' type='password' id='password' label='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
  //           <input className="btn-primary" style={{borderRadius:'8px', width:'100%'}} type='submit' value='Submit'disabled={!password || password.length < 6 || loading}/>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="container p-5 register" style={{margin: 'auto',width: '60%',padding: '10px', marginTop:'5%'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <div style={{textAlign:"center", color:"black"}}>
            {loading ? <h2 style={{marginBottom:'5%'}}>Loading..</h2>: <h2 style={{marginBottom:'5%'}}>Password Update</h2>}
            <p>Please Enter New Password.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <MDBInput className='mb-4 ' type='password' id='password' label='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input className="btn-primary" style={{borderRadius:'8px', width:'100%'}} type='submit' value='Submit'disabled={!password || password.length < 6 || loading}/>
          </form>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Password;
