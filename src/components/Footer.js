import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useLocation} from 'react-router-dom';
import FooterShape from '../components/images/footer-sideshape.png';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const location = useLocation();
  if (location.pathname !== '/login') {
  return (
    <>
      <div className="footer-w pt-120">
          <div className='footer-sideshape' data-aos="fade-right" data-aos-delay="150">
            <Image src={FooterShape} className='img-fluid'></Image>
          </div>
          <Container>
            <div className='inner-footer'>
              <Row>
                  <Col xl={4} md={4} sm={6} data-aos="fade-up" data-aos-delay="150">
                    <div className='footer-logo'>
                      <Link to={'/'}><b className='logo_design'>Design<span>AD</span>.</b></Link>
                    </div>
                    <div className='f-content'>
                      <p>Ruis aute irure dolor in reprehenderit in volu velit ese ciu nulla pariatur excepteur sint oc aecat curidatat nona...</p>
                    </div>
                    <div className='social-media'>
                      <ul>
                          <li>
                            <Link to={'https://www.facebook.com/'}><FaFacebookF /></Link>
                          </li>
                          <li>
                            <Link to={'https://twitter.com/?lang=en'}><FaXTwitter /></Link>
                          </li>
                          <li>
                            <Link to={'https://in.linkedin.com/'}><FaLinkedinIn /></Link>
                          </li>
                      </ul>
                    </div>
                  </Col>
                  <Col xl={2} md={4} sm={6} data-aos="fade-up" data-aos-delay="150">
                    <div className="footer-links">
                        <h4 className='text-white'>Useful Links</h4>
                        <ul className="list-unstyled mb-0">
                            <li><Link to={'/'} className="f-link"><IoIosArrowForward/>Home</Link></li>
                            <li><Link to={'/About'} className="f-link"><IoIosArrowForward/>About</Link></li>
                            <li><Link to={'/Service'}l className="f-link"><IoIosArrowForward/>Services</Link></li>
                            <li><Link to={'/Blog'} className="f-link"><IoIosArrowForward/>Blog</Link></li>
                            <li><Link to={'/Contact'} className="f-link"><IoIosArrowForward/>Contact us</Link></li>
                        </ul>
                    </div>
                  </Col>
                  <Col xl={3} md={4} sm={6} data-aos="fade-up" data-aos-delay="150">
                    <div className="footer-links">
                        <h4 className='text-white'>Our Services</h4>
                        <ul className="list-unstyled mb-0">
                            <li><Link to={'/service'} className="f-link"><IoIosArrowForward/>Robotic Automation</Link></li>
                            <li><Link to={'/service'} className="f-link"><IoIosArrowForward/>Testimonial</Link></li>
                            <li><Link to={'/service'}l className="f-link"><IoIosArrowForward/>Predective Analysis</Link></li>
                            <li><Link to={'/service'} className="f-link"><IoIosArrowForward/>Our Team</Link></li>
                            <li><Link to={'/service'} className="f-link"><IoIosArrowForward/>Faq</Link></li>
                        </ul>
                    </div>
                  </Col>
                  <Col xl={3} md={4} sm={6} data-aos="fade-up" data-aos-delay="150">
                    <div className="footer-links">
                        <h4 className='text-white'>Contact us</h4>
                        <ul className="list-unstyled mb-0">
                            <li><FaPhoneAlt/><Link to={'tel:+61 3 8376 6284'} className="f-link">+61 3 8376 6284</Link></li>
                            <li><IoMail/><Link to={'mailto:info@repay.com'} className="f-link">Info@Artelligence.com</Link></li>
                            <li className='location-f'><FaLocationDot/><span className="f-link">121 King Street, Melbourne 3000 Australia</span></li>
                        </ul>
                    </div>
                  </Col>
              </Row>
            </div>
            <div className='bottom-footer text-center'>
                <p>
                  Copyright 2024, Artelligence.com All Rights Reserved Design<span>AD</span>.
                </p>
            </div>
          </Container>
      </div>
    </>
  )
}
// Return null if the current route is the login page
return null;
}

export default Footer