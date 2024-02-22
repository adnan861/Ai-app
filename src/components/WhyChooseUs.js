import React from 'react'
import { Container, Row, Col,Image } from 'react-bootstrap'
import { Link} from 'react-router-dom';
import chooseImg1 from '../components/images/choose-sideshape.png';
import chooseImg2 from '../components/images/choose-sideshape2.png';
import chooseImg3 from '../components/images/choose-image.png';
import { IoIosArrowForward } from "react-icons/io";

const WhyChooseUs = () => {
  return (
    <>
        <div className='choose-wrapper py-120'>
            <Container>
                <Row>
                    <Col xl={6} md={6} data-aos="fade-right" data-aos-delay="150">
                      <div className='choose-image-row'>
                        <Image src={chooseImg3}></Image>
                      </div>
                    </Col>
                    <Col xl={6} md={6} data-aos="fade-left" data-aos-delay="150">
                        <div className='choose-content'>
                            <h5>WHY CHOOSE US</h5>
                            <h2>Get Closer Look How Business Develop in AI Data Analysis</h2>
                            <p className="text-size-18">Consectetur adipiscing elit sed do eiusmod tempor in labore et dolore magna aliqua ruis ipsum suspendisse ultrices gravida sit amet.</p>
                            <div className='choose-listing'>
                                <ul> 
                                  <li className='text-size-18'><i className='circle'><IoIosArrowForward /></i> Quis autem vel eum iure reprehenderit aui</li>
                                  <li className='text-size-18'><i className='circle'><IoIosArrowForward /></i>Suscipit laboriosam nisi rut aliuid eum iure moli</li>
                                  <li className='text-size-18'><i className='circle'><IoIosArrowForward /></i>Dolor repellendus temporibus autem auibus</li>
                                </ul>
                            </div>
                            <Link className="learn-btn button1 lets_talk text-decoration-none mt-3" to={'/about'}>Read more <div className='circle'><IoIosArrowForward /></div></Link>
                        </div>
                    </Col>
                </Row>
            </Container>  
            <div className='img-chooseShape' data-aos="fade-left" data-aos-delay="150">
              <Image src={chooseImg1}></Image>
            </div>
            <div className='img-chooseShape chooseShape2' data-aos="fade-left" data-aos-delay="150">
              <Image src={chooseImg2}></Image>
            </div>
        </div>
    </>
  )
}

export default WhyChooseUs