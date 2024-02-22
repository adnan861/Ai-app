import React from 'react'
import { Container, Row, Col,Image } from 'react-bootstrap'
import ServiceImg1 from '../components/images/service-image.png';
import TestimonialClient from '../components/images/testimonial-image.png';
import BrandImg from '../components/images/partner2.png';
import BrandImg1 from '../components/images/partner3.png';
import BrandImg2 from '../components/images/partner4.png';
import BrandImg3 from '../components/images/partner5.png';
import BrandImg4 from '../components/images/partner3.png';
import BrandImg5 from '../components/images/partner5.png';
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial = () => {
  return (
    <>
      <div className='testimonial-wrapper py-120'>
            <Container>
                <Row>
                    <Col xl={12} data-aos="fade-up" data-aos-delay="150">
                        <div className='testimonial-content text-center'>
                            <h5>Testimonials</h5>
                            <h2>Hear it From Our Clients</h2>
                        </div>
                    </Col>
                    <Col xl={12} data-aos="fade-up" data-aos-delay="150">
                        <div className='testimonial-inner'>
                            <div className="testimonial_content">
                                <div className="content-box">
                                    <p>“Quisquam est, qui dolorem ipsum quia dolor sit amet conse aetur, adipisci velit, sed ruia non numquam eius modi temor
                                        incidunt ut labore et dolore magnam alieuam zuaerat voluta tem nostrum exercitationem”</p>
                                    <div className='testimonial-image'>
                                        <Image src={TestimonialClient}></Image>
                                    </div>
                                    <span className="text-size-18">Peter Johns</span>
                                    <span className="text-size-16 mb-0">Head of informatics at EBI</span>
                                    <div className="box">
                                        <div className='testimonial-comas'>
                                            <RiDoubleQuotesL />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={12} data-aos="fade-up" data-aos-delay="150">
                        <div className='our-brands'>
                            <div className='brand-item'>
                                <Image src={BrandImg}></Image>
                            </div>
                            <div className='brand-item'>
                                <Image src={BrandImg1}></Image>
                            </div>
                            <div className='brand-item'>
                                <Image src={BrandImg2}></Image>
                            </div>
                            <div className='brand-item'>
                                <Image src={BrandImg3}></Image>
                            </div>
                            <div className='brand-item'>
                                <Image src={BrandImg4}></Image>
                            </div>
                            <div className='brand-item'>
                                <Image src={BrandImg5}></Image>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='img-serviceShape' data-aos="fade-left" data-aos-delay="150">
              <Image src={ServiceImg1}></Image>
            </div>
    </div>
    </>
  )
}

export default Testimonial
