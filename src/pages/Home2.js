import React, { useEffect, useState } from "react";
import { MDBFooter} from 'mdb-react-ui-kit';
import NewArrivals from "../components/home/NewArrivals";
import TopColleges from "../components/home/TopColleges";
import '../../src/index.css';
import 'antd/dist/antd.css';
import StudyField from "../components/cards/StudyField";
import TypeAnimation from 'react-type-animation';
import { Carousel } from "antd";
import { useNavigate } from "react-router";
import { getAllColleges } from "../functions/college";
import SearchCollegeHome from "../components/forms/SearchCollegeHome";
const Home= () => {
  const [screenWidth,setScreenWidth]=useState(window.innerWidth);
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data,setData]=useState([]);
  const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const onChange = (currentSlide) => {
  };

  





  return (
    <div className="Home">
      <Carousel autoplay afterChange={onChange} dots={false}>
      <div className="carousal">
        <img src="https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/image7.jpg" class="d-block w-100" alt="..." style={{filter: "brightness(40%)"}}/>
      </div>
      <div className="carousal">
        <img src="https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/image6.jpg" class="d-block w-100" alt="..." style={{filter: "brightness(40%)"}}/>
      </div>
    </Carousel>
      {/* <MDBCarousel interval={5000} direction="right" className="carousel">
        <MDBCarouselInner className="carousel-inner">
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src='https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/image7.jpg' alt='...' style={{filter: "brightness(40%)"}}/>
            <MDBCarouselCaption>
              <a href="/college/reva-university">Reva University</a>
          </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src='https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/image6.jpg' alt='...' style={{filter: "brightness(40%)"}}/>
            <MDBCarouselCaption>
              <a href="/college/jadhavpur-university">Jadhavpur University</a>
          </MDBCarouselCaption>          
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel> */}

      {/* <div id="carouselExampleControls" interval={1000} class="carousal slide" data-ride="carousal">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/image7.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/image6.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/image7.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}
      
      <div class="box">
        <div>
      <TypeAnimation
      cursor={true}
      sequence={['Get Admissions in Over 250 Top Colleges', 1000, '']}
      wrapper="h1"
      repeat= {Infinity}
      style={{color:"white", fontFamily:"'Montserrat', sans-serif"}}
    />
    </div>
	</div>
  <SearchCollegeHome/>



      {/* <main>
        <div className = "intro ">
          <div className = "column"> 
            <img className="introimg" src="https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/image4.webp" width="600" height="600" alt=""/>
          </div>
          <div className = "column">
            <img className="center" src="https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/NodonLogo.svg" width="200" height="200" alt=""/>
            <p className="nodon">NODON is a connecting place for colleges and students. It is an all-in-one campus experience, where students can find colleges, universities, classes, and activities anywhere in India at their fingertips.
             NODON is designed to help students achieve their career aspirations by connecting them to universities that can help them achieve their goals. It brings education into the digital age by leveraging the power of technology to make it more accessible, affordable, and real for prospective students.
            </p>
          </div>
        </div>
      </main> */}
    <div className="study-field">
      <h3 className="" style={{margin:"50px"}}>
          Select Your Field Of Study
      </h3>
      <StudyField/>
    </div>
    <div class="container nodonContainer">
  <div class="row">
    <div class="col">
    <iframe src="https://www.youtube.com/embed/wKysONrSmew" className="iframe-video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    {/* <img class="introimg" src="https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/image4.webp" width="400" height="400" style={{margin:"20px"}} alt=""/> */}
    </div>
    <div class="col">
    <img class="center" src="https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/NodonLogo.svg" width="200" height="200"/>
        <p class="nodon" style={{fontFamily:"'Montserrat', sans-serif"}}>NODON is a connecting place for colleges and students. It is an all-in-one campus experience, where students can find colleges, universities, classes, and activities anywhere in India at their fingertips.
          NODON is designed to help students achieve their career aspirations by connecting them to universities that can help them achieve their goals. It brings education into the digital age by leveraging the power of technology to make it more accessible, affordable, and real for prospective students.
        </p>
    </div>
  </div>
  </div>
      {/* Pre TC
      <MDBTypography tag='h1' className='mb-0 htc'>
        Top Colleges
    </MDBTypography> 

      <div className="topcoll">
        <div className='bg-image hover-zoom' style={{ maxWidth: '22rem' }}>
          <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' />
        </div>
        <div className='bg-image hover-zoom' style={{ maxWidth: '22rem' }}>
          <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' />
        </div>
        <div className='bg-image hover-zoom' style={{ maxWidth: '22rem' }}>
          <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' />
        </div>
      </div> */}
      {screenWidth>=1500? 
      (<div className="row registerDiv" style={{margin:"100px", padding:'100px', paddingBottom:"80px", paddingTop:"80px"}}>
        <div className="col-md-4">
          <h2 style={{color:""}}>Haven't Joined Us Yet?</h2>
        </div>
        <div className="col" style={{marginTop:"-10px", marginLeft:"40px"}}>
          {/* <button type="button" class="btn btn-warning">Register</button> */}
          <button class="button-36" role="button" onClick={()=>navigate("/register")}>Register Now</button>
        </div>
        {/* <div className="col-md-6"> 
          <img src="https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/image4.webp" height="200" width="200"/>
        </div> */}
      </div>)
      :
      (<div className="row registerDiv2" style={{margin:"5px", marginTop:"20px"}}>
        <div className="col">
          <h2 style={{color:""}}>Haven't Joined Us Yet?</h2>
        </div>
        <div className="col" style={{marginTop:"-10px", marginLeft:"40px"}}>
          {/* <button type="button" class="btn btn-warning">Register</button> */}
          <button class="button-36" role="button" onClick={()=>navigate("/register")}>Register Now</button>
        </div>
        {/* <div className="col-md-6"> 
          <img src="https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/image4.webp" height="200" width="200"/>
        </div> */}
      </div>)
    }
      <h3 className="" style={{margin:"50px", marginLeft:"90px", marginTop:"100px"}}>
          Check Out Our New Arrivals
      </h3>
      <NewArrivals />

      <h3 className="" style={{margin:"50px", marginLeft:"90px", marginTop:"50px"}}>
          Check Out Our Top Colleges
      </h3>
      <TopColleges />



      <MDBFooter className='text-center text-lg-start footer text-white' style={{ backgroundColor: '#222324' }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className="footer-desc">Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='www.facebook.com' className='me-4 text-reset'>
            <i className='fab fa-facebook-f footer-desc'></i>
          </a>
          <a href='www.twitter.com' className='me-4 text-reset'>
            <i className='fab fa-twitter footer-desc'></i>
          </a>
          <a href='www.google.com' className='me-4 text-reset'>
            <i className='fab fa-google footer-desc'></i>
          </a>
          <a href='wwww.instagram.com' className='me-4 text-reset'>
            <i className='fab fa-instagram footer-desc'></i>
          </a>
          <a href='www.linkedin.com' className='me-4 text-reset'>
            <i className='fab fa-linkedin footer-desc'></i>
          </a>
          <a href='www.github.com' className='me-4 text-reset'>
            <i className='fab fa-github footer-desc'></i>
          </a>
        </div>
      </section>

      <section className='nodon-footer'>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3 footer-headings'></i><span className="footer-headings">NODON TECHNOLOGY</span>
              </h6>
              <p className="footer-desc">
              NODON is an eCommerce platform where we help students getting admissions into their choice of colleges or universities without charging any unfair brokerage. NODON is a connecting place for colleges and students. It is an all-in-one campus experience, where students can find colleges, universities, classes, and activities anywhere in the world at their fingertips.
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 footer-headings'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  <span className="footer-desc">Your Account</span>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset footer-desc'>
                  <span className="footer-desc">Search Colleges</span>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset footer-desc'>
                  <span className="footer-desc">About Us</span>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset footer-desc'>
                  <span className="footer-desc">Help</span>
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 footer-headings'>Contact</h6>
              <p>
                <i className='fas fa-home me-3 footer-desc'></i><span className="footer-desc">Bengaluru, Karnataka, India</span>
              </p>
              <p>
                <i className='fas fa-envelope me-3 footer-desc'></i> <span className="footer-desc">support@nodon.in</span>
              </p>
              <p>
                <i className='fas fa-phone me-3 footer-desc'></i> <span className="footer-desc">+91 77110 05534</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4 footer-desc' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: 
        <a className='text-reset fw-bold footer-desc' href='http://www.nodon.in/'>
          NODON.in
        </a>
      </div>
    </MDBFooter>

    </div>
  );
}

export default Home;
