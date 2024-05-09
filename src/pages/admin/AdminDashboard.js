import React, { useState, useEffect, useCallback } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { getOrders, changeStatus } from "../../functions/admin";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Orders from "../../components/order/Orders";

const AdminDashboard = () => {
  const [ordersData,setOrdersData]=useState([]);
  const { user } = useSelector((state) => ({ ...state }));


  const loadOrders = useCallback(() =>
    getOrders(user.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      console.log("Abhik:",res.data);
      setOrdersData(res.data);
      // var a=[];
      // for(var i=0;i<res.data.length;i++){
      //   res.data[i]['userData']=[{}];
      //   getUserData(user.token, res.data[i].orderdBy).then((resp)=>{
      //     console.log(resp.data," i:",i);
      //     setUserData(resp.data);
      //     // res.data[i]['userData']=[];
      //     // res.data[i].userData=resp.data;
      //     // setOrders(res.data);
      //     // userData=res.data;;
      //     setCount(count++);
      //     res.data=setOrdersUserData(resp.data,res.data,i);
      //   })
      //   // setOrders(res.data);
      // }
      // // setOrdersUserData(res.data);
    }),[user.token]);

    useEffect(() => {
      loadOrders();
    }, [loadOrders]);

    // const setOrdersUserData=(a,b,i)=>{
    //   console.log("a:",a,"b:",b[0]," i:",count);
    //   // for(var i=0;i<b.length;i++){
    //     Object.assign(b[count], {userData: a});
    //     console.log("a[i]:",a," b[i]:",b[count]);
    //   // }
    //   console.log("Orders 2:",b);
    //   setOrdersData(b);
    //   // setOrders(b);
    //   return b;
    // }

  

  const handleStatusChange = (orderId, orderStatus) => {
    changeStatus(orderId, orderStatus, user.token).then((res) => {
      toast.success("Status updated");
      loadOrders();
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          {/* <h4>Admin Dashboard</h4> */}
          {/* {JSON.stringify(orders)} */}
          <Orders user={user} ordersData={ordersData} handleStatusChange={handleStatusChange} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
