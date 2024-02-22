import React, { useState } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';
import ContactBgIcon from '../components/images/faq-image.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating successful form submission
    setTimeout(() => {
      // Here you can add your form submission logic
      console.log(JSON.stringify(formData, null, 2)); // Log form data in JSON format
      toast.success("Form submitted successfully!");
    }, 1000);
  };

  return (
    <>
      <div className='contactForm'>
        <div className='contact-content'>
          <h3>Need any Help!</h3>
          <p>Eiusmod tempor in labore et dolore magna aliqua ruis ultrices gravida sit amet.</p>
          <div className='form-wrapper'>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Your Name:"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Your Email:"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Control
                  type="number"
                  placeholder="Phone:"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTextarea">
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  placeholder="Message:"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button className='lets_talk contactBtn' type="submit">
                Submit <div className='circle'><IoIosArrowForward /></div>
              </Button>
            </Form>
          </div>
          <div className='contactBgIcon'>
            <Image src={ContactBgIcon} alt="Contact Background Icon" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
