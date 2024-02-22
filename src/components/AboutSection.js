import React from 'react'
import { Col, Row,Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link} from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import AboutImage from '../components/images/about-image1.png';
import AboutImage2 from '../components/images/about-image2.png';
import AboutIcon1 from '../components/images/about-customer.png';
import AboutIcon2 from '../components/images/about-quality.png';

const AboutSection = () => {
  return (
    <>
        <div className='about-wrapper py-120'>
            <Container>
                <Row>
                    <Col xl={6} md={6} data-aos="fade-right" data-aos-delay="50">
                        <div className="about_wrapper">
                            <div className="mb-0 about-image1">
                                <Image src={AboutImage} alt="" className="img-fluid demo"></Image>
                            </div> 
                            <div className="mb-0 about-image2">
                                <Image src={AboutImage2} alt="" className="img-fluid"></Image>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} md={6} data-aos="fade-left" data-aos-delay="50">
                        <div className='about-content'>
                            <h5>About us</h5>
                            <h2>Empowering People By Keeping Them Well</h2>
                            <p className="text-size-18">Repellendus autem ruibusdam et aut officiis debitis aut re necessitatibus saepe eveniet ut et voluptates repudianda sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.</p>
                            <div className='about-lowercontent'>
                                <div className='image'>
                                    <Image src={AboutIcon1} className="img-fluid"></Image>
                                </div>
                                <div className='content'>
                                    <h4>100% Customers Satisfaction</h4>
                                    <p className="text-size-18 text">Amet minim mollit non deserunt ullamco est sit aliua dolor do amet sint.</p>
                                </div>
                                <div className='image'>
                                    <Image src={AboutIcon2} className="img-fluid"></Image>
                                </div>
                                <div className='content'>
                                    <h4>Quality Assurance Guarantee</h4>
                                    <p className="text-size-18 text">Velit officia consequat duis enim velit mollie assu omnis dolor repellendus.</p>
                                </div>
                            </div>
                            <Link className="learn-btn button1 lets_talk text-decoration-none" to={'/About'}>Read more <div className='circle'><IoIosArrowForward /></div></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default AboutSection