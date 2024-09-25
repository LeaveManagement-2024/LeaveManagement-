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
import { getPublicHolidayById, updatePublicHoliday } from './public_holidayApi'; // Assurez-vous d'avoir créé ces fonctions dans un fichier API séparé

const EditPublicHolidayModal = (props) => {
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
  useEffect(() => {
    const fetchPublicHoliday = async () => {
      try {
        const data = await getPublicHolidayById(props.publicHoliday.id);
        setname(data.name);
        setStartDate(data.startDate);
        setEndDate(data.endDate);
        setDescription(data.description);
      } catch (error) {
        console.error('Erreur lors de la récupération du jour férié:', error);
      }
    };
    fetchPublicHoliday();
  }, [props.publicHoliday.id]);

 

  const handleUpdatePublicHoliday = async () => {
    try {
      const updatedPublicHoliday = {
        name,
        startDate,
        endDate,
        description,
      
      };

      await axios({
        method: 'put',
        url: `http://localhost:8093/publicHoliday/update/${props.publicHoliday.id}`,
        data: updatedPublicHoliday,
      }).then((response) => {
        console.log(response.data);
        window.location.reload();
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour du jour férié:', error);
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
            <h4 className='text-center text-xl'>تعديل يوم العطلة </h4>
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
        <Button variant="primary" onClick={handleUpdatePublicHoliday}>
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPublicHolidayModal;
