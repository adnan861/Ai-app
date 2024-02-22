import React from 'react'
import { Container, Row, Col,Image } from 'react-bootstrap'
import { Link} from 'react-router-dom';
import ServiceImg1 from '../components/images/service-image.png';
import ServiceCardIcon from '../components/images/service-reboticon.png';
import ServiceCardIcon2 from '../components/images/service-learningicon.png';
import ServiceCardIcon3 from '../components/images/service-scienceicon.png';
import ServiceCardIcon4 from '../components/images/service-analysicon.png';
import { IoIosArrowForward } from "react-icons/io";

const ServiceSection = () => {
  return (
    <>
        <div className='service-wrapper py-120'>
            <div className='img-serviceShape'>
              <Image src={ServiceImg1}></Image>
            </div>
            <Container>
                <Row>
                    <Col xl={6} md={5} data-aos="fade-right" data-aos-delay="150">
                        <div className='service-content pt-120'>
                            <h5>SERVICES WE PROVIDE</h5>
                            <h2>Our Purpose is To Deliver Excellence in Service and Execution</h2>
                            <p className="text-size-18">Repellendus autem ruibusdam et aut officiis debitis aut re necessitatibus saepe eveniet ut et voluptates repudianda sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.</p>
                            <Link className="learn-btn button1 lets_talk text-decoration-none mt-3" to={'/service'}>Read more <div className='circle'><IoIosArrowForward /></div></Link>
                        </div>
                    </Col>
                    <Col xl={6} md={7}>
                        <div className='service-card'>
                            <Row>
                                <Col xl={6} md={6} sm={6} data-aos="fade-up" data-aos-delay="150">
                                    <div className="card-item">
                                        <div className="card-icon">
                                            <Image src={ServiceCardIcon}></Image>
                                        </div>
                                        <div className="card-content">
                                            <h4>Robotic Automation</h4>
                                            <p>Autem vel eum iure reprehea rui in ea volutae velit...</p>
                                            <Link to={''} className='card-readMore'>Read More</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} md={6} sm={6} data-aos="fade-up" data-aos-delay="150">
                                    <div className="card-item mt-4">
                                        <div className="card-icon">
                                            <Image src={ServiceCardIcon2}></Image>
                                        </div>
                                        <div className="card-content">
                                            <h4>Machine learning</h4>
                                            <p>Butem vel eum iure reprehea rui in ea volutae velit...</p>
                                            <Link to={''} className='card-readMore'>Read More</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} md={6} sm={6} data-aos="fade-up" data-aos-delay="150">
                                    <div className="card-item mt-3">
                                        <div className="card-icon">
                                            <Image src={ServiceCardIcon3}></Image>
                                        </div>
                                        <div className="card-content">
                                            <h4>Education & Science</h4>
                                            <p>Eutem vel eum iure reprehea rui in ea volutae velit...</p>
                                            <Link to={''} className='card-readMore'>Read More</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} md={6} sm={6} data-aos="fade-up" data-aos-delay="150">
                                    <div className="card-item mt-5">
                                        <div className="card-icon">
                                            <Image src={ServiceCardIcon4}></Image>
                                        </div>
                                        <div className="card-content">
                                            <h4>Predictive Analysis</h4>
                                            <p>Rutem vel eum iure reprehea rui in ea volutae velit...</p>
                                            <Link to={''} className='card-readMore'>Read More</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default ServiceSection