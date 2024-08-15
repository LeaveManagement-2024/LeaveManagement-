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
import { getPublicHolidayById, updatePublicHoliday } from './publicHolidayApi'; // Assurez-vous d'avoir créé ces fonctions dans un fichier API séparé

const EditPublicHolidayModal = (props) => {
  const [holidayDate, setHolidayDate] = useState('');
  const [holidayNameFr, setHolidayNameFr] = useState('');
  const [holidayNameAr, setHolidayNameAr] = useState('');

  useEffect(() => {
    const fetchPublicHoliday = async () => {
      try {
        const data = await getPublicHolidayById(props.publicHoliday.idHoliday);
        setHolidayDate(data.holidayDate);
        setHolidayNameFr(data.holidayNameFr);
        setHolidayNameAr(data.holidayNameAr);
      } catch (error) {
        console.error('Erreur lors de la récupération du jour férié:', error);
      }
    };
    fetchPublicHoliday();
  }, [props.publicHoliday.idHoliday]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'holidayDate':
        setHolidayDate(value);
        break;
      case 'holidayNameFr':
        setHolidayNameFr(value);
        break;
      case 'holidayNameAr':
        setHolidayNameAr(value);
        break;
      default:
        break;
    }
  };

  const handleUpdatePublicHoliday = async () => {
    try {
      const updatedPublicHoliday = {
        holidayDate,
        holidayNameFr,
        holidayNameAr,
      };

      await axios({
        method: 'put',
        url: `http://localhost:8093/publicHoliday/update/${props.publicHoliday.idHoliday}`,
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
            <h4 className='text-center text-xl'>تعديل يوم العطلة {props.publicHoliday.idHoliday}</h4>
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
                      <label className="form-control-label" htmlFor="holidayDate">
                        تاريخ العطلة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="holidayDate"
                        type="date"
                        value={holidayDate}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="holidayNameAr">
                        اسم العطلة بالعربية
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="holidayNameAr"
                        placeholder="اسم العطلة بالعربية"
                        type="text"
                        value={holidayNameAr}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="holidayNameFr">
                        Nom de la fête en français
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="holidayNameFr"
                        placeholder="Nom de la fête en français"
                        type="text"
                        value={holidayNameFr}
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
