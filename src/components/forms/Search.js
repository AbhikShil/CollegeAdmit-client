import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;
  const navigate= useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    if(text===""){
      return;
    }
    e.preventDefault();
    navigate(`/admission?${text}`);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit} >
      {/* <input
        onChange={handleChange}
        type="search"
        value={text}
        className="form-control mr-sm-2"
        placeholder="Search"
      />
      <SearchOutlined onClick={handleSubmit} style={{ cursor: "pointer" }} /> */}
      <div className="container">
    <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-16">
            <div className="search">  <i className="fa fa-search"></i> <input onChange={handleChange} type="search" value={text} className="form-control" placeholder="Enter A College Name"/> <button className="btn btn-primary" onClick={handleSubmit} style={{ cursor: "pointer" }}>Search</button> </div>
        </div>
    </div>
</div>

    </form>
  );
};

export default Search;
