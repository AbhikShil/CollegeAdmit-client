import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  // <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
  //   <ul className="nav flex-column">
  //     <li className="nav-item">
  //       <Link to="/admin/dashboard" className="nav-link">
  //         Dashboard
  //       </Link>
  //     </li>

  //     <li className="nav-item">
  //       <Link to="/admin/approved" className="nav-link">
  //         Approved
  //       </Link>
  //     </li>

  //     <li className="nav-item">
  //       <Link to="/admin/rejected" className="nav-link">
  //         Rejected
  //       </Link>
  //     </li>

  //     <li className="nav-item">
  //       <Link to="/admin/college" className="nav-link">
  //         College
  //       </Link>
  //     </li>

  //     <li className="nav-item">
  //       <Link to="/admin/colleges" className="nav-link">
  //         Colleges
  //       </Link>
  //     </li>

  //     <li className="nav-item">
  //       <Link to="/admin/category" className="nav-link">
  //         Category
  //       </Link>
  //     </li>

  //     <li className="nav-item">
  //       <Link to="/admin/sub" className="nav-link">
  //         Sub Category
  //       </Link>
  //     </li>

  //     <li className="nav-item">
  //       <Link to="/admin/coupon" className="nav-link">
  //         Coupon
  //       </Link>
  //     </li>

  //     <li className="nav-item">
  //       <Link to="/user/password" className="nav-link">
  //         Password
  //       </Link>
  //     </li>
  //   </ul>
  // </nav>
  <header>

<nav
       id="main-navbar"
       className="navbar navbar-expand-lg navbar-light bg-white"
       style={{width:"100%"}}
       >
    <div className="container-fluid">
      <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
        <i className="fas fa-bars"></i>
      </button>
      <a className="navbar-brand" href="#">
        Admin
      </a>
    </div>
  </nav>

  <nav
       id="sidebarMenu"
       className="collapse d-lg-block sidebar collapse bg-white fixed-side"
       >
    <div className="position-sticky">
    {/* <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
        <i className="fas fa-bars"></i>
      </button> */}
      <div className="list-group list-group-flush mx-3 mt-4">
        <Link to="/admin/dashboard" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-tachometer-alt fa-fw me-3"></i
            ><span>Main dashboard</span>
        </Link>
        <Link to="/admin/approved" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-users fa-fw me-3" style={{color:"green"}}></i
            ><span>Approved</span>
        </Link>
        <Link to="/admin/rejected" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-users fa-fw me-3" style={{color:"red"}}></i
            ><span>Rejected</span>
        </Link>
        <Link to="/admin/colleges" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-building fa-fw me-3"></i
            ><span>Colleges</span>
        </Link>
        <Link to="/admin/college" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-building fa-fw me-3"></i
            ><span>College</span>
        </Link>
        <Link to="/admin/category" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-globe fa-fw me-3"></i
            ><span>Category</span>
        </Link>
        <Link to="/admin/sub" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-chart-pie fa-fw me-3"></i
            ><span>Sub Category</span>
        </Link>
        <Link to="/admin/coupon" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-money-bill fa-fw me-3"></i
            ><span>Coupon</span>
        </Link>
        <Link to="/user/password" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-calendar fa-fw me-3"></i
            ><span>Password</span>
        </Link>
        {/* <a
           href="#"
           className="list-group-item list-group-item-action py-2 ripple active"
           >
          <i className="fas fa-chart-area fa-fw me-3"></i
            ><span>Webiste traffic</span>
        </a> */}
      </div>
    </div>
  </nav>
  </header>
);

export default AdminNav;
