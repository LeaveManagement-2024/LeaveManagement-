import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { useNavigate } from "react-router-dom"; // For navigation
import axios from "axios"; // To make API calls

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dfsd = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const response = await axios.post("http://localhost:8093/employee/login", { email, password });
      
      if (response.data.success) {
        // Redirect to dashboard on successful login
        navigate('/index');
      } else {
        // Show error message on failed login
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.");
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8093/employee/login", {
        email: email,
        password: password,
        }).then((res) => 
        {
         console.log(res.data);
         
         if (res.data.message === "Email Not Exist") 
         {
           alert("Email not exits");
         } 
         else if(res.data.message === "login Success")
         { 
             
             localStorage.setItem('userId', res.data.id); // Stockage de l'ID de l'utilisateur
             navigate('/admin/index');
         } 
          else 
         { 
            alert("Incorrect Email and Password not match");
         }
      }, fail => {
       console.error(fail); // Error!
});
    }

     catch (err) {
      alert(err);
    }
  
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-1 mb-1">
              <h1>تسجيل الدخول</h1>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="البريد الإلكتروني"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="كلمة المرور"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id="customCheckLogin"
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor="customCheckLogin">
                  <span className="text-muted">تذكير</span>
                </label>
              </div>
              {error && <div className="text-danger text-center mt-3">{error}</div>}
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  دخول
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
              <small>نسيت كلمة المرور</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
              <small>إنشاء حساب جديد</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
