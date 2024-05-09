import React, { useState } from 'react';
import '../../../src/index.css';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

export default function Header() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const [current, setCurrent] = useState("home");
  // const [showNavRight, setShowNavRight] = useState(false);
  const handleClick=(e)=>{
    setCurrent(e.key);
  };

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light' className='navbar' sticky>
        <MDBContainer fluid>
          <MDBNavbarBrand ><Link to='/' className='item nav-brand'>NODON</Link></MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0' onClick={handleClick} slectedKeys={[current]}>
              <MDBNavbarItem key="home" className='nav-item' >
                <MDBNavbarLink>
                  <Link to='/login' className='item'>Admission</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem key="el" className='nav-item'>
                <MDBNavbarLink><Link to='/elearning' className='item'>eLearning</Link></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem key="bs" className='nav-item'>
                <MDBNavbarLink>
                <Link to='/book' className='item'>
                  Book Store
                </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem key="help" className='nav-item'>
                <MDBNavbarLink>
                <Link to='/help'className='item'>
                  Help
                </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <form className='d-flex input-group w-auto loginbtn'>
              <MDBBtn color='info' rounded href='/login'>Login</MDBBtn>
            </form>
            <form className='d-flex input-group w-auto regbtn'>
              <MDBBtn color='primary' rounded href='/register'>Register</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
