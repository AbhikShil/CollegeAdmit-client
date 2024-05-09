import React from "react";
import ModalImage from "react-modal-image";
import laptop from "../../../images/laptop.png";

const StudentDetails = ({ user }) => {
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
    country,
    city,
    state,
    aadharImage,
    tenthImage,
    tewlImage,
    migrationCertImage,
    address,
  } = user;

  return (
    <ul className="list-group">
      <li className="list-group-item pt-3 pb-3">
        Full Name{" "}
        <span className="label label-light label-pill float-right">
           {name}
        </span>
      </li>

      <li className="list-group-item pt-3 pb-3">
        Phone Number{" "}
        <span className="label label-light label-pill float-right">
          {phoneNumber}
        </span>
      </li>

      <li className="list-group-item pt-3 pb-3">
        Date Of Birth{" "}
        <span className="label label-light label-pill float-right">
          {dob}
        </span>
      </li>

      <li className="list-group-item pt-3 pb-3">
        Gender{" "}
        <span className="label label-light label-pill float-right">
          {gender}
        </span>
      </li>

      <li className="list-group-item pt-3 pb-3">
        10th Percentage{" "}
        <span className="label label-light label-pill float-right">
          {tenthPerc}
        </span>
      </li>

      <li className="list-group-item pt-3 pb-3">
        10th Board Name{" "}
        <span className="label label-light label-pill float-right">
          {tenthBoardName}
        </span>
      </li>
      <li className="list-group-item pt-3 pb-3">
        10th School Name{" "}
        <span className="label label-light label-pill float-right">
          {tenthSchoolName}
        </span>
      </li>
      <li className="list-group-item pt-3 pb-3">
        12th Percentage{" "}
        <span className="label label-light label-pill float-right">
          {tewlPerc}
        </span>
      </li>
      <li className="list-group-item pt-3 pb-3">
        12th Board Name{" "}
        <span className="label label-light label-pill float-right">
          {tewlBoardName}
        </span>
      </li>
      <li className="list-group-item pt-3 pb-3">
        12th School Name{" "}
        <span className="label label-light label-pill float-right">
          {tewlSchoolName}
        </span>
      </li>
      <li className="list-group-item pt-3 pb-3">
        Aadhar Number{" "}
        <span className="label label-light label-pill float-right">
          {aadharNumber}
        </span>
      </li>
      <li className="list-group-item pt-3 pb-3">
        Country{" "}
        <span className="label label-light label-pill float-right">
          {country}
        </span>
      </li>
      <li className="list-group-item pt-3 pb-3">
        State{" "}
        <span className="label label-light label-pill float-right">
          {state}
        </span>
      </li>
      <li className="list-group-item pt-3 pb-3">
        City{" "}
        <span className="label label-light label-pill float-right">
          {city}
        </span>
      </li>
      <li className="list-group-item pt-3 pb-3">
        Address{" "}
        <span className="label label-light label-pill float-right">
          {address}
        </span>
      </li>
      <li className="list-group-item pt-3 pb-3">
        10th Marks Sheet:{" "}
        <span className="label label-light label-pill float-right">
            {tenthImage.length ? (
              <ModalImage small={tenthImage[0].url} large={tenthImage[0].url} style={{width:"100px",height:"100px"}}/>
            ) : (
              <ModalImage small={laptop} large={laptop} />
            )}
        </span>
      </li>
      <li className="list-group-item pt-3 pb-3">
        12th Marks Sheet:{" "}
        <span className="label label-light label-pill float-right">
            {tewlImage.length ? (
              <ModalImage small={tewlImage[0].url} large={tewlImage[0].url} />
            ) : (
              <ModalImage small={laptop} large={laptop} />
            )}
        </span>
      </li>
      <li className="list-group-item pt-3 pb-3">
        Migration Certificate{" "}
        <span className="label label-light label-pill float-right">
            {migrationCertImage.length ? (
              <ModalImage small={migrationCertImage[0].url} large={migrationCertImage[0].url} />
            ) : (
              <ModalImage small={laptop} large={laptop} />
            )}
        </span>
      </li>
      <li className="list-group-item pt-3 pb-3">
        Aadhar Image{" "}
        <span className="label label-light label-pill float-right">
            {aadharImage.length ? (
              <ModalImage small={aadharImage[0].url} large={aadharImage[0].url} />
            ) : (
              <ModalImage small={laptop} large={laptop} />
            )}
        </span>
      </li>
    </ul>
  );
};

export default StudentDetails;
