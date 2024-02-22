import React from 'react'
import SubBanner from '../SubBanner'
import AboutSection from '../AboutSection'
import FaqSection from '../FaqSection'
import { Col, Container, Row, Image } from 'react-bootstrap'
import CounterImg from '../../components/images/counter-image1.png';
import CounterImg2 from '../../components/images/about-quality.png';
import CounterImg3 from '../../components/images/counter-image3.png';
import CounterImg4 from '../../components/images/counter-image4.png';
import VideoImg from '../../components/images/image-vediosession.png';
import ServiceImg1 from '../../components/images/service-image.png';
import { Link } from 'react-router-dom'
import VideoModal from '../VideoModal'
const About = () => {

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <SubBanner title={'About Us'} subtitle={'Ruis autem vel eum iure reprehenderit aui in ea voluptate velit esse ruam nihil molestiae conseuatur.'} pageName={'About'} />
      <AboutSection/>
      <div className='counter-wrapper py-120'>
          <div className='img-serviceCounter' data-aos="fade-right" data-aos-delay="150">
            <Image src={ServiceImg1}></Image>
          </div>
        <Container>
          <Row>
            <Col sm={6} md={6} lg={3} data-aos="fade-up" data-aos-delay="150">
                <div className="counter-box">
                    <div className='iconBox'>
                      <Image src={CounterImg}></Image>
                    </div>
                    <div className='valueCount'>
                      <h3 className="mb-0 counter">398</h3>
                      <h3 className="mb-0 plus">+</h3>
                    </div>
                    <span className="mb-0 text1 text-size-16">Completed Projects</span>
                </div>
            </Col>
            <Col sm={6} md={6} lg={3} data-aos="fade-up" data-aos-delay="150">
                <div className="counter-box">
                    <div className='iconBox'>
                      <Image src={CounterImg2}></Image>
                    </div>
                    <div className='valueCount'>
                      <h3 className="mb-0 counter">120</h3>
                      <h3 className="mb-0 plus">+</h3>
                    </div>
                    <span className="mb-0 text1 text-size-16">Completed Projects</span>
                </div>
            </Col>
            <Col sm={6} md={6} lg={3} data-aos="fade-up" data-aos-delay="150">
                <div className="counter-box">
                    <div className='iconBox'>
                      <Image src={CounterImg3}></Image>
                    </div>
                    <div className='valueCount'>
                      <h3 className="mb-0 counter">86</h3>
                      <h3 className="mb-0 plus">%</h3>
                    </div>
                    <span className="mb-0 text1 text-size-16">Completed Projects</span>
                </div>
            </Col>
            <Col sm={6} md={6} lg={3} data-aos="fade-up" data-aos-delay="150">
                <div className="counter-box">
                    <div className='iconBox'>
                      <Image src={CounterImg4}></Image>
                    </div>
                    <div className='valueCount'>
                      <h3 className="mb-0 counter">240</h3>
                      <h3 className="mb-0 plus">+</h3>
                    </div>
                    <span className="mb-0 text1 text-size-16">Completed Projects</span>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='videoWrapper' data-aos="fade-up" data-aos-delay="150">
        <Container className=''>
          <Row>
            <Col sm={12}>
              <div className='innerVideo text-center'>
                  <Link to={''} onClick={() => setModalShow(true)}>
                    <Image src={VideoImg} className='img-fluid'></Image>
                  </Link>
                  <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqSection/>
    </>
  )
}

export default About