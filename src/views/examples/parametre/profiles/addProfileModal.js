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

const AddProfileModal = (props) => {

  const [profileName, setProfileName] = useState('');
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'profileName':
        setProfileName(value);
        break;
      default:
        break;
    }
  };

  const handleAddProfile = async () => {
    try {
      const profileData = {
        profileName,
       
      };

      await axios.post('http://localhost:8093/profiles/save', profileData)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        });
    } catch (error) {
      console.error('Error adding profile:', error);
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
              <h4 className='text-center text-xl'>إضافة  صفة</h4>
            </CardHeader>
            <CardBody>
              <Form>
                
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="12">
                      <FormGroup className="text-right">
                        <label className="form-control-label" htmlFor="profileNameAr">
                          اسم الصفة 
                        </label>
                        <Input
                          className="form-control-alternative text-right"
                          id="profileName"
                          placeholder="اسم الصفة"
                          type="text"
                          value={profileName}
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
        <Button variant="primary" onClick={handleAddProfile}>
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProfileModal;
