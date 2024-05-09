import axios from "axios";

export const userCart = async (cart, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart`,
    { cart },
    {
      headers: {
        authtoken,
      },
    }
  );

export const getUserCart = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/cart`, {
    headers: {
      authtoken,
    },
  });

export const emptyUserCart = async (authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/user/cart`, {
    headers: {
      authtoken,
    },
  });

export const saveStudentData = async (authtoken, student) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/studentData`,
    student,
    {
      headers: {
        authtoken,
      },
    }
  );

export const applyCoupon = async (authtoken, coupon) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart/coupon`,
    { coupon },
    {
      headers: {
        authtoken,
      },
    }
  );

export const getUser = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user`,{
    headers: {
      authtoken,
    }
   } 
);

export const createOrder = async (razorpayResponse, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/order`,
    { razorpayResponse: razorpayResponse },
    {
      headers: {
        authtoken,
      },
    }
  );

export const getUserOrders = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/orders`, {
    headers: {
      authtoken,
    },
  });

export const getWishlist = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/wishlist`, {
    headers: {
      authtoken,
    },
  });

export const removeWishlist = async (collegeId, authtoken) =>
  await axios.put(
    `${process.env.REACT_APP_API}/user/wishlist/${collegeId}`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );

export const addToWishlist = async (collegeId, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/wishlist`,
    { collegeId },
    {
      headers: {
        authtoken,
      },
    }
  );
