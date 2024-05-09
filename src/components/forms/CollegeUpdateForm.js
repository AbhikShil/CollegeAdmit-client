import React from "react";
import { Select } from "antd";
import 'antd/dist/antd.css';

const { Option } = Select;

const CollegeUpdateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCategoryChange,
  categories,
  subOptions,
  arrayOfSubs,
  setArrayOfSubs,
  selectedCategory,
}) => {
  // destructure
  const {
    title,
    description,
    fees,
    category,
    shipping,
    seats,
    ratings,
    seatTypes,
    seatType,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Fees</label>
        <input
          type="number"
          name="fees"
          className="form-control"
          value={fees}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Available</label>
        <select
          value={shipping === "Yes" ? "Yes" : "No"}
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label>Number of seats</label>
        <input
          type="number"
          name="seats"
          className="form-control"
          value={seats}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Star Rating</label>
        <input
          type="number"
          name="ratings"
          className="form-control"
          value={ratings}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Seat Type</label>
        <select value={seatType} name="seatType" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {seatTypes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          value={selectedCategory ? selectedCategory : category._id}
        >
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label>Sub Categories</label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          value={arrayOfSubs}
          onChange={(value) => setArrayOfSubs(value)}
        >
          {subOptions.length &&
            subOptions.map((s) => (
              <Option key={s._id} value={s._id}>
                {s.name}
              </Option>
            ))}
        </Select>
      </div>

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default CollegeUpdateForm;
