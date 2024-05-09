import React, { useEffect, useState } from "react";
import { getColleges, getCollegesCount } from "../../functions/college";
import CollegeCard from "../cards/CollegeCard";
import LoadingCard from "../cards/LoadingCard";
import { Pagination } from "antd";
import 'antd/dist/antd.css';
import CollegeCard2 from "../cards/CollegeCard2";
import CollegeCard3 from "../cards/CollegeCard3";

const TopColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [collegesCount, setCollegesCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadAllColleges();
  }, [page]);

  useEffect(() => {
    getCollegesCount().then((res) => setCollegesCount(res.data));
  }, []);

  const loadAllColleges = () => {
    setLoading(true);
    // sort, order, limit
    getColleges("sold", "desc", page).then((res) => {
      console.log("res:",res.data);
      setColleges(res.data);
      setLoading(false);
    });
  };

  return (
    <>
      <div className="container HomeCardConatainer" style={{padding:"20px"}}>
        {loading ? (
          <LoadingCard count={4} />
        ) : (
          <div className="row">
            {colleges.map((college) => (
              <div key={college._id} className="col-md-3 topCollegesCollegeCard">
                <CollegeCard3 college={college} />
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
            onChange={(value) => setPage(value)}
          />
        </nav>
      </div>
      <br/>
      <br/>
    </>
  );
};

export default TopColleges;
