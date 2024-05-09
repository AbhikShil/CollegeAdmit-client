import React, { useEffect, useState } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { getCollegesByCount, removeCollege } from "../../../functions/college";
import AdminCollegeCard from "../../../components/cards/AdminCollegeCard";
import {useSelector} from "react-redux";
import { toast } from "react-toastify";

const AllColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);

  const {user} = useSelector((state) => ({...state}));

  useEffect(() => {
    loadAllColleges();
  }, []);

  const loadAllColleges = () => {
    setLoading(true);
    getCollegesByCount(100)
      .then((res) => {
        setColleges(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemove = (slug) =>{
    if(window.confirm(`Delete ${slug}?`)){
      removeCollege(slug, user.token).then((res)=> {
        loadAllColleges();
        toast.error(`${res.data.title} is deleted`);
      }).catch((err) => {
        if (err.response.status === 400) toast.error(err.response.data);
        console.log(err);
      });
    }
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>All Colleges</h4>
          )}
          <div className="row">
            {colleges.map((college) => (
              <div key={college._id} className="col-md-4 pb-3">
                <AdminCollegeCard college={college}  handleRemove={handleRemove}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllColleges;
