import React, { useState, useEffect } from "react";
import { getCategory } from "../../functions/category";
import CollegeCard from "../../components/cards/CollegeCard";
import { useParams } from "react-router";

const CategoryHome = () => {
  const [category, setCategory] = useState({});
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    getCategory(slug).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setCategory(res.data.category);
      setColleges(res.data.colleges);
      setLoading(false);
    });
  }, [slug]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {loading ? (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              Loading...
            </h4>
          ) : (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              {colleges.length} Colleges in "{category.name}" category
            </h4>
          )}
        </div>
      </div>

      <div className="row pb-3">
        {colleges.map((p) => (
          <div className="col-md-4" key={p._id}>
            <CollegeCard college={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryHome;
