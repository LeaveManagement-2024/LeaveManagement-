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

  const [profileNameFr, setProfileNameFr] = useState('');
  const [profileNameAr, setProfileNameAr] = useState('');
  const [profileDescriptionFr, setProfileDescriptionFr] = useState('');
  const [profileDescriptionAr, setProfileDescriptionAr] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'profileNameFr':
        setProfileNameFr(value);
        break;
      case 'profileNameAr':
        setProfileNameAr(value);
        break;
      case 'profileDescriptionFr':
        setProfileDescriptionFr(value);
        break;
      case 'profileDescriptionAr':
        setProfileDescriptionAr(value);
        break;
      default:
        break;
    }
  };

  const handleAddProfile = async () => {
    try {
      const profileData = {
        profileNameFr,
        profileNameAr,
        profileDescriptionFr,
        profileDescriptionAr,
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
              <h4 className='text-center text-xl'>إضافة ملف جديد</h4>
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-right mb-4" style={{ fontSize: '1.5em' }}>
                  معلومات الملف
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup className="text-right">
                        <label className="form-control-label" htmlFor="profileNameAr">
                          اسم الملف (بالعربية)
                        </label>
                        <Input
                          className="form-control-alternative text-right"
                          id="profileNameAr"
                          placeholder="اسم الملف"
                          type="text"
                          value={profileNameAr}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">    
                      <FormGroup className="text-left">
                        <label className="form-control-label" htmlFor="profileNameFr">
                          Nom du profil (en français)
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="profileNameFr"
                          placeholder="Nom du profil"
                          type="text"
                          value={profileNameFr}
                          onChange={handleChange}
                        /> 
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup className="text-right">
                        <label className="form-control-label" htmlFor="profileDescriptionAr">
                          وصف الملف (بالعربية)
                        </label>
                        <Input
                          className="form-control-alternative text-right"
                          id="profileDescriptionAr"
                          placeholder="وصف الملف"
                          type="textarea"
                          value={profileDescriptionAr}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup className="text-left">
                        <label className="form-control-label" htmlFor="profileDescriptionFr">
                          Description du profil (en français)
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="profileDescriptionFr"
                          placeholder="Description du profil"
                          type="textarea"
                          value={profileDescriptionFr}
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
