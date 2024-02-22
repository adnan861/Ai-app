import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import SideShape from '../components/images/banner-sideshape.png';
import SubBannerImg from '../components/images/sub-bannerimage.png';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const SubBanner = (props) => {
  return (
    <>
        <div className='sub-hero-wrapper py-120'>
            <div className='img-sideshape'>
              <Image src={SideShape}></Image>
            </div>
            <Container>
              <Row>
                <Col xl={6} data-aos="fade-right" data-aos-delay="150">
                  <div className='banner-content'>
                      <h1>{props.title}</h1>
                      <p>{props.subtitle}</p>
                      <div className="box">
                            <Link to={'/'} className="mb-0">Home</Link><RiArrowRightDoubleFill /><span className="mb-0 box_span">{props.pageName}</span>
                      </div>
                  </div>
                </Col>
                <Col xl={6} data-aos="fade-left" data-aos-delay="150">
                  <div className='sub-hero-image'>
                    <Image src={SubBannerImg}></Image>
                  </div>
                </Col>
              </Row>
            </Container>
      </div>
    </>
  )
}

export default SubBanner