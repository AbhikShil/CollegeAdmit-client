import React, { useEffect, useState } from "react";
import { CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";
import {Modal, Button } from "antd";
import ShowPaymentInfo from "../cards/ShowPaymentInfo";
import StudentDetails from "../../pages/admin/student/StudentDetails";
import { getUserData, saveCommentData } from "../../functions/admin";
import { useSelector } from "react-redux";
import TextArea from "antd/lib/input/TextArea";
import { toast } from "react-toastify";

const OrdersCollegeHold = ({ orders, user , userData, ordersData, handleStatusChange }) => {
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
      {ordersData.map((order) =>{return (order.colleges[0].college._id==userInfo.college_id && order.orderStatus=="Profile On Hold. Please Update Your Profile.")?(
        
        <div key={order._id} className="row pb-5 p-3">
          <div className="btn btn-block bg-light">
          {/* {loadUsers(order,user)} */}
            {/* <p>{JSON.stringify(order.userData)}</p> */}
            <Button type="primary" className="m-2" onClick={() =>{ setModal(order.userData[0]);console.log(order.userData)}}>
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

          <div className="row p-3">
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
            {/* <div className="m-2">
              <button type="button" className="btn btn-success m-2" onClick={function(){ handleStatusChange(order._id,"Profile Eligible .Seat Is Successfully Booked.");}}>Approve</button>
              <button type="button" className="btn btn-warning m-2" onClick={function(){ handleStatusChange(order._id,"Profile On Hold. Please Update Your Profile.");}}>Put On-Hold</button>
              <button type="button" className="btn btn-danger m-2" onClick={function(){ handleStatusChange(order._id,"Profile Rejected. Apply Again!");}}>Reject</button>
            </div> */}
          </div>
          {showOrderInTable(order)}
        </div>
      ):(<div></div>)})}
    </>
  );
};

export default OrdersCollegeHold;
