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

const AddEmpInAL = (props) => {

  
  const [nbr, setNbr] = useState('');
  const [errors, setErrors] = useState({}); // State to track validation errors

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'nbr':
        setNbr(value);
        break;
      default:
        break;
    }
  };
  const validateForm = () => {
    const newErrors = {};
    if (!nbr) newErrors.gradeNameAr = ' يجب ادخال عدد ايام الرخصة  ';
    
 
    
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleAdd = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      

      await axios.post(`http://localhost:8093/annualLeaveLine/save/${props.idan}/${nbr}`)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        });
    } catch (error) {
      console.error('Error adding anuualLeaveLine:', error);
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
            <h4 className='text-center text-xl'  > إضافة الموظفون للعطلة السنوية  </h4>
          </CardHeader>
          <CardBody>
            <Form>
              
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="gradeNameAr">
                      عدد ايام الرخصة 
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="nbr"
                       
                        value={nbr}
                        onChange={handleChange}
                        type="number"
                        
                      />
                      {errors.gradeNameAr && (
                        <div className="text-danger">{errors.nbr}</div>
                      )}
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
        <Button variant="primary" onClick={handleAdd}>
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEmpInAL;
