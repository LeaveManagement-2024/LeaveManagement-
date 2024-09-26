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

  const [name, setname] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        setname(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
        case 'endDate':
          setEndDate(value);
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
        name,
        startDate,
        endDate,
        description,
      };

      await axios.post('http://192.168.1.10:8093/publicHoliday/save', publicHoliday)
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
            <h4 className='text-center text-xl'>إضافة العطلة الوطنية و الدينية</h4>
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
                        id="name"
                        placeholder="اسم العطلة"
                        type="text"
                        value={name}
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
                        id="startDate"
                        placeholder="YYYY-MM-DD"
                        type="date"
                        value={startDate}
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
                        id="endDate"
                        placeholder="YYYY-MM-DD"
                        type="date"
                        value={endDate}
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
