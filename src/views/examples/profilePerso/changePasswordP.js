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
  Row,
  Col,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const ChangePass = (props) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      alert("كلمة مرور جديدة وكلمة سر تأكيد لا تتطابق!");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8093/employee/updatePassword/${userId}`, {
        oldPassword,
        newPassword
      });
      
      alert(response.data);
      props.onHide(); // Hide modal on success
    } catch (error) {
      alert(error.response.data || 'An error occurred');
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
            <h4 className='text-center text-xl'>تغيير كلمة المرور</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="pl-lg-4">
                <Row>
                  <Col md="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="old-password">كلمة المرور القديمة</label>
                      <Input
                        className="form-control-alternative text-right"
                        id="old-password"
                        placeholder="كلمة المرور القديمة"
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="new-password">كلمة المرور الجديدة</label>
                      <Input
                        className="form-control-alternative text-right"
                        id="new-password"
                        placeholder="كلمة المرور الجديدة"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="confirm-password">تأكيد كلمة المرور الجديدة</label>
                      <Input
                        className="form-control-alternative text-right"
                        id="confirm-password"
                        placeholder="تأكيد كلمة المرور الجديدة"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
        <Button onClick={props.onHide} color="warning">خروج</Button>
        <Button color="primary" onClick={handleSubmit}>حفظ</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChangePass;
