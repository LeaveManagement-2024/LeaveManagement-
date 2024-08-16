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
import {getAllGrades} from '../grades/gradeApi'
import{getAllPosts} from'../posts/postsAPI'
import{getAllFilieres} from '../filiere/filieresApi'
import { useNavigate } from "react-router-dom";


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
  const [filiereId, setFiliereId] = useState('');
  const [grades, setGrades] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filieres, setFilieres] = useState([]);
  const [errors, setErrors] = useState({}); // State to track validation errors



  const navigate = useNavigate();

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const gradesData = await getAllGrades();
        setGrades(gradesData);
      } catch (error) {
        console.error('Erreur lors de la récupération des grades:', error);
      }
    };
    const fetchPosts = async () => {
      try {
        const postsData = await getAllPosts();
        setPosts(postsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des posts:', error);
      }
    };
    const fetchFilieres = async () => {
      try {
        const filieresData = await getAllFilieres();
        setFilieres(filieresData);
      } catch (error) {
        console.error('Erreur lors de la récupération des posts:', error);
      }
    };
    fetchGrades();
    fetchPosts();
    fetchFilieres();
  }, []);

 
  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    if (type === 'file') {
      setImage(files[0]);
    } else {
      switch (id) {
        case 'postId':
        case 'gradeId':
        case 'profileId':
        case 'filiereId':
          const numberValue = value ? Number(value) : '';
          if (id === 'postId') setPostId(numberValue);
          if (id === 'gradeId') setGradeId(numberValue);
          if (id === 'profileId') setProfileId(numberValue);
          if (id === 'filiereId') setFiliereId(numberValue);
          break;
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
        default:
          break;
      }
    }
  };


  const validateForm = () => {
    const newErrors = {};
    if (!firstNameFr) newErrors.firstNameFr = 'Le prénom est obligatoire';
    if (!firstNameAr) newErrors.firstNameAr = ' الاسم الشخصي مطلوب ';
    if (!lastNameFr) newErrors.lastNameFr = 'Le nom est obligatoire';
    if (!lastNameAr) newErrors.lastNameAr = ' الاسم العائلي مطلوب ';
    if (!email) newErrors.email = 'البريد الالكتروني مطلوب';
    if (!password) newErrors.password = 'كلمة المرور مطلوبة';
    if (!phone) newErrors.phone = 'رقم الهاتف مطلوب';
    if (!ppr) newErrors.ppr = 'رقم التاجير مطلوب';
    if (!cin) newErrors.cin = 'رقم البطاقة الوطنية مطلوب';
    if (!addressFr) newErrors.addressFr = 'L\'adresse est obligatoire';
    if (!addressAr) newErrors.addressAr = 'العنوان مطلوب';
    if (!hireDate) newErrors.hireDate = 'تاريخ التوظيف مطلوب';
    if (!workLocationFr) newErrors.workLocationFr = 'Le lieu de travail est obligatoire';
    if (!workLocationAr) newErrors.workLocationAr = 'مقر العمل مطلوب';
    if (!postId) newErrors.postId = 'المهمة مطلوبة';
    if (!gradeId) newErrors.gradeId = 'الرتبة مطلوبة';
    if (!filiereId) newErrors.filiereId = 'الشعبة مطلوبة';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddEmployee = async () => {

    if (!validateForm()) {
      return;
    }
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
          window.location.reload();
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
                          {errors.lastNameAr && (
                        <div className="text-danger">{errors.lastNameAr}</div>
                      )}
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
                          {errors.firstNameAr && (
                            <div className="text-danger">{errors.firstNameAr}</div>
                          )}
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
                          {errors.cin && (
                            <div className="text-danger">{errors.cin}</div>
                          )}
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
                        {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
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
                        {errors.phone && (
                        <div className="text-danger">{errors.phone}</div>
                      )}
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
                        {errors.addressAr && (
                        <div className="text-danger">{errors.addressAr}</div>
                      )}
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
                       {errors.lastNameFr && (
                        <div className="text-danger">{errors.lastNameFr}</div>
                      )}
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
                       {errors.firstNameFr && (
                        <div className="text-danger">{errors.firstNameFr}</div>
                      )}
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
                      {errors.addressFr && (
                        <div className="text-danger">{errors.addressFr}</div>
                      )}
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
                            type="select"
                            value={gradeId}
                            onChange={handleChange}
                        
                          >
                            
                          <option value="">اختر الرتبة</option>
                        {grades.map((grade) => (
                          <option key={grade.idGrade} value={grade.idGrade}>
                            {grade.gradeNameAr}
                          </option>
                        ))}</Input>
                        {errors.gradeId && (
        <div className="text-danger">{errors.gradeId}</div>
    )}
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
                        {errors.ppr && (
                        <div className="text-danger">{errors.ppr}</div>
                      )}
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
                        {errors.hireDate && (
                        <div className="text-danger">{errors.hireDate}</div>
                      )}
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
                        {errors.workLocationAr && (
                        <div className="text-danger">{errors.workLocationAr}</div>
                      )}
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
                           
                            id="postId"
                            placeholder="المهمة"
                            type="select"
                            value={postId}
                            onChange={handleChange}

                          >
                          <option value="">اخترالمهمة</option>
                            {posts.map((post) => (
                          <option key={post.idPost} value={post.idPost}>
                            {post.postNameAr}
                          </option>
                        ))}</Input>
                        {errors.postNameAr && (
                        <div className="text-danger">{errors.postNameAr}</div>
                      )}
                      {errors.postId && (
        <div className="text-danger">{errors.postId}</div>
    )}
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
                            type="select"
                            
                            onChange={handleChange}
                          >
                            <option value="">اخترالشعبة</option>
                            {filieres.map((filiere) => (
                          <option key={filiere.idFiliere} value={filiere.idFiliere}>
                            {filiere.filiereNameAr}
                          </option>
                        ))}</Input>
                        {errors.filiereId && (
        <div className="text-danger">{errors.filiereId}</div>
    )}
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
                        {errors.workLocationFr && (
                        <div className="text-danger">{errors.workLocationFr}</div>
                      )}
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
                        {errors.password && (
                        <div className="text-danger">{errors.password}</div>
                      )}
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