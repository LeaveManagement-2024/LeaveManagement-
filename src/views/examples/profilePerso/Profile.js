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
  getEmployeeById,
  getFilirerByEmployee
 
} from '../Employess/employeeApi'; 
import '../style.css';
import Parametre from './Para';

const Profile = () => {
  const userId = localStorage.getItem('userId');
  const [employee, setEmployee] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [filiereE,setFiliereE]=useState({});
  useEffect(() => {
    fetchEmployee();
    fetchFiliereEmployee();
  }, []);
  
  const fetchEmployee = async () => {
    try {
      const data = await getEmployeeById(userId);
      setEmployee(data);
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };const fetchFiliereEmployee = async () => {
    try {
      const data = await getFilirerByEmployee(userId);
      setFiliereE(data);
    } catch (error) {
      console.error('Error fetching employee filiere :', error);
    }
  };
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid >
        <Row>
          <Col className="order-xl-1 mb-5 mb-xl-0" xl="4" >
            <Card className="card-profile shadow"style={{marginBottom: '90px'}}>
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle" style={{height:'180px'}}
                        src={filiereE?.service?.departement?.respDepartement?.image}
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
                     
                      <div className=" text-right">
                        <span className="heading ">   القسم : {filiereE?.service?.departement?.departementNameAr}</span>
                        <span className="heading ">رئيس القسم : {filiereE?.service?.departement?.respDepartement?.firstNameAr} {filiereE?.service?.departement?.respDepartement?.lastNameAr}</span>
                        
                      </div>
                      
                    </div>
                  </div>
                </Row>
                
                <hr className="my-2" />

                  <div className="text-right"> 
                    <h4> 
                      :  البريد الإلكتروني 
                    </h4>
                  </div>
                  <div>
                    <h4>
                    {filiereE.service?.departement?.respDepartement?.email}
                    </h4>
                  </div>
                  <hr className="my-2" />
                  <div className="text-right"> 
                    <h4>
                      :  رقم الهاتف 
                    </h4>
                  </div>                 
                  <div>  
                    <h4> 
                    {filiereE.service?.departement?.respDepartement?.phone}
                    </h4>
                  </div> 
                  
                  <hr className="my-2" />
                  
                
              </CardBody>
            </Card>
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle" style={{height:'180px'}}
                        src={filiereE.service?.respService?.image}
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
                     
                      <div className=" text-right">
                        <span className="heading ">   المصلحة : {filiereE?.service?.serviceNameAr}</span>
                        <span className="heading ">رئيس المصلحة : {filiereE?.service?.respService?.firstNameAr} {filiereE.service?.respService?.lastNameAr}</span>
                        
                      </div>
                      
                    </div>
                  </div>
                  
                </Row>
                <hr className="my-2" />
                  <div className="text-right"> 
                    <h4> 
                      :  البريد الإلكتروني 
                    </h4>
                  </div>
                  <div>
                    <h4>
                      {filiereE?.service?.respService?.email}
                    </h4>
                  </div>
                  <hr className="my-2" />
                  <div className="text-right"> 
                    <h4>
                      :  رقم الهاتف 
                    </h4>
                  </div>                 
                  <div>  
                    <h4> 
                      {filiereE?.service?.respService?.phone}
                    </h4>
                  </div> 
                  
                  <hr className="my-2" />
                  
                
              </CardBody>
            </Card>
          </Col>
          
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
            <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle" style={{height:'180px'}}
                        src={employee.image}
                      />
                    </a>
                  </div>
                  
                </Col>
                
              </Row>
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">حسابي</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={() => setModalShow(true)}
                      size="sm"
                    >
                      الإعدادات
                    </Button>
                    <Parametre show={modalShow} onHide={() => setModalShow(false)}></Parametre>
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
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            الاسم الأول
                          </label>
                          <Input
                            className="form-control-alternative text-right"                           
                            id="input-first-name"
                            placeholder="الاسم الأول"
                            type="text"
                            defaultValue={employee.firstNameAr}
                            disabled
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
                            defaultValue={employee.lastNameAr}
                            id="input-last-name"
                            placeholder="اسم العائلة"
                            type="text"
                            disabled
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
                            defaultValue={employee.cin}
                            id="input-username"
                            placeholder="رقم البطاقة الوطنية"
                            type="text"
                            disabled
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
                            defaultValue={employee.email}
                            disabled
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
                            defaultValue={employee.phone}
                            id="input-first-name"
                            placeholder="رقم الهاتف"
                            type="text"
                            disabled
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
                            defaultValue={employee.addressAr}
                            id="input-last-name"
                            placeholder="العنوان"
                            type="text"
                            disabled
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
                            disabled
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
                            disabled
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
                            defaultValue={employee.workLocationAr}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            المصلحة
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                            id="input-city"
                            placeholder="المهمة"
                            type="text"
                            defaultValue={filiereE?.service?.serviceNameAr}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label 
                            className="form-control-label "
                            htmlFor="input-country"
                          >
                            القسم
                          </label>
                          <Input 
                            className="form-control-alternative text-right"
                            defaultValue={filiereE?.service?.departement?.departementNameAr}
                            id="input-country"
                            placeholder="الشعبة"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            المهمة
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                            id="input-city"
                            placeholder="المهمة"
                            type="text"
                            defaultValue={employee?.post?.postNameAr}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label 
                            className="form-control-label "
                            htmlFor="input-country"
                          >
                            الشعبة
                          </label>
                          <Input 
                            className="form-control-alternative text-right"
                            defaultValue={filiereE?.filiereNameAr}
                            id="input-country"
                            placeholder="الشعبة"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
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
