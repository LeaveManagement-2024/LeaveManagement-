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

const AddServiceModal = (props) => {

  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'serviceName':
        setServiceName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleAddService = async () => {
    try {
      const service = {
        serviceName,
        description
      };

      await axios.post('http://localhost:8093/service/save', service)
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
            <h4 className='text-center text-xl'>إضافة خدمة</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-right mb-4" style={{ fontSize: '1.5em' }}>
                معلومات الخدمة
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="serviceName">
                        اسم الخدمة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="serviceName"
                        placeholder="اسم الخدمة"
                        type="text"
                        value={serviceName}
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
                        placeholder="وصف الخدمة"
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
        <Button variant="primary" onClick={handleAddService}>
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddServiceModal;
