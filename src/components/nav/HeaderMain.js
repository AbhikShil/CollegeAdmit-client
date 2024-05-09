import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Badge } from "antd";
import {Link} from 'react-router-dom';
import { auth } from '../../firebase';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

export default function HeaderMain() {
  const [showBasic, setShowBasic] = useState(false);
  const [current, setCurrent] = useState("home");
  // const [showNavRight, setShowNavRight] = useState(false);
  const currUser = auth.currentUser;
  const dispatch= useDispatch();
  const navigate = useNavigate()
  const {user, cart} = useSelector((state) => ({...state}));
  console.log("userState:",user);
  const handleClick=(e)=>{
    setCurrent(e.key);
  };

  const handleLogout = () =>{
      auth.signOut();
      dispatch({
          type:'LOGOUT',
          payload: null,
      });
      navigate('/login')
  }

  return (
    <MDBNavbar expand='lg' light bgColor='light' className='navbar' sticky> 
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'><img src="https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/NodonLogo.svg" height='20' alt='' loading="lazy"/></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          {!user &&(
            <MDBNavbarItem key="home" className='nav-item' >
                <MDBNavbarLink>
                  <Link to='/admission' className='item'>Admission</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            )}

              {user && user.role !="college"&& (
              <MDBNavbarItem key="home" className='nav-item' >
                <MDBNavbarLink>
                  <Link to='/admission' className='item'>Admission</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              )}
            <MDBNavbarItem key="help" className='nav-item'>
                <MDBNavbarLink>
                    <Link to='/help'className='item'>
                        Help
                    </Link>
                </MDBNavbarLink>
            </MDBNavbarItem>
            {!user &&(
              <MDBNavbarItem key="cart" className='nav-item'>
                <MDBNavbarLink>
                <Link to="/cart">
                {/* <i className="fas fa-cart-arrow-down item"></i> */}
                  <Badge  count={cart.length} offset={[9, 0]} color="primary">
                  <i className="fas fa-cart-arrow-down"><span className='cartLink'>Cart</span></i>
                  </Badge>
                </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              )}
              {user && user.role !="college"&& (
              <MDBNavbarItem key="cart" className='nav-item'>
                <MDBNavbarLink>
                <Link to="/cart">
                <i className="fas fa-cart-arrow-down"></i>
                  <Badge count={cart.length} offset={[9, 0]}>
                    <ShoppingCartOutlined/>
                  </Badge>
                </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              )}

              {user && (
                
                <MDBNavbarItem  >
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link'>
                    {currUser.displayName}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu style={{zIndex:'1000'}}>
                    <MDBDropdownItem >
                      <MDBDropdownLink>
                        {/* <Link to='/login' className='item'>Dashboard</Link> */}
                        {user && user.role === "subscriber" && (
                            <Link to="/user/history">Dashboard</Link>
                        )}

                        {user && user.role === "college" && (
                            <Link to="/college/applications">Dashboard</Link>
                        )}

                        {user && user.role === "admin" && (
                            <Link to="/admin/dashboard">Dashboard</Link>
                        )}
                      </MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem >
                      <MDBDropdownLink onClick={handleLogout} icon={<MDBIcon fas icon="sign-out-alt" />}>Logout</MDBDropdownLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              )}
          </MDBNavbarNav>

          {!user && (
              <form className='d-flex input-group w-auto loginbtn'>
              <a className='signIn' href='/login'>Login</a>
            </form>
          )}
          {!user && (
              <form className='d-flex input-group w-auto loginbtn'>
              <a className='signUp' href='/register'>Register</a>
            </form>
           )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}