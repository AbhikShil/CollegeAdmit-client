import React, { useEffect, useState } from "react";
import { getCollege } from "../functions/college";
import SingleCollege from "../components/cards/SingleCollege";
import { useParams } from "react-router";
import { getRelated } from "../functions/college";
import CollegeCard from "../components/cards/CollegeCard";

const College = ({ match }) => {
  const [college, setCollege] = useState({});
  const [related, setRelated] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    loadSingleCollege();
  }, [slug]);

  const loadSingleCollege = () =>{
    // getCollege(slug).then((res) => setCollege(res.data));
    getCollege(slug).then((res) => {
      setCollege(res.data);
      // load related
      getRelated(res.data._id).then((res) => setRelated(res.data));
    });
};
  return (
    <div className="container-fluid">
      <div className="row pt-4">
        <SingleCollege college={college} />
      </div>

      <div className="row">
        <div className="col text-center pt-5 pb-5">
          <hr />
          <h4>Related Colleges</h4>
          <hr />
        </div>
      </div>

      <div className="row pb-5">
        {related.length ? (
          related.map((r) => (
            <div key={r._id} className="col-md-4">
              <CollegeCard college={r} />
            </div>
          ))
        ) : (
          <div className="text-center col">No Products Found</div>
        )}
      </div>

    </div>
    
  );
};

export default College;
