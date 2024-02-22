import React from 'react'
import SubBanner from '../SubBanner'
import { Col, Container, Row, Image } from 'react-bootstrap'
import BlogImg from '../images/resources-1.png';
import BlogImg2 from '../images/resources-3.png';
import BlogImg3 from '../images/resources-2.png';
import BlogImg4 from '../images/resources-4.png';
import BlogImg5 from '../images/resources-5.png';
import BlogImg6 from '../images/resources-6.png';
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";
import FaqSection from '../FaqSection';

const Blog = () => {
  return (
    <>
      <SubBanner title={'Blog'} subtitle={'Ruis autem vel eum iure reprehenderit aui in ea voluptate velit esse ruam nihil molestiae conseuatur.'} pageName={'Blog'} />
      <section className='Blog-Wrapper py-120'>
        <Container>
          <Row>
            <Col md={12} data-aos="fade-up" data-aos-delay="150">
              <div className='Blog-title'>
                  <h2>Our Useful Resources</h2>
                  <p>Dive into the forefront of innovation and thought leadership with our latest resources. Where insightful content meets the pulse of contemporary ideas, keeping you informed and inspired.</p>
              </div>
            </Col>
            <Col md={12}>
              <Row>
                  <Col md={4} data-aos="fade-up" data-aos-delay="150">
                      <div className='blog-item'>
                        <div className='blogImage'>
                          <Image src={BlogImg}></Image>
                        </div>
                        <div className='BlogContent'>
                          <h3>A Journey into the Heart of Innovation</h3>
                          <p>Artificial Intelligence (AI) has transcended the realm of science fiction, becoming a pervasive force that...</p>
                          <Link to={'/blog-details'}>Learn More<GoArrowRight /></Link>
                        </div>
                      </div>
                  </Col>
                  <Col md={4} data-aos="fade-up" data-aos-delay="150">
                      <div className='blog-item'>
                        <div className='blogImage'>
                          <Image src={BlogImg2}></Image>
                        </div>
                        <div className='BlogContent'>
                          <h3>Tackle Global Challenges With Technology</h3>
                          <p>Explore the inspiring initiatives where AI is harnessed for the greater good. From addressing environment...</p>
                          <Link to={'/blog-details'}>Learn More<GoArrowRight /></Link>
                        </div>
                      </div>
                  </Col>
                  <Col md={4} data-aos="fade-up" data-aos-delay="150">
                      <div className='blog-item'>
                        <div className='blogImage'>
                          <Image src={BlogImg3}></Image>
                        </div>
                        <div className='BlogContent'>
                          <h3>The Intersection Between Technology And Art</h3>
                          <p>Contrary to popular belief, AI is not just algorithms and data; it's also a powerful tool for unleashing...</p>
                          <Link to={'/blog-details'}>Learn More<GoArrowRight /></Link>
                        </div>
                      </div>
                  </Col>
                  <Col md={4} data-aos="fade-up" data-aos-delay="150">
                      <div className='blog-item'>
                        <div className='blogImage'>
                          <Image src={BlogImg4}></Image>
                        </div>
                        <div className='BlogContent'>
                          <h3>Closing The Design Gap For Optical Devices</h3>
                          <p>Photolithography involve manipulating light precisely etch features onto a surface, and is commonly...</p>
                          <Link to={'/blog-details'}>Learn More<GoArrowRight /></Link>
                        </div>
                      </div>
                  </Col>
                  <Col md={4} data-aos="fade-up" data-aos-delay="150">
                      <div className='blog-item'>
                        <div className='blogImage'>
                          <Image src={BlogImg5}></Image>
                        </div>
                        <div className='BlogContent'>
                          <h3>A Computer Scientist Pushes The Boundaries Of Geometry</h3>
                          <p>More than 2,000 years ago, the Greek mathematician Euclid, known to many as the...</p>
                          <Link to={'/blog-details'}>Learn More<GoArrowRight /></Link>
                        </div>
                      </div>
                  </Col>
                  <Col md={4} data-aos="fade-up" data-aos-delay="150">
                      <div className='blog-item'>
                        <div className='blogImage'>
                          <Image src={BlogImg6}></Image>
                        </div>
                        <div className='BlogContent'>
                          <h3>AI Magazine Considers The Top 10 Blogs On AI</h3>
                          <p>With the AI industry rapidly hurtling towards an innovative future across those keen to keep up ...</p>
                          <Link to={'/blog-details'}>Learn More<GoArrowRight /></Link>
                        </div>
                      </div>
                  </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <FaqSection/>
    </>
  )
}

export default Blog