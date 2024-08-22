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
import { getProfileById, updateProfile } from './profileApi'; // Assurez-vous d'avoir créé ces fonctions dans un fichier API séparé

const EditProfileModal = (props) => {

  const [profileName, setProfileName] = useState('');


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfileById(props.profile.idProfile);
        setProfileName(data.profileName);
      
      } catch (error) {
        console.error('Erreur lors de la récupération du profil:', error);
      }
    };
    fetchProfile();
  }, [props.profile.idProfile]);

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

  const handleUpdateProfile = async () => {
    try {
      const updatedProfile = {
        profileName,
      };

      await axios({
        method: 'put',
        url: `http://localhost:8093/profiles/update/${props.profile.idProfile}`,
        data: updatedProfile,
      }).then((response) => {
        console.log(response.data);
        window.location.reload();
      });
    } catch (error) {
      console.error('Error updating profile:', error);
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
            <h4 className='text-center text-xl'>تعديل الملف {props.profile.idProfile}</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="profileNameAr">
                        اسم  الصفة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="profileName"
                        placeholder="اسم الملف بالعربية"
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
        <Button variant="primary" onClick={handleUpdateProfile}>
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;
