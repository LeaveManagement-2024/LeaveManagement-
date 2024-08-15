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

const AddGradeModal = (props) => {

  const [gradeNameFr, setGradeNameFr] = useState('');
  const [gradeNameAr, setGradeNameAr] = useState('');
  const [descriptionFr, setDescriptionFr] = useState('');
  const [descriptionAr, setDescriptionAr] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'gradeNameFr':
        setGradeNameFr(value);
        break;
      case 'gradeNameAr':
        setGradeNameAr(value);
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

  const handleAddGrade = async () => {
    try {
      const gradeData = {
        gradeNameFr,
        gradeNameAr,
        descriptionFr,
        descriptionAr,
      };

      await axios.post('http://localhost:8093/grade/save', gradeData)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        });
    } catch (error) {
      console.error('Error adding grade:', error);
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
            <h4 className='text-center text-xl'>إضافة درجة</h4>
          </CardHeader>
          <CardBody>
            <Form>
              
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="gradeNameAr">
                        اسم الدرجة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="gradeNameAr"
                        placeholder="اسم الدرجة"
                        value={gradeNameAr}
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
                      <label className="form-control-label" htmlFor="gradeNameFr">
                        Nom du grade
                      </label>
                      <Input
                        className="form-control-alternative text-left"
                        id="gradeNameFr"
                        placeholder="Nom du grade"
                        value={gradeNameFr}
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
        <Button variant="primary" onClick={handleAddGrade}>
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddGradeModal;
