import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { showRating } from "../../functions/rating";
import 'antd/dist/antd.css';

const { Meta } = Card;

const CollegeCard = ({ college }) => {
  const [tooltip, setTooltip] = useState("Click to add");

  // redux
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new college to cart
      cart.push({
        ...college,
        userId:user._id,
        count: 1,
      });

      // getUserCart(user.token).then((res) => {
      //   console.log("user cart res", JSON.stringify(res.data, null, 4));
      //   for(var i=0;i<res.data.colleges.length;i++){
      //     getCollege()
      //     cart.push({
      //       ...res.data.colleges[i].college,
      //       count:1,
      //     })
      //   }
      // });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      console.log("unique:",unique)
      console.log("cart:",cart);
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };

  // destructure
  const { images, title, description, slug } = college;
  return (
    <>
      {college && college.ratings ? (
        showRating(college)
      ) : (
        <div className="text-center pt-1 pb-3">No rating yet</div>
      )}

      <Card
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-1"
            alt=""
          />
        }
        actions={[
          <Link to={`/college/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View College
          </Link>,
          <Tooltip title={tooltip}>
            <a onClick={handleAddToCart}>
              <ShoppingCartOutlined className="text-danger" /> <br /> Add to
              Cart
            </a>
          </Tooltip>,
        ]}
      >
        <Meta
          title={`${title}`}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card>
    </>
  );
};

export default CollegeCard;

