import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { showRating } from "../../functions/rating3";
import 'antd/dist/antd.css';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBFooter } from 'mdb-react-ui-kit';


const { Meta } = Card;

const CollegeCard3 = ({ college }) => {
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

      <MDBCard>
        <MDBCardImage src={images && images.length ? images[0].url : laptop} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle style={{fontSize:"18px", fontWeight:"bold"}}>{`${title}`}</MDBCardTitle>
          <MDBCardText><p>Bangalore, Karnataka</p></MDBCardText>
          <MDBCardText>
            {college && college.ratings ? (
                showRating(college)
              ) : (
                <div className="text-center pt-1 pb-3"><b>No Rating</b></div>
              )}
          </MDBCardText>
          <MDBCardText>
            <h6>{`${Capitalize(category.name)}`}</h6>
            {subs && (<div><b style={{marginRight:"10px"}}>Branches:</b>
            {subs.map((s) => (
              <a href={`/sub/${s.slug}`} key={s._id} className="collegeDescriptionLink" style={{marginRight:"10px"}}><u>{`${Capitalize(s.name)}`}</u></a>
          ))}
          
          </div>)}
          </MDBCardText>
          <MDBCardText>
            <p><span className="collegeDescriptionText" style={{color:"orangered",fontWeight:"bold", fontSize:"18px"}}>{`${fees} INR`}</span>{` `}one year fees</p>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <div className="row">
            <div className="col" style={{textAlign:"center"}}>
            <Link to={`/college/${slug}`}>
            <EyeOutlined className="" style={{color:"#F8C100"}}/> <br /> <span style={{color:"black"}}>View College</span>
          </Link>
            </div>
            <div className="col" style={{textAlign:"center", borderLeft:"1px solid #DFDFDF"}}>
            <Tooltip title={tooltip}>
            <a onClick={handleAddToCart}>
              <ShoppingCartOutlined className="" style={{color:"#66b3ff",fontWeight:"bold"}} /> <br /> <span style={{color:"black"}}>Add to
              Cart</span>
            </a>
          </Tooltip>
            </div>
          </div>
        </MDBCardFooter>
      </MDBCard>
    </>
  );
};

export default CollegeCard3;

