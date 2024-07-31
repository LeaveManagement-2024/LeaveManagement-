// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  loginEmployee,
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getManagerByIdEmp,
  getResponsibleByIdEmp
} from '../examples/Employess/employeeApi'; 
import './style.css'

const Profile = () => {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    fetchEmployee();
  }, []);
  
  const fetchEmployee = async () => {
    try {
      const data = await getEmployeeById(1);
      setEmployee(data);
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid >
        <Row>
          <Col className="order-xl-1 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={employee.image}
                      />
                    </a>
                  </div>
                  
                </Col>
                
              </Row>
              
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">

              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                       
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">أصدقاء</span>
                      </div>
                      <div>
                        <span className="description">الاسم الكامل </span>
                        <span className="heading">{employee.firstNameAr} {employee.lastNameAr}</span>
                        
                      </div>
                      
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                  {employee.filiere?.filiereNameFr}
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    بوخارست، رومانيا
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    مدير الحلول - ضابط الإبداع تيم
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    جامعة علوم الكمبيوتر
                  </div>
                  <hr className="my-4" />
                  
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">حسابي</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      الإعدادات
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-right mb-4 "style={{ fontSize: '1.5em' }}>
                    معلومات الموظف
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"ك
                            htmlFor="input-first-name"
                          >
                            الاسم الأول
                          </label>
                          <Input
                            className="form-control-alternative text-right"                           
                            id="input-first-name"
                            placeholder="الاسم الأول"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            اسم العائلة
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                        
                            id="input-last-name"
                            placeholder="اسم العائلة"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                              رقم البطاقة الوطنية
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-username"
                            placeholder="رقم البطاقة الوطنية"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label text-left"
                            htmlFor="input-email"
                          >
                            عنوان البريد الإلكتروني
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            رقم الهاتف
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                         
                            id="input-first-name"
                            placeholder="رقم الهاتف"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            العنوان
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-last-name"
                            placeholder="العنوان"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                  </div>
                  <hr className="my-4" />
                  
                  {/* Address */}
                  <h6 className="heading-small text-right mb-4 "style={{ fontSize: '1.5em' }}>
                    معلومات العمل
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup className="text-center" >
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            الرتبة 
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-address"
                            placeholder="الرتبة"
                            type="text"
                            defaultValue={employee.grade?.gradeNameAr}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            رقم التاجر
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-city"
                            placeholder="رقم التاجير"
                            type="text"
                            defaultValue={employee.ppr}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            تاريخ التوظيف
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                            defaultValue={employee.hireDate}
                            id="input-country"
                            
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-postal-code"
                          >
                              مقر العمل
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                            id="input-postal-code"
                            placeholder="مقر العمل"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            المدينة
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-city"
                            placeholder="المدينة"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup className="text-right">
                          <label 
                            className="form-control-label "
                            htmlFor="input-country"
                          >
                            الشعبة
                          </label>
                          <Input 
                            className="form-control-alternative text-right"
                            
                            id="input-country"
                            placeholder="البلد"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-postal-code"
                          >
                            الرمز البريدي
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                            id="input-postal-code"
                            placeholder="الرمز البريدي"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <h6 className="heading-small text-right mb-4 "style={{ fontSize: '1.5em' }}>
                              تغيير كلمة المرور
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup className="text-right" >
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            كلمة المرور القديمة 
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-address"
                            placeholder="كلمة المرور القديمة"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup className="text-right" >
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            كلمة المرور الجديدة 
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-address"
                            placeholder="كلمة المرور الجديدة"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup className="text-right" >
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            كلمة المرور الجديدة 
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-address"
                            placeholder="كلمة المرور الجديدة"
                            type="text"
                          />
                        </FormGroup>
                        <Col className="text-right" xs="12">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      تغيير كلمة المرور 
                    </Button>
                  </Col>
                      </Col>
                    </Row>
                    
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-right mb-4 "style={{ fontSize: '1.5em' }}>معلومات عني</h6>
                  <div className="pl-lg-4">
                    <FormGroup className="text-right">
                      <label >معلومات عني</label>
                      <div className="d-flex justify-content-center " style={{marginTop : '7px',marginBottom : '0px'}} >
                            <Input                                                       
                              size="sm" 
                              type="file"
                              
                            >
                              تغيير صورتي الشخصية 
                            </Input>
                            <Button
                                color="info"
                                size="sm"
                                onClick={(e) => e.preventDefault()}
                            >
                                  Edit image
                            </Button>
                        </div>
                      
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
