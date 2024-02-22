import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import CaseImage from '../components/images/case-image1.png';
import CaseImage2 from '../components/images/case-image2.png';
import CaseImage3 from '../components/images/case-image3.png';
import CaseImage4 from '../components/images/case-image4.png';
import CaseImage5 from '../components/images/case-image5.png';
import CaseImage6 from '../components/images/case-image6.png';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  return (
    <>
      <div className='CaseStudies-wrapper py-120'>
          <Container>
              <Row>
                <Col xl={12}>
                  <div className='CaseStudies-content text-center'>
                    <h5>CASE STUDY</h5>
                    <h2>Explore Our Case Studies</h2>
                  </div>
                </Col>
                <Col xl={12}>
                  <Row className='mt-5'>
                    <Col xl={4} md={6} data-aos="fade-up" data-aos-delay="150">
                      <div className='CaseStudies-listing'>
                        <div className='caseImage'>
                          <Image src={CaseImage} className='img-fluid'></Image>
                        </div>
                        <div className='caseContent'>
                          <span>Robot Technology</span>
                          <h4>Officia deserunt mollitia animi nobis</h4>
                          <Link to={''} className='circle'><IoIosArrowForward/></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" data-aos-delay="150">
                      <div className='CaseStudies-listing'>
                        <div className='caseImage'>
                          <Image src={CaseImage2} className='img-fluid'></Image>
                        </div>
                        <div className='caseContent'>
                          <span>User Research</span>
                          <h4>Eum iure reprehenderit velit esse</h4>
                          <Link to={''} className='circle'><IoIosArrowForward/></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" data-aos-delay="150">
                      <div className='CaseStudies-listing'>
                        <div className='caseImage'>
                          <Image src={CaseImage3} className='img-fluid'></Image>
                        </div>
                        <div className='caseContent'>
                          <span>Machine Learning</span>
                          <h4>Duis aute irure dolor in reprehenderit</h4>
                          <Link to={''} className='circle'><IoIosArrowForward/></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" data-aos-delay="150">
                      <div className='CaseStudies-listing'>
                        <div className='caseImage'>
                          <Image src={CaseImage4} className='img-fluid'></Image>
                        </div>
                        <div className='caseContent'>
                          <span>Data Science</span>
                          <h4>Numruam eius modi tema incidunt labore</h4>
                          <Link to={''} className='circle'><IoIosArrowForward/></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" data-aos-delay="150">
                      <div className='CaseStudies-listing'>
                        <div className='caseImage'>
                          <Image src={CaseImage5} className='img-fluid'></Image>
                        </div>
                        <div className='caseContent'>
                          <span>Artificial Intelligence</span>
                          <h4>Molestiae non recusana delectuse</h4>
                          <Link to={''} className='circle'><IoIosArrowForward/></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" data-aos-delay="150">
                      <div className='CaseStudies-listing'>
                        <div className='caseImage'>
                          <Image src={CaseImage6} className='img-fluid'></Image>
                        </div>
                        <div className='caseContent'>
                          <span>BI execution</span>
                          <h4>Exercitation ullamco laboris nisa</h4>
                          <Link to={''} className='circle'><IoIosArrowForward/></Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
          </Container>
      </div>
    </>
  )
}

export default CaseStudies
