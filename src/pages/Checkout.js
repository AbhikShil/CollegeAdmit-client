import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  getUserCart,
  emptyUserCart,
  saveStudentData,
  applyCoupon,
  getUser,
  createOrder,
} from "../functions/user";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UserDetailsForm from "../components/forms/UserDetailsForm";

import { getCategories, getCategorySubs } from "../functions/category";
import { getCollege } from "../functions/college";

import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router";
import { Country, State, City }  from 'country-state-city';
import { createPaymentIntent, getPaymentDetails } from "../functions/stripe";
import {Modal} from "antd";

const initialState = {
  name:"",
  phoneNumber:"",
  tenthPerc:"",
  tewlPerc:"",
  dob:"",
  aadharNumber:"",
  gender:"",
  tenthBoardName:"",
  tenthSchoolName:"",
  tewlBoardName:"",
  tewlSchoolName:"",
  country:"",
  city:"",
  state:"",
  cityIso:"",
  stateIso:"",
  countryIso:"",
  address:"",
  tenthImage:[],
  tewlImage:[],
  aadharImage:[],
  migrationCertImage:[],
};

const Checkout = ({ history }) => {
  const [colleges, setColleges] = useState([]);
  const [total, setTotal] = useState(0);
  const [userDataSaved, setUserDataSaved] = useState(false);
  const [couponValue, setCouponValue] = useState("");
  // discount fees
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [discountError, setDiscountError] = useState("");

  const dispatch = useDispatch();
  const { user, coupon } = useSelector((state) => ({ ...state }));
  const [values, setValues] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [subOptions, setSubOptions] = useState([]);
  const [arrayOfSubs, setArrayOfSubs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate= useNavigate();
  // router
  const { slug } = useParams();
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState();
  const [selectedStateCode, setSelectedStateCode] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [payment,setPayment] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [paymentId, setPaymentId] = useState('');
  const [signature, setSignature] = useState('');

    const changeCountry=(event)=> {
      setSelectedCountryCode(event.target.value);
      console.log(event.target.value);
      values.country=Country.getCountryByCode(event.target.value).name;
      values.countryIso=event.target.value;
      setSelectedCountry(Country.getCountryByCode(event.target.value).name);
      setStates(State.getStatesOfCountry(event.target.value));
    }

    const changeState=(event)=> {
      setSelectedStateCode(event.target.value);
      console.log(event.target.value,selectedCountryCode);
      values.state=State.getStateByCodeAndCountry(event.target.value,selectedCountryCode).name;
      values.stateIso=event.target.value;
      setSelectedState(State.getStateByCode(event.target.value).name);
      setCities(City.getCitiesOfState(selectedCountryCode,event.target.value));
    }

    const changeCity=(event)=> {
      setSelectedCity(event.target.value);
      values.city=event.target.value;
    }
  // useEffect(() => {
  //   loadCollege();
  //   loadCategories();
  // }, []);

  const loadCollege = () => {
    getCollege(slug).then((p) => {
      // console.log("single product", p);
      // 1 load single proudct
      setValues({ ...values, ...p.data });
      // 2 load single product category subs
      getCategorySubs(p.data.category._id).then((res) => {
        setSubOptions(res.data); // on first load, show default subs
      });
      // 3 prepare array of sub ids to show as default sub values in antd Select
      let arr = [];
      p.data.subs.map((s) => {
        arr.push(s._id);
      });
      console.log("ARR", arr);
      setArrayOfSubs((prev) => arr); // required for ant design select to work
    });
  };

  const loadCategories = () =>
    getCategories().then((c) => {
      console.log("GET CATEGORIES IN UPDATE COLLEGE", c.data);
      setCategories(c.data);
    });

  // const handleSubmit = (e) => {
  //  e.preventDefault();
  //   setLoading(true); 

  //   values.subs = arrayOfSubs;
  //   values.category = selectedCategory ? selectedCategory : values.category;

  //   updateCollege(slug, values, user.token)
  //     .then((res) => {
  //       setLoading(false);
  //       toast.success(`"${res.data.title}" is updated`);
  //       navigate("/admin/colleges");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //       toast.error(err.response.data.err);
  //     });
  // };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleChangeDOB = (e) => {
    setValues({ ...values, "dob": e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, subs: [] });

    setSelectedCategory(e.target.value);

    getCategorySubs(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATGORY CLICK", res);
      setSubOptions(res.data);
    });

    console.log("EXISTING CATEGORY values.category", values.category);

    // if user clicks back to the original category
    // show its sub categories in default
    if (values.category._id === e.target.value) {
      loadCollege();
    }
    // clear old sub category ids
    setArrayOfSubs([]);
  };

  useEffect(() => {
    getUserCart(user.token).then((res) => {
      console.log("user cart res", JSON.stringify(res.data, null, 4));
      setColleges(res.data.colleges);
      setTotal(res.data.cartTotal);
    });
    getUser(user.token).then((res) => {
      setValues({ ...values, ...res.data });
    });
  }, []);

  const emptyCart = () => {
    // remove from local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    // remove from redux
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    // remove from backend
    emptyUserCart(user.token).then((res) => {
      setColleges([]);
      setTotal(0);
      setTotalAfterDiscount(0);
      setCouponValue("");
      toast.success("Cart is emapty. Contniue shopping.");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(address);
    setLoading(true);
    saveStudentData(user.token, values).then((res) => {
      if (res.data.ok) {
        setUserDataSaved(true);
        toast.success("User Data Saved");
        setLoading(false);
      }
    }).catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.response.data.err);
    });
  };

  const applyDiscountCoupon = () => {
    console.log("send coupon to backend", couponValue);
    applyCoupon(user.token, couponValue).then((res) => {
      console.log("RES ON COUPON APPLIED", res.data);
      if (res.data) {
        setTotalAfterDiscount(res.data);
        // update redux coupon applied true/false
        dispatch({
          type: "COUPON_APPLIED",
          payload: true,
        });
      }
      // error
      if (res.data.err) {
        setDiscountError(res.data.err);
        // update redux coupon applied true/false
        dispatch({
          type: "COUPON_APPLIED",
          payload: false,
        });
      }
    });
  };

  // const showAddress = () => (
  //   <>
  //     <ReactQuill theme="snow" value={address} onChange={setAddress} />
  //     <button className="btn btn-primary mt-2" onClick={saveAddressToDb}>
  //       Save
  //     </button>
  //   </>
  // );

  function countDownSuccess() {
    let secondsToGo = 3;
    const modal = Modal.success({
      title: 'Payment Successfull.',
      content: `Redirecting You In ${secondsToGo} Second.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `Redirecting You In ${secondsToGo} Second.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }

  const showCollegeSummary = () =>
    colleges.map((p, i) => (
      <div key={i}>
        <p>
          {p.college.title} x {p.count} ={" "}
          {p.college.fees * p.count}
        </p>
      </div>
    ));

  const showApplyCoupon = () => (
    <>
      <input
        onChange={(e) => {
          setCouponValue(e.target.value);
          setDiscountError("");
        }}
        value={couponValue}
        type="text"
        className="form-control"
      />
      <button onClick={applyDiscountCoupon} className="btn btn-primary mt-2">
        Apply
      </button>
    </>
  );

  const onPlaceOrder = (e) =>{
    e.preventDefault();

    createPaymentIntent(user.token, coupon).then((res) => {
      console.log("Name:",user.name)
      var options = {
        "key": process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        "amount": res.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": res.data.currency,
        "name": "NODON",
        "description": "res.data.notes",
        "image": "https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/NodonLogo.svg",
        "order_id": res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
            setPayment(true);
            setOrderId(response.razorpay_order_id);
            setPaymentId(response.razorpay_payment_id);
            setSignature(response.razorpay_signature);
            getPaymentDetails(response.razorpay_payment_id).then(res=>{
              console.log("Payment:",res.data);
              createOrder(res.data, user.token).then((response) => {
                  if (response.data.ok) {
                    // empty cart from local storage
                    if (typeof window !== "undefined") localStorage.removeItem("cart");
                    // empty cart from redux
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: [],
                    });
                    // reset coupon to false
                    dispatch({
                      type: "COUPON_APPLIED",
                      payload: false,
                    });
                    // empty cart from database
                    emptyUserCart(user.token);
                  }
              });
            });
            // window.location.pathname='/user/history'
            countDownSuccess();
            setTimeout(() => {
              navigate('/user/history'); //this.props.navigation.navigate('Login')
          }, 3000); 
        },
        "prefill": {
            "name": user.name,
            "email": user.email,
            "contact": "" 
        },
        "notes": {
            "address": "NODON Address"
        },
        "theme": {
            "color": "#3399cc"
        }
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
      rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
      });
      // document.getElementById('rzp-button1').onclick = function(e){
      //   rzp1.open();
      //   e.preventDefault();
      // }
    });
  };

  

  return (
    <div className="row" style={{width:"100%"}}>
      <div className="col-md-7 ml-2 mr-2 mb-2 mt-2">
      {loading ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
            <h4 style={{textAlign:"center"}}>Student Details</h4>
          )}
          <hr />
        {/* <h4>Delivery Address</h4>
        <br />
        <br />
        {showAddress()}
        <hr /> */}
        <UserDetailsForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          setValues={setValues}
          values={values}
          setCountries={setCountries}
          countries={countries}
          cities={cities}
          states={states}
          setStates={setStates}
          setCities={setCities}
          selectedCity={selectedCity}
          selectedCountry={selectedCountry}
          selectedState={selectedState}
          selectedCountryCode={selectedCountryCode}
          selectedStateCode={selectedStateCode}
          setSelectedCountry={setSelectedCountry}
          setSelectedState={setSelectedState}
          setSelectedCity={setSelectedCity}
          setSelectedCountryCode={setSelectedCountryCode}
          setSelectedStateCode={setSelectedStateCode}
          changeCity={changeCity}
          changeCountry={changeCountry}
          changeState={changeState}
          setLoading={setLoading}
          handleChangeDOB={handleChangeDOB}
        />
        {/* <h4>Got Coupon?</h4>
        <br />
        {showApplyCoupon()}
        <br />
        {discountError && <p className="bg-danger p-2">{discountError}</p>} */}
      </div>

      <div className="col-md-4 ml-2">
        <h4 style={{textAlign:"center"}}>Order Summary</h4>
        <hr />
        <p>Colleges {colleges.length}</p>
        <hr />
        {showCollegeSummary()}
        <hr />
        <p>Cart Total: {total}</p>

        {totalAfterDiscount > 0 && (
          <p className="bg-success p-2">
            Discount Applied: Total Payable: ${totalAfterDiscount}
          </p>
        )}

        <hr/>

        <h4>Got Coupon?</h4>
        <br />
        {showApplyCoupon()}
        <br />
        {discountError && <p className="bg-danger p-2 pb-3">{discountError}</p>}

        <div className="row">
          <div className="col-md-6 pt-3">
            <button
              className="btn btn-primary"
              disabled={!userDataSaved || !colleges.length}
              onClick={onPlaceOrder}
            >
              Place Order
            </button>
            {!userDataSaved?<p className="fw-bold text-muted">*Save User Data To Place Order</p>:<span></span>}
          </div>

          <div className="col-md-6 pt-3 pb-2">
            <button
              disabled={!colleges.length}
              onClick={emptyCart}
              className="btn btn-primary"
            >
              Empty Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
//23280703109657