import React from "react";
// import { DatePicker, Select } from "antd";
import 'antd/dist/antd.css';
import FileUploadUser from "./FileUploadUser";

// const { Option } = Select;

const UserDetailsForm = ({
  handleSubmit,
  handleChange,
  handleChangeDOB,
  setValues,
  setLoading,
  values,
  countries,
  cities,
  states,
  selectedCity,
  selectedCountry,
  selectedState,
  selectedCountryCode,
  selectedStateCode,
  changeCity,
  changeCountry,
  changeState,
}) => {
  // destructure
  const {
    name,
    phoneNumber,
    tenthPerc,
    tewlPerc,
    dob,
    aadharNumber,
    gender,
    tenthBoardName,
    tenthSchoolName,
    tewlBoardName,
    tewlSchoolName,
    address,
  } = values;

  const udob=dob.slice(0,10);

  return (
    <form onSubmit={handleSubmit} className="studentForm p-4" >
      <div className="form-group mx-sm-3">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mx-sm-3">
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          className="form-control"
          value={phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mx-sm-3">
      <label>Date of Birth</label>
      <input
          type="date"
          name="dob"
          className="form-control"
          value={udob}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mx-sm-3">
        <label>Gender</label>
        <select
          value={gender}
          name="gender"
          className="form-control"
          onChange={handleChange}
          required
        >
          <option value="">Please Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div className="form-group mx-sm-3">
        <label>10th Percentage</label>
        <input
          type="number"
          name="tenthPerc"
          className="form-control"
          value={tenthPerc}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mx-sm-3">
        <label>10th Board Name</label>
        <input
          type="text"
          name="tenthBoardName"
          className="form-control"
          value={tenthBoardName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mx-sm-3">
        <label>10th School Name</label>
        <input
          type="text"
          name="tenthSchoolName"
          className="form-control"
          value={tenthSchoolName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group mx-sm-3">
        <label>12th/Diploma Percentage</label>
        <input
          type="number"
          name="tewlPerc"
          className="form-control"
          value={tewlPerc}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mx-sm-3">
        <label>12th Board Name(If Diploma Mention N/A)</label>
        <input
          type="text"
          name="tewlBoardName"
          className="form-control"
          value={tewlBoardName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mx-sm-3">
        <label>12th/Diploma School/College Name</label>
        <input
          type="text"
          name="tewlSchoolName"
          className="form-control"
          value={tewlSchoolName}
          onChange={handleChange}
          required
        />
      </div>


      <div className="form-group mx-sm-3">
        <label>Aadhar Number</label>
        <input
          type="text"
          name="aadharNumber"
          className="form-control"
          value={aadharNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group mx-sm-3'>
          <label>Country</label>
          <select
            placeholder="Country"
            className="form-control"
            value={selectedCountryCode}
            onChange={changeCountry}
            required
          >
            <option value="">--Choose Country--</option>
            {countries.map((e, key) => {
              return <option key={key} value={e.isoCode} >{e.name}</option>;
            })}
          </select>
        </div>

        <div className='form-group mx-sm-3'>
          <label>State</label>
          <select
            placeholder="State"
            className="form-control"
            value={selectedStateCode}
            onChange={changeState}
            required
          >
            <option value="">--Choose State--</option>
            {states.map((e, key) => {
              return <option key={key} value={e.isoCode}>{e.name}</option>;
            })}
          </select>
        </div>

        <div className='form-group mx-sm-3'>
          <label>City</label>
          <select placeholder="City" className="form-control" value={selectedCity} onChange={changeCity} required>
            <option value="">--Choose City--</option>
            {cities.map((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>
        <div className="form-group mx-sm-3">
            <label>Complete Address</label>
            <textarea className="form-control" placeholder="Enter The Complete Address" name="address" value={address} onChange={handleChange} rows="3" required></textarea>
        </div>


        <div className='form-group mx-sm-3 mt-2'>
            <FileUploadUser
                values={values}
                setValues={setValues}
                setLoading={setLoading}
            />
        </div>


      
      <br />
      <div className="form-group" style={{display:"flex", justifyContent:"center"}}>
      <button className="btn btn-primary col-md-2 mb-2 ml-2">Save</button>
      </div>
    </form>
  );
};

export default UserDetailsForm;
