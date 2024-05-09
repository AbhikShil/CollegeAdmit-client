import React, { useEffect, useState } from "react";
import { getAllColleges } from "../../functions/college";
import searchbox5 from "../../images/searchbox5.png"
import ReactSearchBox from "react-search-box";

const SearchCollegeHome= () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data,setData]=useState([]);

  useEffect(() => {
    loadAllColleges();
  }, []);

  const loadAllColleges = () => {
    getAllColleges().then((p) => {
      setColleges(p.data);
      let temp=[]
      for(let i=0;i<p.data.length;i++){
        temp.push({key:p.data[i].slug, value:p.data[i].title})
      }
      setData(temp)
    });
  };

  return (
    <>
    <div className="box" style={{top:"50%"}}>
        <a type="button" data-mdb-toggle="modal" data-mdb-target="#exampleModal"><img className="searchBoxImage" src={searchbox5} height="60px" width="1000px"/></a>
    </div>
      <div class="modal fade top" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-frame modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Search Colleges</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <ReactSearchBox
        placeholder="Search Colleges"
        value="College"
        data={data}
        callback={(record) => console.log(record)}
        onSelect={(record)=>{window.location.replace(`/college/${record.item.key}`);}}
        
      />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-mdb-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default SearchCollegeHome;
