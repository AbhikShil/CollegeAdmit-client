import React, { useEffect, useState } from "react";
import { CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";
import {Modal, Button } from "antd";
import ShowPaymentInfo from "../cards/ShowPaymentInfo";
import StudentDetails from "../../pages/admin/student/StudentDetails";
import { getUserData, saveCommentData } from "../../functions/admin";
// import { useSelector } from "react-redux";
import TextArea from "antd/lib/input/TextArea";
import { toast } from "react-toastify";

const OrdersAdminRejected = ({ user , ordersData, handleStatusChange }) => {
  const [visible, setVisible] = useState(false);
  const [visibleCommentModal, setVisibleCommentModal] = useState(false);
  const [currentItem, setCurrentItem]=useState();
  const [comment, setComment] = useState("");
  const [userInfo,setUserInfo]=useState();
  const [currentOrder,setCurrentOrder]=useState();
  // const [userData, setUserData] = useState();
  // const [ord,setOrd]=useState();
  // // let userData = [];
  useEffect(() => {
    console.log("User 2:",user,ordersData);
    getUserData(user.token,user._id).then((res)=>{
        setUserInfo(res.data);
    })

  }, []);

  // const loadUsers = (order,user) =>{
  //   console.log("User 2:",order,user);
  //   // getUserData(user.token, orders[0].orderdBy).then((res)=>{
  //   //   console.log(res.data);
  //   //   setUserData(res.data);
  //   //   // userData=res.data;
  //   // })
  // }

  const setModal = (data) => {
    setVisible(true);
    setCurrentItem(data);  
  }
  const showOrderInTable = (order) => (
    
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">College Name</th>
          <th scope="col">Fees</th>
          <th scope="col">Seat Type</th>
          <th scope="col">Available</th>
        </tr>
      </thead>

      <tbody>
        {order.colleges.map((p, i) => (
          <tr key={i}>
            <td>
              <b>{p.college.title}</b>
            </td>
            <td>{p.college.fees}</td>
            <td>{p.college.seatType}</td>
            <td>
              {p.college.shipping === "Yes" ? (
                <CheckCircleOutlined style={{ color: "green" }} />
              ) : (
                <CloseCircleOutlined style={{ color: "red" }} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  function saveComment(id){
    // e.preventDefault();
    saveCommentData(comment,id,user.token).then((res)=> {
      console.log(res);
      toast.success("Comment Saved.");
    }).catch((err)=>{
      toast.error(err.response.data.err);
    })
    setVisibleCommentModal(false);
    setComment("");
  }

  return (
    <>
      {ordersData.map((order) =>{return ( order.orderStatus=="Profile Rejected. Apply Again!")?(
        
        <div key={order._id} className="row pb-5 p-3">
          <div className="btn btn-block bg-light">
          {/* {loadUsers(order,user)} */}
            {/* <p>{JSON.stringify(order.userData)}</p> */}
            <Button type="primary" onClick={() =>{ setModal(order.userData[0]);console.log(order.userData)}}>
              View Profile
            </Button>
            <Modal
              title="Student Profile"
              centered
              visible={visible}
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
              width={1000}
            >
              <StudentDetails user={currentItem}/>
            </Modal>
            <ShowPaymentInfo order={order} showStatus={false} />

            <div className="row">
              <div className="col-md-4">Booking Status</div>
              <div className="col-md-8">
                <select
                  onChange={(e) =>
                    handleStatusChange(order._id, e.target.value)
                  }
                  className="form-control"
                  defaultValue={order.orderStatus}
                  name="status"
                >
                  <option value="Payment Succesfull. Profile Under Verification">Payment Succesfull. Profile Under Verification</option>
                  <option value="Admin Approved Profile. Waiting For College Approval">Admin Approved Profile. Waiting For College Approval</option>
                  <option value="Profile Eligible .Seat Is Successfully Booked.">Profile Eligible .Seat Is Successfully Booked.</option>
                  <option value="Profile On Hold. Please Update Your Profile.">Profile On Hold. Please Update Your Profile.</option>
                  <option value="Profile Rejected. Apply Again!">Profile Rejected. Apply Again!</option>
                </select>
              </div>
            </div>
          <div className="row p-3">
            <p className="pt-2 pb-2" >   Previous Comment:  <span style={{color:"red"}}>{order.comment.length>0 ? order.comment: "No Comments"}</span></p>
            <div>
            <Button type="secondary" className="col-md-2" onClick={() =>{setCurrentOrder(order._id);setVisibleCommentModal(true)}} danger>
              Add Comment
            </Button>
            </div>
            <Modal
              title="Add Comment"
              centered
              visible={visibleCommentModal}
              onOk={() => setVisibleCommentModal(false)}
              onCancel={() => setVisibleCommentModal(false)}
              width={1000}
            >
                <TextArea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add Comment"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  className="m-2"
                />
                <div>
                <Button type="primary" className="col-md-2" style={{}} onClick={function(){ saveComment(currentOrder);}}>
                  Save Comment
                </Button>
                </div>
              
                </Modal>
            </div>
          </div>

          {showOrderInTable(order)}
        </div>
      ):(<div></div>)})}
    </>
  );
};

export default OrdersAdminRejected;
