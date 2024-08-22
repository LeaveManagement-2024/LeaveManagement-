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

const AddLeaveTypeModal = (props) => {

 
  const [name, setName] = useState('');
 
  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        setName(value);
        break;
      default:
        break;
    }
  };

  const handleAddLeaveType = async () => {
    try {
      const leaveTypeData = {
        name,
      };

      await axios.post('http://localhost:8093/leaveTypes/save', leaveTypeData)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        });
    } catch (error) {
      console.error('Error adding leave type:', error);
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
            <h4 className='text-center text-xl'>إضافة نوع الإجازة</h4>
          </CardHeader>
          <CardBody>
            <Form>
              
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="leaveTypeNameAr">
                        اسم نوع الإجازة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="name"
                        placeholder="اسم نوع الإجازة"
                        value={name}
                        onChange={handleChange}
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              
              </div>
             
              <div className="pl-lg-4">
                
               
              </div>
            </Form>
          </CardBody>
        </Card>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button onClick={props.onHide}>خروج</Button>
        <Button variant="primary" onClick={handleAddLeaveType}>
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddLeaveTypeModal;