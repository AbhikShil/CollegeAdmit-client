import React, { useEffect } from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Home2 from "./pages/Home2";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {auth} from './firebase';
import {useDispatch} from 'react-redux';
import HeaderLogin from "./components/nav/HeaderLogin";
import ForgotPassword from "./pages/auth/ForgotPassword";
import History from "./pages/user/History"
import Wishlist from "./pages/user/Wishlist";
import Password from "./pages/user/Password";
import UserRoute from "./components/routes/UserRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import {currentUser} from './functions/auth';
import AdminRoute from "./components/routes/AdminRoute";
import CategoryCreate from "./pages/admin/category/CategoryCreate";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
import SubCreate from "./pages/admin/sub/SubCreate";
import SubUpdate from "./pages/admin/sub/SubUpdate";
import CollegeCreate from "./pages/admin/college/CollegeCreate";
import AllColleges from "./pages/admin/college/AllColleges";
import CollegeUpdate from "./pages/admin/college/CollegeUpdate";
import College from "./pages/College";
import CategoryHome from "./pages/category/CategoryHome";
import SubHome from "./pages/sub/SubHome";
import Admissions from "./pages/Admissions";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CreateCouponPage from "./pages/admin/coupon/CreateCouponPage";
import Payment from "./pages/Payment";
import SideDrawer from "./components/drawer/SideDrawer";
import CollegeDashboard from "./pages/college/CollegeDashboard";
import ApprovedApplications from "./pages/college/ApprovedApplications";
// import OrdersAdminApproved from "./components/order/OrdersAdminApproved";
import AdminApproved from "./pages/admin/AdminApproved";
import RejectedApplications from "./pages/college/RejectedApplications";
import OnHoldApplications from "./pages/college/CollegeHoldApplications";
import AdminRejected from "./pages/admin/AdminRejected";
import HeaderMain from "./components/nav/HeaderMain";

function App() {

  const dispatch= useDispatch();
  // const user=auth.currentUser;

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user){
        const idTokenResult= await user.getIdTokenResult();
  
        currentUser(idTokenResult.token)
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
        }).catch=(e)=>{
          console.log("somerror",e);
        };
      }
    });
    return () => unsubscribe();
  },[dispatch]);  

  return (
    <>
    <HeaderMain/>
    <SideDrawer />
    <ToastContainer/>       
    <Routes>
      <Route exact path="/" element={<Home2 />}/>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/register" element={<Register />}/>
      <Route exact path="/register/complete" element={<RegisterComplete />}/> 
      <Route exact path="/forgot/password" element={<ForgotPassword />}/>
      <Route exact path="/user/password" element={<UserRoute><Password /></UserRoute>}/>
      <Route exact path="/user/history" element={<UserRoute><History/></UserRoute>}/>
      <Route exact path="/user/wishlist" element={<UserRoute><Wishlist /></UserRoute>}/>
      <Route exact path="/admin/dashboard" element={<AdminRoute><AdminDashboard/></AdminRoute>}/>
      <Route exact path="/admin/approved" element={<AdminRoute><AdminApproved/></AdminRoute>}/>
      <Route exact path="/admin/rejected" element={<AdminRoute><AdminRejected/></AdminRoute>}/>
      <Route exact path="/admin/category" element={<AdminRoute><CategoryCreate/></AdminRoute>}/>
      <Route exact path="/admin/category/:slug" element={<AdminRoute><CategoryUpdate/></AdminRoute>}/>
      <Route exact path="/admin/sub" element={<AdminRoute><SubCreate/></AdminRoute>}/>
      <Route exact path="/admin/sub/:slug" element={<AdminRoute><SubUpdate/></AdminRoute>}/>
      <Route exact path="/admin/college" element={<AdminRoute><CollegeCreate/></AdminRoute>}/>
      <Route exact path="/admin/colleges" element={<AdminRoute><AllColleges/></AdminRoute>}/>
      <Route exact path="/admin/college/:slug" element={<AdminRoute><CollegeUpdate/></AdminRoute>}/>
      <Route exact path="/college/:slug" element={<College />}/>
      <Route exact path="/category/:slug" element={<CategoryHome />} />
      <Route exact path="/sub/:slug" element={<SubHome />} />
      <Route exact path="/admission" element={<Admissions />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout" element={<UserRoute><Checkout /></UserRoute>} />
      <Route exact path="/admin/coupon"element={<AdminRoute><CreateCouponPage/></AdminRoute>} />
      <Route exact path="/payment" element={<UserRoute><Payment /></UserRoute>} />
      <Route exact path="/college/applications" element={<UserRoute><CollegeDashboard /></UserRoute>}/>
      <Route exact path="/college/approved" element={<UserRoute><ApprovedApplications /></UserRoute>}/>
      <Route exact path="/college/rejected" element={<UserRoute><RejectedApplications /></UserRoute>}/>
      <Route exact path="/college/onhold" element={<UserRoute><OnHoldApplications /></UserRoute>}/>
    </Routes>
    </>
  );
}

export default App;
