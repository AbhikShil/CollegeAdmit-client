import React, { useEffect, useState } from "react";
import { getColleges, getCollegesCount } from "../../functions/college";
import CollegeCard from "./CollegeCard";
import LoadingCard from "./LoadingCard";
import { Card, Pagination } from "antd";
import 'antd/dist/antd.css';
import StudyFieldCard from "./StudyFieldCard";

const StudyField = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="container">
        {loading ? (
          <LoadingCard count={4} />
        ) : (
          <div className="row">
            <div key="1" className="col-md-3 studyFieldDiv">
              <Card className="studyFieldCard">
                <div className="row">
                  <div className="col-md-4">
                    <img class="rounded-circle z-depth-2" alt="100x100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5ohztFO8faT_d9zLALOKC63XC8UAyx4Q5Q&usqp=CAU"
                    data-holder-rendered="true" style={{height:"50px",width:"50px", margin:"10px",color:"blue"}}/></div>
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
            </div>
            <div key="2" className="col-md-3 studyFieldDiv">
              <Card className="studyFieldCard">
                <div className="row">
                  <div className="col-md-4">
                    <img class="rounded-circle z-depth-2" alt="100x100" src="https://www.freepnglogos.com/uploads/medicine-logo-png-1.png"
                    data-holder-rendered="true" style={{height:"50px",width:"50px", margin:"10px"}}/></div>
                    <div className="col-md-6">
                      <span style={{fontWeight:"bold",fontSize:"20px"}}>Medical</span>
                    <div><a href="/category/medical" style={{fontWeight:"lighter", fontSize:"12px",marginLeft:""}}>View Colleges</a></div>
                  </div>
                </div>
                <div className="sub-categories" style={{margin:"20px"}}>
                  <p><u>Categories</u></p>
                  <p><a href="/sub/mbbs" className="subCategoryLink">Bachelor of Medicine, Bachelor of Surgery (MBBS)</a></p>
                  <p><a href="/sub/nursing" className="subCategoryLink">Nursing</a></p>
                </div>
              </Card>
            </div>
            <div key="3" className="col-md-3 studyFieldDiv">
            <Card className="studyFieldCard">
                <div className="row">
                  <div className="col-md-4">
                    <img class="rounded-circle z-depth-2" alt="100x100" src="https://t4.ftcdn.net/jpg/01/11/86/95/360_F_111869553_04OBDskYYU5r0b9PW3cfKfD3fkxlfAzW.jpg"
                    data-holder-rendered="true" style={{height:"50px",width:"50px", margin:"10px"}}/></div>
                    <div className="col-md-6">
                      <span style={{fontWeight:"bold",fontSize:"20px"}}>Arts</span>
                    <div><a href="/category/law" style={{fontWeight:"lighter", fontSize:"12px",marginLeft:""}}>View Colleges</a></div>
                  </div>
                </div>
                <div className="sub-categories" style={{margin:"20px"}}>
                  <p><u>Categories</u></p>
                  <p><a href="/sub/ma" className="subCategoryLink">Bachelor of Arts (BA)</a></p>
                  <p><a href="/sub/ba" className="subCategoryLink">Master of Arts (MA)</a></p>
                  <p><a href="/sub/ba" className="subCategoryLink">Bachelor of Fine Arts (BFA)</a></p>
                </div>
              </Card>
            </div>
            <div key="4" className="col-md-3 studyFieldDiv">
            <Card className="studyFieldCard">
                <div className="row">
                  <div className="col-md-4">
                    <img class="rounded-circle z-depth-2" alt="100x100" src="https://media.istockphoto.com/vectors/finance-graphic-bars-up-rising-arrow-vector-illustration-design-vector-id961649530?k=20&m=961649530&s=612x612&w=0&h=Le0PvWr6uAIxxuMsbbfUJVhSuL4kxnpjbrPTYIQiNfs="
                    data-holder-rendered="true" style={{height:"50px",width:"50px", margin:"10px"}}/></div>
                    <div className="col-md-6">
                      <span style={{fontWeight:"bold",fontSize:"20px"}}>Commerce</span>
                    <div><a href="/category/commerce" style={{fontWeight:"lighter", fontSize:"12px",marginLeft:""}}>View Colleges</a></div>
                  </div>
                </div>
                <div className="sub-categories" style={{margin:"20px"}}>
                  <p><u>Categories</u></p>
                  <p><a href="/sub/bcom" className="subCategoryLink">B.Com</a></p>
                  <p><a href="/sub/mcom" className="subCategoryLink">M.Com</a></p>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>

      <br/>
      <br/>
    </>
  );
};

export default StudyField;
