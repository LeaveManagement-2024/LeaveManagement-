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
import { useNavigate } from "react-router-dom";

const AddDepartmentModal = (props) => {
  const [departmentNameFr, setDepartmentNameFr] = useState('');
  const [departmentNameAr, setDepartmentNameAr] = useState('');
  const [descriptionFr, setDescriptionFr] = useState('');
  const [descriptionAr, setDescriptionAr] = useState('');
  const [headOfDepartment, setHeadOfDepartment] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'departmentNameFr':
        setDepartmentNameFr(value);
        break;
      case 'departmentNameAr':
        setDepartmentNameAr(value);
        break;
      case 'descriptionFr':
        setDescriptionFr(value);
        break;
      case 'descriptionAr':
        setDescriptionAr(value);
        break;
      case 'headOfDepartment':
        setHeadOfDepartment(value);
        break;
      default:
        break;
    }
  };

  const handleAddDepartment = async () => {
    try {
      const departmentData = {
        departmentNameFr,
        departmentNameAr,
        descriptionFr,
        descriptionAr,
        headOfDepartment,
      };

      await axios.post('http://localhost:8093/departments/save', departmentData)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        });
    } catch (error) {
      console.error('Error adding department:', error);
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
            <h4 className='text-center text-xl'> إضافة قسم</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-right mb-4 " style={{ fontSize: '1.5em' }}>
                معلومات القسم
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="departmentNameAr">
                        اسم القسم 
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="departmentNameAr"
                        placeholder="اسم القسم "
                        type="text"
                        value={departmentNameAr}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="departmentNameFr">
                        Nom du département  
                      </label>
                      <Input
                        className="form-control-alternative text-left"
                        id="departmentNameFr"
                        placeholder="Nom du département  "
                        type="text"
                        value={departmentNameFr}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="headOfDepartment">
                        رئيس القسم
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="headOfDepartment"
                        placeholder="رئيس القسم"
                        type="text"
                        value={headOfDepartment}
                        onChange={handleChange}
                      />
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
        <Button variant="primary" onClick={handleAddDepartment}>
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddDepartmentModal;
