import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Col, Container, Row, Image } from "react-bootstrap";
import users from "./users.json";
import { useNavigate } from "react-router-dom";
// import logo from "../components/images/logo.svg";
import LoginBG from "../components/images/loginbg.jpg";
import { GiArtificialHive } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const Login = () => {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const navigate = useNavigate(); // Initialize useHistory hook

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/"); // Redirect to home page if already logged in
    }
  }, [navigate]);

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handleLogin(); // Call your login function
  };

  const handleLogin = () => {
    // Reset error messages
    setError("");
    setError2("");
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(useremail)) {
      setError("This field is required.");
      return;
    }
  
    // Find user by email
    const user = users.find((u) => u.useremail === useremail);
    if (!user) {
      setError("Please enter a valid email address.");
      return;
    }
  
    // Validate password
    if (!password) {
      setError2("This field is required."); // Set error message for empty password
      return;
    }

    if (user.password !== password) {
      setError2("Invalid Password");
      return;
    }
  
    // Handle successful login
    localStorage.setItem("isLoggedIn", "true");
    navigate("/"); // Redirect to home page
  };

  if (localStorage.getItem("isLoggedIn")) {
    navigate("/"); // Redirect to home page if already logged in
    return null; // Render nothing while redirecting
  }

  return (
    <>
      <div className="login-wrapper d-flex">
        <div className="login-image" data-aos="fade-right" data-aos-delay="150">
          <Image
            className="img-fluid"
            src={LoginBG}
            alt={"Login Image"}
          ></Image>
        </div>
        <div className="login-form">
          <Container>
            <Row>
              <Col md={12} data-aos="fade-left" data-aos-delay="150">
                <div className="login-from-content">
                  <div className="inner-content">
                    <div className="logo-wrapper">
                      {/* <Image
                        className="img-fluid"
                        width={50}
                        src={logo}
                        alt={"Logo"}
                      ></Image> */}
                      <GiArtificialHive />
                    </div>
                    <div className="title mb-3 pb-1">
                      <h2>Welcome Back!</h2>
                      <p>
                        Enter to get unlimited access to data & information.
                      </p>
                    </div>
                    
                    <Form className="login-inner" onSubmit={handleFormSubmit}>
                      <Form.Group className="form-group" controlId="formBasicUseremail">
                        <Form.Label>Email<span>*</span></Form.Label>
                        <div>
                          <CiUser />
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={useremail}
                            onChange={(e) => setUseremail(e.target.value)}
                          />
                          {error && <p className="error">{error}</p>}
                        </div>
                      </Form.Group>

                      <Form.Group className="form-group" controlId="formBasicPassword">
                        <Form.Label>Password<span>*</span></Form.Label>
                        <div>
                          <CiLock />
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {error2 && <p className="error">{error2}</p>}
                        </div>
                      </Form.Group>

                      <Button
                        className="fill-button submit-btn"
                        variant="primary"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Form>
                    {/* <div className="signup-box text-center">
                      Don't have an account ?{" "}
                      <Link to="/register">Sign Up</Link>
                    </div> */}
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

export default Login;
