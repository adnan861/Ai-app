import React from 'react'
import { Col, Container, Row, Accordion } from 'react-bootstrap'
import ContactForm from './ContactForm'

const FaqSection = () => {
  return (
    <>
        <div className='faq-wrapper py-120'>
            <Container>
                <Row>
                    <Col md={6} xl={6} data-aos="fade-right" data-aos-delay="150">
                        <div className='faq-content'>
                            <h5>FAQ,S</h5>
                            <h2>Frequently Asked <br/> Questions</h2>
                            <div className='faq-aws-que'>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><h4>Antis unde omnis istye natus error?</h4></Accordion.Header>
                                        <Accordion.Body>
                                            <p className="text-size-18">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><h4>Quasi sed architecto beatae vitae?</h4></Accordion.Header>
                                        <Accordion.Body>
                                        <p className='text-size-18'>Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><h4>Totam rem aperiam earue iesa uate?</h4></Accordion.Header>
                                        <Accordion.Body>
                                        <p className='text-size-18'>Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><h4>Duis lacinia pulvinar turpis lacinia?</h4></Accordion.Header>
                                        <Accordion.Body>
                                        <p className='text-size-18'>Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header><h4>Integer lobortis sem conseruat seua?</h4></Accordion.Header>
                                        <Accordion.Body>
                                        <p className='text-size-18'>Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} xl={6} data-aos="fade-left" data-aos-delay="150">
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default FaqSection