import React from "react";
import { Link } from "react-router-dom";

const CollegeNav = () => (
//   <nav>
//     <ul className="nav flex-column">
//       <li className="nav-item">
//         <Link to="/college/applications" className="nav-link">
//           Student Applications
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link to="/college/approved" className="nav-link">
//           Approved Applications
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link to="/college/rejected" className="nav-link">
//           Rejected Applications
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link to="/college/onhold" className="nav-link">
//           On-Hold Applications
//         </Link>
//       </li>
//     </ul>
//   </nav>

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
      <a className="navbar-brand" href="/college/applications">
        College
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
        <Link to="/college/applications" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-tachometer-alt fa-fw me-3"></i
            ><span>Main dashboard</span>
        </Link>
        <Link to="/college/approved" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-users fa-fw me-3" style={{color:"green"}}></i
            ><span>Approved</span>
        </Link>
        <Link to="/college/rejected" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-users fa-fw me-3" style={{color:"red"}}></i
            ><span>Rejected</span>
        </Link>
        <Link to="/college/onhold" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-users fa-fw me-3" style={{color:"yellow"}}></i
            ><span>On-Hold</span>
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

export default CollegeNav;
