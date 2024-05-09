import React from "react";
import { MDBFooter,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement} from 'mdb-react-ui-kit';
import NewArrivals from "../components/home/NewArrivals";
import TopColleges from "../components/home/TopColleges";
import '../../src/index.css';
import 'antd/dist/antd.css';
const Home= () => {
  return (
    <div className="Home">
      <MDBCarousel>
        <MDBCarouselInner className="carousal">
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src='https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/image7.jpg' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src='https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/image6.jpg' alt='...' />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

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

          <div className = "column">
            <img className="center mt-2 mb-2" src="https://s3.ap-south-1.amazonaws.com/www.nodon.in/images/NodonLogo.svg" width="50" height="50" alt=""/>
            <p className="nodon m-3">NODON is a connecting place for colleges and students. It is an all-in-one campus experience, where students can find colleges, universities, classes, and activities anywhere in India at their fingertips.
             NODON is designed to help students achieve their career aspirations by connecting them to universities that can help them achieve their goals. It brings education into the digital age by leveraging the power of technology to make it more accessible, affordable, and real for prospective students.
            </p>
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

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Top Colleges
      </h4>
      <TopColleges />



      <MDBFooter className='text-center text-lg-start footer text-white' style={{ backgroundColor: '#222324' }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='www.facebook.com' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='www.twitter.com' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='www.google.com' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='wwww.instagram.com' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='www.linkedin.com' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='www.github.com' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>NODON TECHNOLOGY
              </h6>
              <p>
              NODON is an eCommerce platform where we help students getting admissions into their choice of colleges or universities without charging any unfair brokerage. NODON is a connecting place for colleges and students. It is an all-in-one campus experience, where students can find colleges, universities, classes, and activities anywhere in the world at their fingertips.
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Your Account
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Search Colleges
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i>Bengaluru, Karnataka, India
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i> support@nodon.in
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> +91 77110 05534
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='http://www.nodon.in/'>
          NODON.in
        </a>
      </div>
    </MDBFooter>

    </div>
  );
}

export default Home;
