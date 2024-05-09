import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => (
  // <nav>
  //   <ul className="nav flex-column">
  //     <li className="nav-item">
  //       <Link to="/user/history" className="nav-link">
  //         History
  //       </Link>
  //     </li>

  //     <li className="nav-item">
  //       <Link to="/user/password" className="nav-link">
  //         Password
  //       </Link>
  //     </li>

  //     <li className="nav-item">
  //       <Link to="/user/wishlist" className="nav-link">
  //         Wishlist
  //       </Link>
  //     </li>
  //   </ul>
  // </nav>
  <header style={{marginTop:"10px",marginBottom:"10px"}}>

<nav
       id="main-navbar"
       className="navbar navbar-expand-lg navbar-light"
       style={{width:"100%", backgroundColor:"#f5fad9"}}
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
      <a className="navbar-brand" href="/user/history">
        User
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
        <Link to="/user/history" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-tachometer-alt fa-fw me-3" style={{color:"blue"}}></i
            ><span>History</span>
        </Link>
        <Link to="/user/password" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-lock fa-fw me-3" style={{color:"green"}}></i
            ><span>Password</span>
        </Link>
        <Link to="/user/wishlist" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-heart fa-fw me-3" style={{color:"red"}}></i
            ><span>Wishlist</span>
        </Link>
      </div>
    </div>
  </nav>
  </header>
);

export default UserNav;
