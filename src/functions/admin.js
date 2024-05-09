import axios from "axios";

export const getOrders = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/admin/orders`, {
    headers: {
      authtoken,
    },
  });

export const changeStatus = async (orderId, orderStatus, authtoken) =>
  await axios.put(
    `${process.env.REACT_APP_API}/admin/order-status`,
    { orderId, orderStatus },
    {
      headers: {
        authtoken,
      },
    }
  );
  export const getUserData = async (authtoken,userId) =>
  await axios.put(`${process.env.REACT_APP_API}/admin/userData`,{userId},{
    headers: {
      authtoken,
    }
   } 
);

export const saveCommentData = async (comment,orderId,authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/admin/save-comment`,{orderId,comment},{
    headers: {
      authtoken,
    }
  });
