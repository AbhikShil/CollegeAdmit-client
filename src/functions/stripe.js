import axios from "axios";

export const createPaymentIntent = (authtoken, coupon) =>
  axios.post(
    `${process.env.REACT_APP_API}/create-payment-intent`,
    { couponApplied: coupon },
    {
      headers: {
        authtoken,
      },
    }
  );
export const getPaymentDetails = (paymentId) =>
  axios.get(
    `${process.env.REACT_APP_API}/get-payment-details/${paymentId}`,
    // {
    //   headers: {
    //     authtoken,
    //   },
    // }
  );

