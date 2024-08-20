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
} from '../Employess/employeeApi' 
import {getAllGrades} from '../parametre/grades/gradesApi'
import{getAllPosts} from'../parametre/posts/postApi'
import{getAllFilieres} from '../parametre/filiere/filiereApi'
import { useNavigate } from "react-router-dom";


const ChangeImage = (props) => {

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
              <h4 className='text-center text-xl'>تغيير الصورة الشخصية </h4>
              </CardHeader>
              <CardBody>
                <Form>
                  
                <FormGroup className="text-right">
                      <label > اختر صورتك الشخصية</label>
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
                 
                </Form>
              </CardBody>
            </Card>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button onClick={props.onHide} color="warning">خروج</Button>
          <Button variant="primary" 
          color="primary" onClick={handleAddEmployee}>
           حفظ
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  export default ChangeImage;