import React from 'react'
import SubBanner from '../SubBanner'
import { Col, Container, Row } from 'react-bootstrap'
import ContactForm from '../ContactForm'
import { CiLocationOn, CiMail  } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <>
      <SubBanner title={'Contact Us'} subtitle={'Huis autem vel eum iure reprehenderit aui in ea voluptate velit esse ruam nihil molestiae conseuatur.'} pageName={'Contact Us'} />
      <div className='ContactUS-wrapper py-120'>
        <Container>
            <Row>
              <Col md={6} xl={6} data-aos="fade-right" data-aos-delay="150">
                <div className='ContactUs-content'>
                  <h5>OUR DETAILS</h5>
                  <h2>Contact Information</h2>
                  <div className='contactBox-list'>
                    <div className='contact-box'>
                      <div className='box-image'>
                        <CiLocationOn />
                      </div>
                      <div className='box-content'>
                        <h4>Location:</h4>
                        <p className="text-size-18">121 King Street, Melbourne Victoria 3000 Australia</p>
                      </div>
                    </div>
                    <div className='contact-box'>
                      <div className='box-image'>
                        <PiPhoneCallThin />
                      </div>
                      <div className='box-content'>
                        <h4>Phone:</h4>
                        <p><Link to="tel:+61383766284">(+61 3 8376 6284)</Link></p>
                        <p><Link to="tel:+61383766284">(+800 2345 6789)</Link></p>
                      </div>
                    </div>
                    <div className='contact-box'>
                      <div className='box-image'>
                        <CiMail />
                      </div>
                      <div className='box-content'>
                        <h4>Email:</h4>
                        <p><Link to="mailto:info@artelligence.com">info@artelligence.com</Link></p>
                        <p><Link to="mailto:info@artelligence.com">artelligence@gmail.com</Link></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} xl={6} data-aos="fade-left" data-aos-delay="150">
                <div className='mt-5'>
                  <ContactForm />
                </div>
              </Col>
            </Row>
        </Container>
      </div>
    </>
  )
}

export default Contact