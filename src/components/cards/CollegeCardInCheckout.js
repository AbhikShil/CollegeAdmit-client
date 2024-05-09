import React from "react";
import ModalImage from "react-modal-image";
import laptop from "../../images/laptop.png";
import { useDispatch } from "react-redux";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseCircleFilled,
} from "@ant-design/icons";

const CollegeCardInCheckout = ({ p }) => {
  let dispatch = useDispatch();

  const handleRemove = () => {
    // console.log(p._id, "to remove");
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // [1,2,3,4,5]
      cart.map((college, i) => {
        if (college._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  return (
    <tbody>
      <tr>
        <td>
          <div style={{ width: "100px", height: "auto" }}>
            {p.images.length ? (
              <ModalImage small={p.images[0].url} large={p.images[0].url} />
            ) : (
              <ModalImage small={laptop} large={laptop} />
            )}
          </div>
        </td>
        <td>{p.title}</td>
        <td>${p.fees}</td>
        {/* <td>{p.seatType}</td> */}
        {/* <td className="text-center">
          {p.shipping === "Yes" ? (
            <CheckCircleOutlined className="text-success" />
          ) : (
            <CloseCircleOutlined className="text-danger" />
          )}
        </td> */}
        <td className="text-center">
          <CloseCircleFilled
            onClick={handleRemove}
            className="text-danger pointer"
          />
        </td>
      </tr>
    </tbody>
  );
};

export default CollegeCardInCheckout;
