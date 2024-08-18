import Modal from 'react-bootstrap/Modal';
import React, { useState,useEffect } from 'react';
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
import axios from 'axios';
import {
  getAllDepartments

} from "../departement/departementApi"
import {
  getAllEmployees,
} from '../../Employess/employeeApi'; 


const AddServiceModal = (props) => {

  const [serviceNameFr, setServiceNameFr] = useState('');
  const [serviceNameAr, setServiceNameAr] = useState('');
  const [idDepartment, setIdDepartment,] = useState('');  
  const [respServiceId,setRespServiceId] = useState('')
  const [departements,setDepartements] = useState([]);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {  
    fetchAllDepartments();
    fetchAllEmployees();

  }, []);
  const fetchAllDepartments = async () => {
    try {
      const data = await getAllDepartments();
      setDepartements(data);
    } catch (error) {
      console.error('Error fetching department:', error);
    }
  };
  const fetchAllEmployees = async () => {
    try {
      const data = await getAllEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'serviceNameFr':
        setServiceNameFr(value);
        break;
      case 'serviceNameAr':
        setServiceNameAr(value);
        break;
      case 'idDepartment':
        setIdDepartment(value);
        break;
        case 'respServiceId':
          setRespServiceId(value);
          break;
      default:
        break;
    }
  };

  const handleAddService = async () => {
    try {
      const service = {
        serviceNameFr,
        serviceNameAr,
        idDepartment,
        respServiceId
      };

      await axios.post('http://localhost:8093/services/save', service)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        });
    } catch (error) {
      console.error('Error adding service:', error);
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
            <h4 className='text-center text-xl'>إضافة مصلحة</h4>
          </CardHeader>
          <CardBody>
            <Form>
             
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="serviceName">
                        اسم المصلحة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="serviceNameAr"
                        placeholder="اسم المصلحة"
                        type="text"
                        value={serviceNameAr}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-left">
                      <label className="form-control-label" htmlFor="serviceName">
                        Nom de service 
                      </label>
                      <Input
                        className="form-control-alternative text-left"
                        id="serviceNameFr"
                        placeholder=" Nom de service "
                        type="text"
                        value={serviceNameFr}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                      <Col md="12">
                        <FormGroup className="text-right" >
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            القسم
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="idDepartment"
                            placeholder="القسم"
                            type="select"
                            value={idDepartment}
                            onChange={handleChange}
                        
                          >
                            
                          <option value>اختر القسم </option>
                          {departements.map((departement) => (
                          <option key={departement.idDepartement} value={departement.idDepartement}>
                            {departement.departementNameAr}
                          </option>
                        ))}</Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup className="text-right" >
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            المسؤول عن المصلحة
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="respServiceId"
                            placeholder="الرتبة"
                            type="select"
                            value={respServiceId}
                            onChange={handleChange}
                        
                          >
                            
                          <option value="">اختر المسؤول عن المصلحة</option>
                          {employees.map((emp) => (
                          <option key={emp.idE} value={emp.idE}>
                            {emp.lastNameAr} {emp.firstNameAr}
                          </option>
                        ))}</Input>
                        </FormGroup>
                      </Col>
                    </Row>
                
              </div>
            </Form>
          </CardBody>
        </Card>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button onClick={props.onHide}>خروج</Button>
        <Button variant="primary" onClick={handleAddService}>
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddServiceModal;
