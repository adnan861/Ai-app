import React from 'react'
import { Col, Container, Row,
  Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import ErrorImg from '../components/images/case-image6.png';
import { IoIosArrowForward } from "react-icons/io";

const ErrorPage = () => {
  return (
    <div className='error-wrapper'>
       <Container>
        <Row>
            <Col md={12} className='text-center'>
                <h2 className='title'>
                    Opps! you’r on the wrong place.
                </h2>
                <p>
                  Can not find what you need? Take a moment and do a search below or start from our Homepage.
                </p>
                <Link className="learn-btn lets_talk" to={'/'}>Back to home  <div className='circle'><IoIosArrowForward /></div></Link>
                {/* <Image src={ErrorImg} className='img-fluid'></Image> */}
              <Image className='errorImg' src={"https://jano-nextjs.netlify.app/images/assets/ils_06.svg"}></Image>
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default ErrorPage