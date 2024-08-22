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

const EditLeaveTypeModal = (props) => {

  const [leaveTypeNameFr, setLeaveTypeNameFr] = useState('');
  const [leaveTypeNameAr, setLeaveTypeNameAr] = useState('');

  useEffect(() => {
    const fetchLeaveType = async () => {
      try {
        const response = await axios.get(`http://localhost:8093/leave_types/${props.leaveType.idLeaveType}`);
        const data = response.data;
        setLeaveTypeNameFr(data.leaveTypeNameFr);
        setLeaveTypeNameAr(data.leaveTypeNameAr);
      } catch (error) {
        console.error('Erreur lors de la récupération du type de congé:', error);
      }
    };
    fetchLeaveType();
  }, [props.leaveType.idLeaveType]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'leaveTypeNameFr':
        setLeaveTypeNameFr(value);
        break;
      case 'leaveTypeNameAr':
        setLeaveTypeNameAr(value);
        break;
      default:
        break;
    }
  };

  const handleUpdateLeaveType = async () => {
    try {
      const leaveTypeData = {
        leaveTypeNameFr,
        leaveTypeNameAr,
      };

      await axios.put(`http://localhost:8093/leave_types/update/${props.leaveType.idLeaveType}`, leaveTypeData)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        });
    } catch (error) {
      console.error('Error updating leave type:', error);
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
            <h4 className='text-center text-xl'>تعديل نوع الإجازة {props.leaveType.idLeaveType}</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-right mb-4" style={{ fontSize: '1.5em' }}>
                معلومات نوع الإجازة
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="leaveTypeNameAr">
                        اسم نوع الإجازة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="leaveTypeNameAr"
                        placeholder="اسم نوع الإجازة"
                        value={leaveTypeNameAr}
                        onChange={handleChange}
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12">
                    <FormGroup className="text-left">
                      <label className="form-control-label" htmlFor="leaveTypeNameFr">
                        Nom du type de congé
                      </label>
                      <Input
                        className="form-control-alternative text-left"
                        id="leaveTypeNameFr"
                        placeholder="Nom du type de congé"
                        value={leaveTypeNameFr}
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
        <Button variant="primary" onClick={handleUpdateLeaveType}>
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditLeaveTypeModal;
