// import React from "react";
// import { Button, Form } from "react-bootstrap";
// import { Col, Container, Row, Image } from "react-bootstrap";
// import { Formik, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import logo from "../components/images/logo.svg";

// const validationSchema = Yup.object({
//   email: Yup.string().email("Invalid email address").required("This field is required."),
//   password: Yup.string()
//     .required("This field is required.")
//     .min(8, "Password must be at least 8 characters")
// });

// const Login = () => {
//   const initialValues = {
//     email: "",
//     password: "",
//   };

//   const navigate = useNavigate();

//   const onSubmit = (values) => {
//     // Handle form submission logic here
//     console.log(values);

//     // Show success swal
//     Swal.fire({
//       icon: "success",
//       title: "Login successful!",
//       showConfirmButton: false,
//       timer: 1500,
//       onClose: () => {
//         // Navigate to home page after the alert is closed
//         navigate("/home"); // Change "/Home" to your actual home page route
//       },
//     });
//   };

//   return (
//     <>
//     <div className="login-wrapper d-flex">
//         <div className="login-image">
//           <Image
//             className="img-fluid"
//             src={"https://affixtheme.com/html/xmee/demo/img/figure/bg5-l.jpg"}
//             alt={"Login Image"}
//           ></Image>
//         </div>
//         <div className="login-form">
//           <Container>
//             <Row>
//               <Col md={12}>
//                 <div className="login-from-content">
//                   <div className="inner-content">
//                     <div className="logo-wrapper">
//                       <Image
//                         className="img-fluid"
//                         width={50}
//                         src={logo}
//                         alt={"Logo"}
//                       ></Image>
//                     </div>
//                     <div className="title mb-3 pb-1">
//                       <h2>Welcome Back!</h2>
//                       <p>Enter to get unlimited access to data & information.</p>
//                     </div>
//                     <Formik initialValues={initialValues} onSubmit={onSubmit}  validationSchema={validationSchema}>
//                       {({ errors, touched }) => (
//                         <Form className="login-inner">
//                           <Form.Group className="form-group" controlId="formBasicEmail">
//                             <Form.Label>Email<span>*</span></Form.Label>
//                             <Field type="email" name="email" placeholder="Enter your email" as={Form.Control} className={errors.email && touched.email ? "error" : ""}/>
//                             <ErrorMessage name="email" component="div" className="error"/>
//                           </Form.Group>
//                           <Form.Group className="form-group" controlId="formBasicPassword">
//                             <Form.Label>Password<span>*</span></Form.Label>
//                             <Field type="password" name="password" placeholder="Password" as={Form.Control} className={errors.password && touched.password ? "error" : ""} />
//                             <ErrorMessage name="password" component="div" className="error"/>
//                           </Form.Group>
//                           <Form.Group controlId="formBasicCheckbox">
//                             <Field type="checkbox" name="rememberMe" id="rememberMe" as={Form.Check} label="Remember me"/>
//                           </Form.Group>
//                           <Button variant="primary" className="fill-button submit-btn" type="submit">
//                             Sign In
//                           </Button>
//                         </Form>
//                       )}
//                     </Formik>
//                     <div className="signup-box text-center">
//                       Don't have an account ? <Link to="/register">Sign Up</Link>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
