import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { showRating2 } from "../../functions/rating2";
import 'antd/dist/antd.css';

const { Meta } = Card;

const CollegeCard2 = ({ college }) => {
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
  function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // destructure
  const { images, title, description, slug, fees, category, subs } = college;
  return (
    <>

      <Card
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-1"
            alt="Abcd"
          />
        }
        actions={[
          <Link to={`/college/${slug}`}>
            <EyeOutlined className="" style={{color:"#F8C100"}}/> <br /> <span style={{color:"black"}}>View College</span>
          </Link>,
          <Tooltip title={tooltip}>
            <a onClick={handleAddToCart}>
              <ShoppingCartOutlined className="" style={{color:"#66b3ff",fontWeight:"bold"}} /> <br /> <span style={{color:"black"}}>Add to
              Cart</span>
            </a>
          </Tooltip>,
        ]}
        className="singleCollegeCard"
        style={{padding:""}}
      >
        <div className="titleAndRating" style={{margin:"0px"}}>
          <div className="row">
            <div className="col-md-8">
              <h6><b>{`${title}`}</b></h6>
            </div>
            <div className="col-md-4">
              {college && college.ratings ? (
                showRating2(college)
              ) : (
                <div className="text-center pt-1 pb-3"><b>No Rating</b></div>
              )}
            </div>
          </div>
        </div>

        <div className="collegeDescription" style={{margin:"10px", marginTop:"20px"}}>
          <p><b style={{marginRight:"5px"}}>Description:</b>{` `}<span className="collegeDescriptionText">{`${description && description.substring(0, 40)}...`}</span></p>
          <p><b style={{marginRight:"5px"}}>Fees:</b>{` `}<span className="collegeDescriptionText" style={{color:"grey",fontWeight:"bold"}}>{`${fees} INR`}</span>{` `}one year fees</p>
          {category && (<p><b style={{marginRight:"5px"}}>Category:</b>{` `}<a href={`/category/${category.slug}`} className="collegeDescriptionLink"><u>{`${Capitalize(category.name)}`}</u></a></p>)}
          {subs && (<div><b style={{marginRight:"10px"}}>Branches:</b>
            {subs.map((s) => (
              <a href={`/sub/${s.slug}`} key={s._id} className="collegeDescriptionLink" style={{marginRight:"10px"}}><u>{`${Capitalize(s.name)}`}</u></a>
          ))}
          
          </div>)}
        </div>

      </Card>
    </>
  );
};

export default CollegeCard2;

