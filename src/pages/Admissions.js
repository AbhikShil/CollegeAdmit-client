import React, { useState, useEffect } from "react";
import {
  getCollegesByCount,
  fetchCollegesByFilter,
} from "../functions/college";
import { getCategories } from "../functions/category";
import { getSubs } from "../functions/sub";
import { useSelector, useDispatch } from "react-redux";
import CollegeCard from "../components/cards/CollegeCard";
import { Menu, Slider, Checkbox, Radio } from "antd";
import {
  DollarOutlined,
  DownSquareOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Star from "../components/forms/Star";
import Search from "../components/forms/Search";

const { SubMenu } = Menu;

const Admissions = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fees, setFees] = useState([0, 0]);
  const [ok, setOk] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [star, setStar] = useState("");
  const [subs, setSubs] = useState([]);
  const [sub, setSub] = useState("");
  const [seatTypes, setSeatTypes] = useState([
    "CET", "Management", "Comed-k", "College Exam"
  ]);
  const [seatType, setSeatType] = useState("");

  let dispatch = useDispatch();
  let { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  useEffect(() => {
    loadAllColleges();
    // fetch categories
    getCategories().then((res) => setCategories(res.data));
    // fetch subcategories
    getSubs().then((res) => setSubs(res.data));
  }, []);

  const fetchColleges = (arg) => {
    fetchCollegesByFilter(arg).then((res) => {
      setColleges(res.data);
    });
  };

  // 1. load colleges by default on page load
  const loadAllColleges = () => {
    getCollegesByCount(12).then((p) => {
      setColleges(p.data);
      setLoading(false);
    });
  };

  // 2. load colleges on user search input
  useEffect(() => {
    const delayed = setTimeout(() => {
      // if(text){
      fetchColleges({ query: text });
      if(text==""){
        loadAllColleges();
      }
    }, 300);
    return () => clearTimeout(delayed);
  }, [text]);

  // 3. load colleges based on fees range
  useEffect(() => {
    if(fees[0]>=0 && fees[1]<500000 && fees[1]!=0){
    console.log("ok to request");
    fetchColleges({ fees });}
  }, [ok]);

  const handleSlider = (value) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });

    // reset
    setCategoryIds([]);
    setFees(value);
    setStar("");
    setSub("");
    setSeatType("");
    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };

  // 4. load colleges based on category
  // show categories in a list of checkbox
  const showCategories = () =>
    categories.map((c) => (
      <div key={c._id}>
        <Checkbox
          onChange={handleCheck}
          className="pb-2 pl-4 pr-4"
          value={c._id}
          name="category"
          checked={categoryIds.includes(c._id)}
        >
          {c.name}
        </Checkbox>
        <br />
      </div>
    ));

  // handle check for categories
  const handleCheck = (e) => {
    // reset
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setFees([0, 500000]);
    setStar("");
    setSub("");
    setSeatType("");
    // console.log(e.target.value);
    let inTheState = [...categoryIds];
    let justChecked = e.target.value;
    let foundInTheState = inTheState.indexOf(justChecked); // index or -1

    // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
    if (foundInTheState === -1) {
      inTheState.push(justChecked);
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1);
    }

    setCategoryIds(inTheState);
    // console.log(inTheState);
    fetchColleges({ category: inTheState });
  };


  // 5. show colleges by star rating
  const handleStarClick = (num) => {
    // console.log(num);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setFees([0, 500000]);
    setCategoryIds([]);
    setStar(num);
    setSub("");
    setSeatType("");
    fetchColleges({ stars: num });
  };

  const showStars = () => (
    <div className="pr-4 pl-4 pb-2">
      <Star starClick={handleStarClick} numberOfStars={5} />
      <Star starClick={handleStarClick} numberOfStars={4} />
      <Star starClick={handleStarClick} numberOfStars={3} />
      <Star starClick={handleStarClick} numberOfStars={2} />
      <Star starClick={handleStarClick} numberOfStars={1} />
    </div>
  );

  // 6. show colleges by sub category
  const showSubs = () =>
    subs.map((s) => (
      <div
        key={s._id}
        onClick={() => handleSub(s)}
        className="p-1 m-1 badge badge-secondary"
        style={{ cursor: "pointer" }}
      >
        {s.name}
      </div>
    ));

  const handleSub = (sub) => {
    // console.log("SUB", sub);
    setSub(sub);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setFees([0, 500000]);
    setCategoryIds([]);
    setStar("");
    setSeatType("");
    fetchColleges({ sub });
  };

  // 7. show colleges based on color
  const showSeatTypes = () =>
    seatTypes.map((c) => (
      <Radio
        value={c}
        key={c}
        name={c}
        checked={c === seatType}
        onChange={handleSeatType}
        className="pb-1 pl-4 pr-4"
      >
        {c}
      </Radio>
    ));

  const handleSeatType = (e) => {
    setSub("");
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setFees([0, 500000]);
    setCategoryIds([]);
    setStar("");
    setSeatType(e.target.value);
    fetchColleges({ seatType: e.target.value });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 pt-2 pb-3" style={{backgroundColor:"#f5dfe5", textAlign:"center"}}>
          <h4 className="pt-3" style={{color:"#f0666d"}}>Search/Filter</h4>
          <hr />

          <Menu
            defaultOpenKeys={["1", "2", "3", "4", "5"]}
            mode="inline"
          >
            {/* fees */}
            <SubMenu
              key="1"
              title={
                <span className="h6">
                  <DollarOutlined /> Fee-Range
                </span>
              }
            >
              <div>
                <Slider
                  className="ml-4 mr-4"
                  tipFormatter={(v) => `$${v}`}
                  range
                  value={fees}
                  onChange={handleSlider}
                  max="500000"
                />
              </div>
            </SubMenu>

            {/* category */}
            <SubMenu
              key="2"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Categories
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }}>{showCategories()}</div>
            </SubMenu>

            {/* stars */}
            <SubMenu
              key="3"
              title={
                <span className="h6">
                  <StarOutlined /> Rating
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }}>{showStars()}</div>
            </SubMenu>

            {/* sub category */}
            <SubMenu
              key="4"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Branches
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pl-4 pr-4">
                {showSubs()}
              </div>
            </SubMenu>

            {/* seatType */}
            <SubMenu
              key="5"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Seat Type
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pr-5">
                {showSeatTypes()}
              </div>
            </SubMenu>
          </Menu>
        </div>

        <div className="col-md-9 pt-2 collegeList">
        <Search />
        <hr/>
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4 className="text-danger">Colleges</h4>
          )}

          {colleges.length < 1 && <p>No colleges found</p>}

          <div className="row pb-5 colleges">
            {colleges.map((p) => (
              <div key={p._id} className="col-md-4 mt-3">
                <CollegeCard college={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admissions;
