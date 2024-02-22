import React from 'react'
import { Col, Row,Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link} from 'react-router-dom';
import BannerImg from '../images/banner-image.png';
import SideShape from '../images/banner-sideshape.png';
import SideShape2 from '../images/banner-sideshape2.png';
import { IoIosArrowForward } from "react-icons/io";
import AboutSection from '../AboutSection';
import ServiceSection from '../ServiceSection';
import WhyChooseUs from '../WhyChooseUs';
import FaqSection from '../FaqSection';
import CaseStudies from '../CaseStudies';
import Testimonial from '../Testimonial';
const Home = () => {
  return (
    <>
        <div className='hero-wrapper py-120'>
            <div className='img-sideshape' data-aos="fade-right" data-aos-delay="150">
              <Image src={SideShape}></Image>
            </div>
            <Container>
                <Row>
                  <Col xl={6} md={7} data-aos="fade-right">
                    <div className='hero-content'>
                        <h1>Bring Force of Artificial Intelligence To Business</h1>
                        <p>
                          Quis autem vel eum iure reprehenderit aui in ea voluptate velit esse ruam nihil molestiae conseuatur.
                        </p>
                        <div className='hero-btn'>
                          <Link className="learn-btn button1 lets_talk text-decoration-none" to="/service">Read more <div className='circle'><IoIosArrowForward /></div></Link>
                          <Link className="learn-btn button1 lets_talk text-decoration-none" to="/contact">Contact us <div className='circle'><IoIosArrowForward /></div></Link>
                        </div>
                    </div>
                  </Col>
                  <Col xl={6} md={5} data-aos="fade-left">
                      <div className='banner-image-wrapper'>
                          <Image src={BannerImg} className='img-fluid'></Image>
                      </div>
                  </Col>
                </Row>
            </Container>
            <div className='img-sideshape2' data-aos="fade-up" data-aos-delay="150">
              <Image src={SideShape2}></Image>
            </div>
        </div>
        <AboutSection/>
        <ServiceSection/>
        <CaseStudies/>
        <WhyChooseUs/>
        <Testimonial/>
        <FaqSection/>
    </>
  )
}

export default Home