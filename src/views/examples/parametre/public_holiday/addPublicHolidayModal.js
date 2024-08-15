import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
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

const AddPublicHolidayModal = (props) => {

  const [holidayName, setHolidayName] = useState('');
  const [holidayDate, setHolidayDate] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'holidayName':
        setHolidayName(value);
        break;
      case 'holidayDate':
        setHolidayDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleAddPublicHoliday = async () => {
    try {
      const publicHoliday = {
        holidayName,
        holidayDate,
        description
      };

      await axios.post('http://localhost:8093/publicHoliday/save', publicHoliday)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        });
    } catch (error) {
      console.error('Error adding public holiday:', error);
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
            <h4 className='text-center text-xl'>إضافة عطلة سنوية</h4>
          </CardHeader>
          <CardBody>
            <Form>
            
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="holidayName">
                        اسم العطلة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="holidayName"
                        placeholder="اسم العطلة"
                        type="text"
                        value={holidayName}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="holidayDate">
                        تاريخ بداية العطلة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="holidayDate"
                        placeholder="YYYY-MM-DD"
                        type="date"
                        value={holidayDate}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="holidayDate">
                        تاريخ نهاية العطلة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="holidayDate"
                        placeholder="YYYY-MM-DD"
                        type="date"
                        value={holidayDate}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="description">
                        الوصف
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="description"
                        placeholder="وصف العطلة"
                        type="textarea"
                        value={description}
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
        <Button variant="primary" onClick={handleAddPublicHoliday}>
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPublicHolidayModal;
