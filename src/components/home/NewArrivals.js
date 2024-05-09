import React, { useEffect, useState } from "react";
import { getColleges, getCollegesCount } from "../../functions/college";
import CollegeCard from "../cards/CollegeCard";
import LoadingCard from "../cards/LoadingCard";
import { Pagination } from "antd";
import 'antd/dist/antd.css';
import CollegeCard2 from "../cards/CollegeCard2";
import CollegeCard3 from "../cards/CollegeCard3";
const NewArrivals = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [collegesCount, setCollegesCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadAllColleges();
    getCollegesCount().then((res) => setCollegesCount(res.data));
    console.log(collegesCount);
  }, [page]);

  // useEffect(() => {
  //   getCollegesCount().then((res) => setCollegesCount(res.data));
  //   console.log(collegesCount);
  // }, []);

  const loadAllColleges = () => {
    setLoading(true);
    // sort, order, limit
    getColleges("createdAt", "desc", page).then((res) => {
      setColleges(res.data);
      setLoading(false);
    });
  };

  // const handleChange = (page) => {
  //   this.setState({
  //     current: page,
  //   });
  //   setPage(page);
  // };
  return (
    <>
      <div className="container HomeCardConatainer" style={{padding:"20px"}}>
        {loading ? (
          <LoadingCard count={4} />
        ) : (
          <div className="row">
            {colleges.map((college) => (
              <div key={college._id} className="col-md-3 newArrivalCollegeCard">
                <CollegeCard3 college={college}/>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <nav className="col-md-4 offset-md-4 text-center pt-5 p-3">
          <Pagination
            current={page}
            total={Math.ceil(collegesCount / 4) * 10}
            onChange={(value) => {setPage(value)}}
            // onChange={(value) => {handleChange(value)}}
          />
        </nav>
      </div>
    </>
  );
};

export default NewArrivals;
