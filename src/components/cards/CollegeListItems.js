import React from "react";
import { Link } from "react-router-dom";

const CollegeListItems = ({ college }) => {
  const {
    fees,
    category,
    subs,
    shipping,
    seatType,
    seats,
    sold,
  } = college;

  return (
    <ul className="list-group">
      <li className="list-group-item pt-3 pb-3">
        Fees{" "}
        <span className="label label-light label-pill float-right">
          $ {fees}
        </span>
      </li>

      {category && (
        <li className="list-group-item pt-3 pb-3">
          Category{" "}
          <Link
            to={`/category/${category.slug}`}
            className="label label-light label-pill float-right"
          >
            {category.name}
          </Link>
        </li>
      )}

      {subs && (
        <li className="list-group-item pt-3 pb-3">
          Branches
          {subs.map((s) => (
            <Link
              key={s._id}
              to={`/sub/${s.slug}`}
              className="label label-light label-pill float-right pl-3"
            >
              {s.name}
            </Link>
          ))}
        </li>
      )}

      <li className="list-group-item pt-3 pb-3">
        Shipping{" "}
        <span className="label label-light label-pill float-right">
          {shipping}
        </span>
      </li>

      <li className="list-group-item pt-3 pb-3">
        Seat Type{" "}
        <span className="label label-light label-pill float-right">
          {seatType}
        </span>
      </li>

      {/* <li className="list-group-item pt-3 pb-3">
        Brand{" "}
        <span className="label label-light label-pill float-right">
          {brand}
        </span>
      </li> */}

      <li className="list-group-item pt-3 pb-3">
        Seats Available{" "}
        <span className="label label-light label-pill float-right">
          {seats}
        </span>
      </li>

      <li className="list-group-item pt-3 pb-3">
        Sold{" "}
        <span className="label label-light label-pill float-right">
          {sold}
        </span>
      </li>
    </ul>
  );
};

export default CollegeListItems;
