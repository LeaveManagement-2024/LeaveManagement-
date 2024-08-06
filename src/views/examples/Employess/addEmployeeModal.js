import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import {
  loginEmployee,
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getManagerByIdEmp,
  getResponsibleByIdEmp
} from './employeeApi'; 
import { useNavigate } from "react-router-dom"


const AddEmployeeModal = (props) => {

  const [firstNameFr, setFirstNameFr] = useState('');
  const [firstNameAr, setFirstNameAr] = useState('');
  const [lastNameFr, setLastNameFr] = useState('');
  const [lastNameAr, setLastNameAr] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [ppr, setPpr] = useState('');
  const [cin, setCin] = useState('');
  const [addressFr, setAddressFr] = useState('');
  const [addressAr, setAddressAr] = useState('');
  const [hireDate, setHireDate] = useState('');
  const [workLocationFr, setWorkLocationFr] = useState('');
  const [workLocationAr, setWorkLocationAr] = useState('');
  const [image, setImage] = useState(null);
  const [postId, setPostId] = useState('');
  const [gradeId, setGradeId] = useState('');
  const [profileId, setProfileId] = useState('');
  const [managerId, setManagerId] = useState('');
  const [responsibleId, setResponsibleId] = useState('');
  const [filiereId, setFiliereId] = useState('');
  const navigate = useNavigate();


  const handleChange = (e) => {
    
    const { id, value, type, files } = e.target;
    if (type === 'file') {
      setImage(files[0]);
    } else {
      switch (id) {
        case 'firstNameFr':
          setFirstNameFr(value);
          break;
        case 'firstNameAr':
          setFirstNameAr(value);
          break;
        case 'lastNameFr':
          setLastNameFr(value);
          break;
        case 'lastNameAr':
          setLastNameAr(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'password':
          setPassword(value);
          break;
        case 'phone':
          setPhone(value);
          break;
        case 'ppr':
          setPpr(value);
          break;
        case 'cin':
          setCin(value);
          break;
        case 'addressFr':
          setAddressFr(value);
          break;
        case 'addressAr':
          setAddressAr(value);
          break;
        case 'hireDate':
          setHireDate(value);
          break;
        case 'workLocationFr':
          setWorkLocationFr(value);
          break;
        case 'workLocationAr':
          setWorkLocationAr(value);
          break;
        case 'postId':
          setPostId(value);
          break;
        case 'gradeId':
          setGradeId(value);
          break;
        case 'profileId':
          setProfileId(value);
          break;
        case 'managerId':
          setManagerId(value);
          break;
        case 'responsibleId':
          setResponsibleId(value);
          break;
        case 'filiereId':
          setFiliereId(value);
          break;
        default:
          break;
      }
    }
  };

  const handleAddEmployee = async () => {
    try {
      const formData = new FormData();
      formData.append('firstNameFr', firstNameFr);
      formData.append('firstNameAr', firstNameAr);
      formData.append('lastNameFr', lastNameFr);
      formData.append('lastNameAr', lastNameAr);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('phone', phone);
      formData.append('ppr', ppr);
      formData.append('cin', cin);
      formData.append('addressFr', addressFr);
      formData.append('addressAr', addressAr);
      formData.append('hireDate', hireDate);
      formData.append('workLocationFr', workLocationFr);
      formData.append('workLocationAr', workLocationAr);
      formData.append('postId', postId);
      formData.append('gradeId', gradeId); 
      formData.append('managerId', managerId);
      formData.append('responsibleId', responsibleId);
      formData.append('filiereId', filiereId);
      formData.append('profileId', 1);

      if(image !== null){
        formData.append('image', image)
    }

    await axios({
          method: 'post',
          url: 'http://localhost:8093/employee/save',
          data: formData
    }).then((response) => {
          console.log(response.data)
          navigate('/employees')
    })
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };


 


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >  
        <Modal.Body>
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
              <h4 className='text-center text-xl'> بطاقة الموظف</h4>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-right mb-4 "style={{ fontSize: '1.5em' }}>
                   المعلومات الشخصية                 </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"ك
                            htmlFor="input-first-name"
                          >
                            الاسم العائلي
                          </label>
                          <Input
                            className="form-control-alternative text-right"                           
                            id="lastNameAr"
                            placeholder="الاسم العائلي"
                            value={lastNameAr}
                            onChange={handleChange}
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
                            الاسم الشخصي
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                            value={firstNameAr}
                            onChange={handleChange}
                            id="firstNameAr"
                            placeholder="الاسم الشخصي"
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
                            id="cin"
                            placeholder="E161616"
                            type="text"
                            value={cin}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label text-left"
                            htmlFor="input-email"
                          >
                             البريد الإلكتروني
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                            id="email"
                            placeholder="jesse@example.com"
                            type="email"
                            value={email}
                            onChange={handleChange}
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
                            id="phone"
                            placeholder="06 56 30 98 03"
                            type="tel"
                            maxLength={10}
                            value={phone}
                            onChange={handleChange}

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
                            id="addressAr"
                            placeholder="المدينة،الحي،رقم المنزل"
                            type="text"
                            value={addressAr}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                  </div>
                  <hr className="my-4" />
                  <h6 className=" text-left mb-4  "style={{ fontSize: '1.3em' }}>
                   Les informations personnels
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup className="text-left">
                          <label
                            className="form-control-label"ك
                            htmlFor="input-first-name"
                          >
                            Nom
                          </label>
                          <Input
                            className="form-control-alternative text-left"                           
                            id="lastNameFr"
                            placeholder="Nom"
                            type="text"
                            value={lastNameFr}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">    
                        <FormGroup className="text-left">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Prénom 
                          </label>
                          <Input
                            className="form-control-alternative text-left"
                        
                            id="firstNameFr"
                            placeholder="Prénom"
                            type="text"
                            value={firstNameFr}
                            onChange={handleChange}
                          /> 
                        </FormGroup>
                      </Col>
                     
                     
                    </Row>
                    <Row>
                      
                    </Row>
                    <Row>
                     
                      <Col md="12">
                        <FormGroup className="text-left">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Adresse
                          </label>
                          <Input
                            className="form-control-alternative text-left"
                           
                            id="addressFr"
                            placeholder="Adresse"
                            type="text"
                            value={addressFr}
                            onChange={handleChange}
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
                        <FormGroup className="text-right" >
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            الرتبة 
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="gradeId"
                            placeholder="الرتبة"
                            type="text"
                            value={gradeId}
                            onChange={handleChange}
                        
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
                           
                            id="ppr"
                            type="text"
                            value={ppr}
                            onChange={handleChange}
                            placeholder="رقم التاجير"
                            
                        
                            
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
                            
                            id="hireDate"
                            value={hireDate}
                            onChange={handleChange}
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
                            id="workLocationAr"
                            placeholder="مقر العمل"
                            type="text"
                            value={workLocationAr}
                            onChange={handleChange}
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
                            الصفة
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="postId"
                            placeholder="الصفة"
                            type="text"
                            value={postId}
                            onChange={handleChange}

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
                            
                            id="filiereId"
                            value={filiereId}
                            placeholder="الشعبة"
                            type="text"
                            
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      
                      <Col lg="6">    
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                              المسؤول عنه 
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                        
                            id="responsibleId"
                            value={responsibleId}
                   
                            type="select"
                            onChange={handleChange}
                            
                          >
                            <option>
                              
                            </option>
                            <option>
                              2
                            </option>
                            <option>
                              3
                            </option>
                            <option>
                              4
                            </option>
                            <option>
                              7
                            </option>
                            </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">    
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            رئيس الموظف                                       
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                        
                            id="managerId"
                            value={managerId}
                            onChange={handleChange}
                            placeholder="...رخصة مرضية،رخصة ولادة"
                            type="select"
                          >
                            <option>
                              
                            </option>
                            <option>
                              2
                            </option>
                            <option>
                              3
                            </option>
                            <option>
                              4
                            </option>
                            <option>
                              5
                            </option>
                            </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <h6 className=" text-left mb-4  "style={{ fontSize: '1.3em' }}>
                    Les informations de travail
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col  md="12">
                        <FormGroup className="text-left">
                          <label
                            className="form-control-label"
                            htmlFor="input-postal-code"
                          >
                              Lieu de travail
                          </label>
                          <Input
                            className="form-control-alternative text-left"
                            id="workLocationFr"
                            value={workLocationFr}
                            placeholder=" Votre lieu de travail "
                            type="text"
                            onChange={handleChange}

                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <h6 className="heading-small text-right mb-4 "style={{ fontSize: '1.5em' }}>
                  إدخال كلمة المرور 
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup className="text-right" >
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            كلمة المرور  
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                            onChange={handleChange}
                            id="password"
                            value={password}
                            placeholder="كلمة المرور "
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                    </Row>     
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-right mb-4 "style={{ fontSize: '1.5em' }}> الصورة الشخصية </h6>
                  <div className="pl-lg-4">
                    <FormGroup className="text-right">                     
                      <div className="d-flex justify-content-center " style={{marginTop : '7px',marginBottom : '0px'}} >
                            <Input                                                       
                              size="sm" 
                              type="file"  
                              id="image"
                              onChange={handleChange}              
                            >                             
                            </Input>                         
                        </div>                     
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button onClick={props.onHide}>خروج</Button>
          <Button variant="primary" onClick={handleAddEmployee}>
           حفظ
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  export default AddEmployeeModal;