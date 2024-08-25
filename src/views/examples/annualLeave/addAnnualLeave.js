import swal from 'sweetalert2';
import Modal from 'react-bootstrap/Modal';
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
import { useState } from 'react';
import 'wicg-inert';
const AddAnnualLeaveModal = (props) => {
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [label, setLabel] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'label':
        setLabel(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
      case 'endDate':
        setEndDate(value);
        break;
      case 'status':
        setStatus(value);
        break;
      default:
        break;
    }
  };

  const handleAddAnnualLeave = async () => {
    try {
      const annualLeaveData = {
        startDate,
        endDate,
        label,
        status,
      };

      const response = await axios.post('http://localhost:8093/annualLeave/save', annualLeaveData);
      console.log(response.data);
      
      // Display success alert using SweetAlert2
      swal.fire({
        title: 'تمت الإضافة!',
        text: 'تمت إضافة العطلة السنوية بنجاح.',
        icon: 'success',
        confirmButtonText: 'موافق'
      }).then(() => {
        window.location.reload(); // Reload page after confirmation
      });
      
    } catch (error) {
      console.error('Error adding leave:', error);
      
      // Display error alert using SweetAlert2
      swal.fire({
        title: 'خطأ!',
        text: 'حدث خطأ أثناء إضافة العطلة السنوية.',
        icon: 'error',
        confirmButtonText: 'موافق'
      });
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.onHide}
      aria-hidden={!props.show} 
    >  
      <Modal.Body>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <h4 className="text-center text-xl">العطلة السنوية</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="input-leave-date">
                        حالة العطلة السنوية
                      </label>
                      <Input 
                        className="form-control-alternative text-right"
                        id="status"
                        placeholder="حالة العطلة السنوية"
                        type="text"
                        value={status}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="input-leave-date">
                        اسم العطلة السنوية 
                      </label>
                      <Input 
                        className="form-control-alternative text-right"
                        id="label"
                        placeholder="اسم الرخصة"
                        type="text"
                        value={label}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">    
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="input-leave-type">
                        نهاية الرخصة السنوية
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="endDate"
                        placeholder="نهاية الرخصة السنوية"
                        type="date"
                        value={endDate}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col> 
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="input-employee-name">
                        بداية الرخصة السنوية 
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="startDate"
                        placeholder="بداية الرخصة السنوية"
                        type="date"
                        value={startDate}
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
        <Button color="primary" onClick={(handleAddAnnualLeave)} >حفظ</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddAnnualLeaveModal;
