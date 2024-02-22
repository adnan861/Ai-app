import React from "react";
import { Button, Form } from "react-bootstrap";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import logo from "../components/images/logo.svg";
const validationSchema = Yup.object({
  username: Yup.string().required("This field is required."),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required."),
  password: Yup.string()
    .required("This field is required.")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one digit"
    ),
  repeatPassword: Yup.string()
    .required("This field is required.")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one digit"
    ),
});

const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  const onSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };
  return (
    <>
      <div className="login-wrapper d-flex">
        <div className="login-image">
          <Image
            className="img-fluid"
            src={"https://affixtheme.com/html/xmee/demo/img/figure/bg5-l.jpg"}
            alt={"Login Image"}
          ></Image>
        </div>
        <div className="login-form">
          <Container>
            <Row>
              <Col md={12}>
                <div className="login-from-content">
                  <div className="inner-content">
                    <div className="logo-wrapper">
                      <Image
                        className="img-fluid"
                        width={50}
                        src={logo}
                        alt={"Logo"}
                      ></Image>
                    </div>
                    <div className="title mb-3 pb-1">
                      <h2>Register</h2>
                      <p>
                        Enter to get unlimited access to data & information.
                      </p>
                    </div>

                    <Formik
                      initialValues={initialValues}
                      onSubmit={onSubmit}
                      validationSchema={validationSchema}
                    >
                      {({ errors, touched }) => (
                        <Form className="login-inner">
                          <Form.Group
                            className="form-group"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>
                              Name<span>*</span>
                            </Form.Label>
                            <Field
                              as={Form.Control}
                              name="username"
                              type="text"
                              placeholder="Enter your name"
                              className={
                                errors.username && touched.username
                                  ? "error"
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="username"
                              component="div"
                              className="error"
                            />
                          </Form.Group>

                          <Form.Group
                            className="form-group"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>
                              Email<span>*</span>
                            </Form.Label>
                            <Field
                              as={Form.Control}
                              name="email"
                              type="email"
                              placeholder="Enter your email"
                              className={
                                errors.email && touched.email ? "error" : ""
                              }
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="error"
                            />
                          </Form.Group>

                          <Form.Group
                            className="form-group"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>
                              Password<span>*</span>
                            </Form.Label>
                            <Field
                              as={Form.Control}
                              type="password"
                              name="password"
                              placeholder="Enter your Password"
                              className={
                                errors.password && touched.password
                                  ? "error"
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="error"
                            />
                          </Form.Group>

                          <Form.Group
                            className="form-group"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>
                              Repeat Password<span>*</span>
                            </Form.Label>
                            <Field
                              as={Form.Control}
                              type="password"
                              name="repeatPassword"
                              placeholder="Enter your Repeat Password"
                              className={
                                errors.repeatPassword && touched.repeatPassword
                                  ? "error"
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="repeatPassword"
                              component="div"
                              className="error"
                            />
                          </Form.Group>

                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                              type="checkbox"
                              label="I agree all statement"
                            />
                          </Form.Group>

                          <Button
                            variant="primary"
                            className="fill-button submit-btn"
                            type="submit"
                          >
                            Sign Up
                          </Button>
                        </Form>
                      )}
                    </Formik>
                    <div className="signup-box text-center">
                      Don't have an account ? <Link to="/login">Sign Up</Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Register;
