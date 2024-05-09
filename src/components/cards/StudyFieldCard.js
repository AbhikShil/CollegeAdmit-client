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

const StudyFieldCard = ({ college }) => {
    

  return (
    <>
      <Card style={{ width: 300 }}>
        <div className="row">
          <div className="col-md-4">
            <img class="rounded-circle z-depth-2" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
            data-holder-rendered="true" style={{height:"50px",width:"50px", margin:"10px"}}/></div>
          <div className="col-md-6">
            <span style={{fontWeight:"bold",fontSize:"20px"}}>Engineering</span>
            <div><a href="/category/engineering" style={{fontWeight:"lighter", fontSize:"12px",marginLeft:""}}>View Colleges</a></div>
          </div>
        </div>
        
        <div className="sub-categories" style={{margin:"20px"}}>
          <p><u>Categories</u></p>
          <p><a href="/sub/cse" className="subCategoryLink">Computer Science & Engineering</a></p>
          <p><a href="/sub/me" className="subCategoryLink">Mechanical Engineering</a></p>
          <p><a href="/sub/ec" className="subCategoryLink">Electrical Engineering</a></p>
        </div>
      </Card>
    </>
  );
};

export default StudyFieldCard;

