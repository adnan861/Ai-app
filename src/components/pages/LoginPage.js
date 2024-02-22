import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Login from "../Login";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import Register from "../Register";

const LoginPage = () => {

  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => {
    setIsLogin(!isLogin);
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
                    {isLogin ? <Login /> : <Register/>}
                    <div className="signup-box text-center">
                      Don't have an account ? <Link onClick={toggleForm}>{isLogin ? 'Sign Up' : 'Sign In'}</Link>
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

export default LoginPage;
