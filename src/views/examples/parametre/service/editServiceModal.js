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
import { getServiceById, updateService } from './serviceApi'; // Assurez-vous d'avoir créé ces fonctions dans un fichier API séparé

const EditServiceModal = (props) => {
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await getServiceById(props.service.idService);
        setServiceName(data.serviceName);
        setServiceDescription(data.serviceDescription);
      } catch (error) {
        console.error('Erreur lors de la récupération du service:', error);
      }
    };
    fetchService();
  }, [props.service.idService]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'serviceName':
        setServiceName(value);
        break;
      case 'serviceDescription':
        setServiceDescription(value);
        break;
      default:
        break;
    }
  };

  const handleUpdateService = async () => {
    try {
      const updatedService = {
        serviceName,
        serviceDescription,
      };

      await axios({
        method: 'put',
        url: `http://localhost:8093/service/update/${props.service.idService}`,
        data: updatedService,
      }).then((response) => {
        console.log(response.data);
        window.location.reload();
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour du service:', error);
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
            <h4 className='text-center text-xl'>Modifier le service {props.service.idService}</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-right mb-4" style={{ fontSize: '1.5em' }}>
                Informations sur le service
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="serviceName">
                        Nom du service
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="serviceName"
                        placeholder="Nom du service"
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
                      <label className="form-control-label" htmlFor="serviceDescription">
                        Description du service
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="serviceDescription"
                        placeholder="Description du service"
                        type="text"
                        value={serviceDescription}
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
        <Button onClick={props.onHide}>Annuler</Button>
        <Button variant="primary" onClick={handleUpdateService}>
          Sauvegarder
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditServiceModal;
s