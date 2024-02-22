import React from 'react'
import SubBanner from '../SubBanner'
import { Col, Container, Image, Row,Button,Form } from 'react-bootstrap'
import { Link} from 'react-router-dom';
import BlogDetailsImg from '../images/blog-details.png';
import AuthorProfile from '../images/testimonial-image.png';
import CommentImg from '../images/comments-1.png';
import CommentImg2 from '../images/comments-2.png';
import CommentImg3 from '../images/comments-3.png';
import BlogImg from '../images/resources-1.png';
import BlogImg2 from '../images/resources-3.png';
import BlogImg3 from '../images/resources-2.png';
import { SlCalender } from "react-icons/sl";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsReplyAll } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

const BlogDetails = () => {
  return (
    <>
        <SubBanner title={'Blog Details'} subtitle={'We will help a clients problems to develop the products they have with high quality Change the appearance.'} pageName={'Blog Details'} />
        <section className='Blog-Wrapper py-120'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='blogDetails-wrapper'>
                            <div className='BlogImage' data-aos="fade-up" data-aos-delay="150">
                                <Image src={BlogDetailsImg} className='img-fluid'></Image>
                            </div>
                            <div className='blogDetails-Content'>

                                <div className='authorDetails' data-aos="fade-up" data-aos-delay="150">
                                    <div className='authorProfile'>
                                        <Image src={AuthorProfile} className='img-fluid'></Image>
                                        <span>By Mushfiqur Rahim</span>
                                    </div>
                                    <div className='BlogDate'>
                                        <SlCalender />
                                        <span>09 January 2024</span>
                                    </div>
                                </div>

                                <div className='BlogTitle' data-aos="fade-up" data-aos-delay="150">
                                    <h2>
                                        Deep Neural Networks Show Promise As Models Of Human Hearing
                                    </h2>
                                </div>

                                <p data-aos="fade-up" data-aos-delay="150">
                                    Computational models that mimic the structure and function of the human auditory system could help researchers design better hearing aids, cochlear implants, and brain-machine interfaces. A new study from MIT has found that modern computational models derived from machine learning are moving closer to this goal.
                                </p>

                                <h4 data-aos="fade-up" data-aos-delay="150">
                                    Models Of Hearing
                                </h4>

                                <p data-aos="fade-up" data-aos-delay="150">Deep neural networks are computational models that consists of many layers of information-processing units that can be trained on huge volumes of data to perform specific tasks. This type of model has become widely used in many applications, and neuroscientist have begun to explore the possibility that these systems can also be used to describe how the human brain performs certain tasks.</p>
                                
                                <p data-aos="fade-up" data-aos-delay="150">When a neural network is performing a task, its processing units generate activation patterns in response to each audio input it receives. Those model representations of the input can be compared to the activation patterns seen in fMRI brain scans of people listening to the same input.</p>

                                <h4 data-aos="fade-up" data-aos-delay="150">
                                    Hierarchical Processing
                                </h4>

                                <p data-aos="fade-up" data-aos-delay="150">
                                    The new study also supports the idea that the human auditory cortex has some degree of hierarchical organization, in which processing is divided into stages that support distinct computational functions. As in the 2018 study, the researchers found that representations generated in earlier stages of the model most closely resemble those seen in the primary auditory cortex, while representations generated in later model stages more closely resemble those generated in brain regions beyond the primary cortex.
                                </p>

                                <p data-aos="fade-up" data-aos-delay="150">
                                    Additionally, the researchers found that models that had been trained on different tasks were better at replicating different aspects of audition. For example, models trained on a speech-related task more closely resembled speech-selective areas.
                                </p>

                                <div className='quoteBox' data-aos="fade-up" data-aos-delay="150">
                                    <div className='content'>
                                        <i>
                                             “The study suggests that models that are derived from machine learning are a step in the right direction, and it gives us some clues as to what tends to make them better models of the brain.”
                                        </i>
                                        <div className='authorDetails'>
                                            <div className='authorProfile'>
                                                <Image src={AuthorProfile}></Image>
                                                <div>
                                                    <span>By Mushfiqur Rahim</span>
                                                    <div className='byFro-name'>Artificial Intelligence Expert</div>
                                                </div>
                                            </div>
                                            <div className='quoteIcon'>
                                                <RiDoubleQuotesR />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h4 data-aos="fade-up" data-aos-delay="150">
                                    Hierarchical Processing
                                </h4>

                                <p data-aos="fade-up" data-aos-delay="150">
                                    The new study also supports the idea that the human auditory cortex has some degree of hierarchical organization, in which processing is divided into stages that support distinct computational functions. As in the 2018 study, the researchers found that representations generated in earlier stages of the model most closely resemble those seen in the primary auditory cortex, while representations generated in later model stages more closely resemble those generated in brain regions beyond the primary cortex.
                                </p>

                                <p data-aos="fade-up" data-aos-delay="150">
                                    Additionally, the researchers found that models that had been trained on different tasks were better at replicating different aspects of audition. For example, models trained on a speech-related task more closely resembled speech-selective areas.
                                </p>

                                <div className='tagsBox' data-aos="fade-up" data-aos-delay="150">
                                    <div className='tagItem'>
                                        #Machine_Learning
                                    </div>
                                    <div className='tagItem'>
                                        #Research
                                    </div>
                                    <div className='tagItem'>
                                        #Artificial_Intelligence
                                    </div>
                                    <div className='tagItem'>
                                        #Hearing
                                    </div>
                                </div>

                                <div className='social-media' data-aos="fade-up" data-aos-delay="150">
                                    <div className='socialTitle'>Share:</div>
                                    <ul>
                                        <li>
                                            <Link to={'https://www.facebook.com/'}><FaFacebookF /></Link>
                                        </li>
                                        <li>
                                            <Link to={'https://twitter.com/?lang=en'}><FaXTwitter /></Link>
                                        </li>
                                        <li>
                                            <Link to={'https://in.linkedin.com/'}><FaLinkedinIn /></Link>
                                        </li>
                                    </ul>
                                </div>

                                <hr/>

                                <div className="commentBox-wrapper" data-aos="fade-up" data-aos-delay="150">
                                    <div className="commentBox-inner">
                                        <div className="title">
                                            <h4>
                                                Comments <span>(3)</span>
                                            </h4>
                                        </div>
                                        <div className="commentBox-listing">
                                            <ul className="parent_listing">
                                                <li>
                                                    <div className="commentBox-content d-flex align-items-start">
                                                        <div className="commentLeft">
                                                            <div className="avtar_icon">
                                                                <Image src={CommentImg}></Image>
                                                            </div>
                                                        </div>
                                                        <div className="commentRight">
                                                            <div className="avtar_title">
                                                                <div className="cmt_title">
                                                                    Mellisa Doe
                                                                </div>
                                                                <span className="date">
                                                                    Aug 07, 2023
                                                                </span>
                                                            </div>
                                                            <div className="description-comment">
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud.
                                                                </p>
                                                            </div>
                                                            <div className="replybtn">
                                                                <Link to=""><BsReplyAll /> Reply</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className="child_listing">
                                                        <li>
                                                            <div className="commentBox-content d-flex align-items-start">
                                                                <div className="commentLeft">
                                                                    <div className="avtar_icon">
                                                                        <Image src={CommentImg2}></Image>
                                                                    </div>
                                                                </div>
                                                                <div className="commentRight">
                                                                    <div className="avtar_title">
                                                                        <div className="cmt_title">
                                                                            Judy Treutel
                                                                        </div>
                                                                        <span className="date">
                                                                            Aug 07, 2023
                                                                        </span>
                                                                    </div>
                                                                    <div className="description-comment">
                                                                        <p>
                                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud.
                                                                        </p>
                                                                    </div>
                                                                    <div className="replybtn">
                                                                        <Link to=""><BsReplyAll /> Reply</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="commentBox-content d-flex align-items-start">
                                                                <div className="commentLeft">
                                                                    <div className="avtar_icon">
                                                                        <Image src={CommentImg3}></Image>
                                                                    </div>
                                                                </div>
                                                                <div className="commentRight">
                                                                    <div className="avtar_title">
                                                                        <div className="cmt_title">
                                                                            Darrell Steward
                                                                        </div>
                                                                        <span className="date">
                                                                            Aug 07, 2023
                                                                        </span>
                                                                    </div>
                                                                    <div className="description-comment">
                                                                        <p>
                                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud.
                                                                        </p>
                                                                    </div>
                                                                    <div className="replybtn">
                                                                        <Link to=""><BsReplyAll /> Reply</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="commentBox-content d-flex align-items-start">
                                                        <div className="commentLeft">
                                                            <div className="avtar_icon">
                                                                <Image src={CommentImg}></Image>
                                                            </div>
                                                        </div>
                                                        <div className="commentRight">
                                                            <div className="avtar_title">
                                                                <div className="cmt_title">
                                                                    Mellisa Doe
                                                                </div>
                                                                <span className="date">
                                                                    Aug 07, 2023
                                                                </span>
                                                            </div>
                                                            <div className="description-comment">
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud.
                                                                </p>
                                                            </div>
                                                            <div className="replybtn">
                                                                <Link to=""><BsReplyAll /> Reply</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className='form-wrap form-wrap-contact mt-5' data-aos="fade-up" data-aos-delay="150">
                                    <div className='common-form-box'>
                                        <h3>Post A Comment</h3>
                                        <p>Your email address will not be published. Required fields are marked*</p>
                                    </div>
                                    <Form>
                                        <div className='d-flex w-100 gap-3'>
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Control type="text" placeholder="Your Name:" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control type="email" placeholder="Your Email:" />
                                            </Form.Group>
                                        </div>

                                        <div className='d-flex w-100 gap-3'>
                                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                                <Form.Control type="number" placeholder="Phone:" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Control type="text" placeholder="Your Subject:" />
                                            </Form.Group>
                                        </div>

                                        <Form.Group className="mb-3" controlId="formBasicTextarea">
                                            <Form.Control as="textarea" aria-label="With textarea" placeholder="Message:" />
                                        </Form.Group>
                                        <Button className='lets_talk contactBtn' type="submit">
                                            Submit <div className='circle'><IoIosArrowForward /></div>
                                        </Button>
                                    </Form>
                                </div>

                                <div className='latestBlog-date pt-5 mt-5' >
                                    <Row>
                                        <Col md={12} data-aos="fade-up" data-aos-delay="150">
                                            <div className='titleBox mb-3'>
                                                <h2>What’s Next</h2>
                                            </div>
                                        </Col>
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
                                    </Row>
                                </div>

                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default BlogDetails
