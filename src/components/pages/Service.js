import React from 'react'
import SubBanner from '../SubBanner'
import WhyChooseUs from '../WhyChooseUs';
import FaqSection from '../FaqSection';
import { Container, Row, Col,Image } from 'react-bootstrap'
import { Link} from 'react-router-dom';

import ServiceImg1 from '../../components/images/service-image.png';
import ServiceCardIcon from '../../components/images/service-reboticon.png';
import ServiceCardIcon2 from '../../components/images/service-learningicon.png';
import ServiceCardIcon3 from '../../components/images/service-scienceicon.png';
import ServiceCardIcon4 from '../../components/images/service-analysicon.png';
import ServiceCardIcon5 from '../../components/images/service-technologyicon.png';
import ServiceCardIcon6 from '../../components/images/service-metalicon.png';

const News = () => {
  return (
    <>
      <SubBanner title={'Our Services'} subtitle={'Euis autem vel eum iure reprehenderit aui in ea voluptate velit esse ruam nihil molestiae conseuatur.'} pageName={'Service'} />
      <div className='service-wrapper servicesGrid-box py-120'>
            <div className='img-serviceShape' data-aos="fade-right" data-aos-delay="150">
              <Image src={ServiceImg1}></Image>
            </div>
            <Container>
                <Row>
                    <Col xl={12} md={12} data-aos="fade-up" data-aos-delay="150">
                        <div className='service-content text-center'>
                            <h5>SERVICES WE PROVIDE</h5>
                            <h2>Our Purpose is To Deliver Excellence in Service and Execution</h2>
                            <p className="text-size-18">Repellendus autem ruibusdam et aut officiis debitis aut re necessitatibus saepe eveniet ut et voluptates repudianda sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.</p>
                        </div>
                    </Col>
                    <Col xl={12} md={12}>
                        <div className='service-card mt-5'>
                            <Row>
                                <Col xl={6} md={6} sm={6} data-aos="fade-up" data-aos-delay="150">
                                    <div className="card-item">
                                        <div className="card-icon">
                                            <Image src={ServiceCardIcon}></Image>
                                        </div>
                                        <div className="card-content">
                                            <h4>Robotic Automation</h4>
                                            <p>Quis autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil molestia consequatur, vel illum rui.</p>
                                            <Link to={''} className='card-readMore'>Read More</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} md={6} sm={6} data-aos="fade-up" data-aos-delay="150">
                                    <div className="card-item">
                                        <div className="card-icon">
                                            <Image src={ServiceCardIcon2}></Image>
                                        </div>
                                        <div className="card-content">
                                            <h4>Machine learning</h4>
                                            <p>Suir autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil molestia consequatur, vel illum rui .</p>
                                            <Link to={''} className='card-readMore'>Read More</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} md={6} sm={6} data-aos="fade-up" data-aos-delay="150">
                                    <div className="card-item">
                                        <div className="card-icon">
                                            <Image src={ServiceCardIcon3}></Image>
                                        </div>
                                        <div className="card-content">
                                            <h4>Education & Science</h4>
                                            <p>Tuis autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil molestia consequatur, vel illum rui.</p>
                                            <Link to={''} className='card-readMore'>Read More</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} md={6} sm={6} data-aos="fade-up" data-aos-delay="150">
                                    <div className="card-item">
                                        <div className="card-icon">
                                            <Image src={ServiceCardIcon4}></Image>
                                        </div>
                                        <div className="card-content">
                                            <h4>Predictive Analysis</h4>
                                            <p>Muis autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil molestia consequatur, vel illum rui.</p>
                                            <Link to={''} className='card-readMore'>Read More</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} md={6} sm={6} data-aos="fade-up" data-aos-delay="150">
                                    <div className="card-item">
                                        <div className="card-icon">
                                            <Image src={ServiceCardIcon5}></Image>
                                        </div>
                                        <div className="card-content">
                                            <h4>Electronics & Technology</h4>
                                            <p>Nuis autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil molestia consequatur, vel illum rui.</p>
                                            <Link to={''} className='card-readMore'>Read More</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} md={6} sm={6} data-aos="fade-up" data-aos-delay="150">
                                    <div className="card-item">
                                        <div className="card-icon">
                                            <Image src={ServiceCardIcon6}></Image>
                                        </div>
                                        <div className="card-content">
                                            <h4>Metal and Machining</h4>
                                            <p>Guis autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil molestia consequatur, vel illum rui.</p>
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
      <WhyChooseUs/>
      <FaqSection/>
    </>
  )
}

export default News