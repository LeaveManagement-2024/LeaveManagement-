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
import { getDepartmentById, updateDepartment } from './departementApi'; // Assurez-vous d'avoir créé ces fonctions dans un fichier API séparé

const EditDepartmentModal = (props) => {

  const [departmentNameFr, setDepartmentNameFr] = useState('');
  const [departmentNameAr, setDepartmentNameAr] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const data = await getDepartmentById(props.dep.idDepartement);
        setDepartmentNameFr(data.departmentNameFr);
        setDepartmentNameAr(data.departmentNameAr);
      } catch (error) {
        console.error('Erreur lors de la récupération du département:', error);
      }
    };
    fetchDepartment();
  }, [props.dep.idDepartement]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'departmentNameFr':
        setDepartmentNameFr(value);
        break;
      case 'departmentNameAr':
        setDepartmentNameAr(value);
        break;
      default:
        break;
    }
  };

  const handleUpdateDepartment = async () => {
    try {
      const updatedDepartment = {
        departmentNameFr,
        departmentNameAr,
      };

      await axios({
        method: 'put',
        url: `http://localhost:8093/department/update/${props.dep.idDepartement}`,
        data: updatedDepartment,
      }).then((response) => {
        console.log(response.data);
        window.location.reload();
      });
    } catch (error) {
      console.error('Error updating department:', error);
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
            <h4 className='text-center text-xl'>تعديل قسم {props.dep.idDepartement}</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-right mb-4" style={{ fontSize: '1.5em' }}>
                المعلومات الشخصية
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="departmentNameAr">
                        اسم القسم بالعربية
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="departmentNameAr"
                        placeholder="اسم القسم بالعربية"
                        type="text"
                        value={departmentNameAr}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">    
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="departmentNameFr">
                        Nom du département en français
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="departmentNameFr"
                        placeholder="Nom du département en français"
                        type="text"
                        value={departmentNameFr}
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
        <Button variant="primary" onClick={handleUpdateDepartment}>
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditDepartmentModal;
