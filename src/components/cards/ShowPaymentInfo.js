import React from "react";

const ShowPaymentInfo = ({ order, showStatus = true }) => (
  <div>
    <p>
      <span>Order Id: {order.paymentIntent.id}</span>
      {" / "}
      <span>
        Amount:{" / "}
        {(order.paymentIntent.amount/100).toLocaleString("en-US", {
          style: "currency",
          currency: "INR",
        })}
      </span>
      {" / "}
      <span>Currency: {order.paymentIntent.currency.toUpperCase()}</span>
      {" / "}
      <span>Payment Method: {order.paymentIntent.method}</span>
      {" / "}
      <span>Payment: {order.paymentIntent.status.toUpperCase()}</span>
      {" / "}
      <span>
        Orderd on:{" / "}
        {new Date(order.paymentIntent.created_at * 1000).toLocaleString()}
      </span>
      {" / "}
      <br />
      {showStatus && (
        <span className="badge bg-primary text-white">
          STATUS: {order.orderStatus}
        </span>
      )}
    </p>
  </div>
);

export default ShowPaymentInfo;
