import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
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

const AddFiliereModal = (props) => {

  const [filiereNameFr, setFiliereNameFr] = useState('');
  const [filiereNameAr, setFiliereNameAr] = useState('');
  const [descriptionFr, setDescriptionFr] = useState('');
  const [descriptionAr, setDescriptionAr] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'filiereNameFr':
        setFiliereNameFr(value);
        break;
      case 'filiereNameAr':
        setFiliereNameAr(value);
        break;
      case 'descriptionFr':
        setDescriptionFr(value);
        break;
      case 'descriptionAr':
        setDescriptionAr(value);
        break;
      default:
        break;
    }
  };

  const handleAddFiliere = async () => {
    try {
      const filiereData = {
        filiereNameFr,
        filiereNameAr,
        descriptionFr,
        descriptionAr,
      };

      await axios.post('http://localhost:8093/filiere/save', filiereData)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        });
    } catch (error) {
      console.error('Error adding filiere:', error);
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
            <h4 className='text-center text-xl'>إضافة شعبة</h4>
          </CardHeader>
          <CardBody>
            <Form>
             
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="filiereNameAr">
                        اسم الشعبة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="filiereNameAr"
                        placeholder="اسم الشعبة"
                        value={filiereNameAr}
                        onChange={handleChange}
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              
              </div>
              
              
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-left">
                      <label className="form-control-label" htmlFor="filiereNameFr">
                        Nom de la filière
                      </label>
                      <Input
                        className="form-control-alternative text-left"
                        id="filiereNameFr"
                        placeholder="Nom de la filière"
                        value={filiereNameFr}
                        onChange={handleChange}
                        type="text"
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
        <Button variant="primary" onClick={handleAddFiliere}>
        حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFiliereModal;
