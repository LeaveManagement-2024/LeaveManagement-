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
import { getAllLeaveTypes } from "../parametre/leave_type/leaveTypeApi";
import{getAllEmployees}from "../Employess/employeeApi"
import { useEffect, useState } from 'react';

const AddLeaveModal = (props) => {
  const [leavetypes, setLeaveType] = useState([]);
  const [employees, setEmployees] = useState([]);

  // Correct placement of the function
  const fetchAllLeaveTypes = async () => {
    try {
      const leavetypeData = await getAllLeaveTypes();
      setLeaveType(leavetypeData);
    } catch (error) {
      console.error('Erreur lors de la récupération des types de congé:', error);
    }
  };
  const fetchAllEmployees = async () => {
    try {
      const data = await getAllEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchAllLeaveTypes();
    fetchAllEmployees();
  }, []);

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
            <h4 className='text-center text-xl'>الرخصة الادارية الشخصية</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-right mb-4" style={{ fontSize: '1.5em' }}>
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="input-first-name">
                        اسم النائب 
                      </label>
                      <Input
                        className="form-control-alternative text-right"                           
                        id="input-first-name"
                        placeholder="اسم النائب"
                        type="select"
                      >
                         <option value="">اختر اسم النائب</option>
                         {employees.length > 0 && employees.map((emp) => (
                          <option key={emp.idE} value={emp.idE}>
                            {emp.lastNameAr} {emp.firstNameAr}
                          </option>
                        ))}
                        
                        </Input>
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="input-last-name">
                        نوع الرخصة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="input-last-name"
                        placeholder="...رخصة مرضية،رخصة ولادة"
                        type="select"
                      >
                        <option value="">اختر نوع الرخصة</option>
                        {leavetypes.length > 0 && leavetypes.map((lt) => (
                          <option key={lt.leaveTypeId} value={lt.leaveTypeId}>
                            {lt.name}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="input-username">
                        تاريخ استئناف العمل
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="input-username"
                        placeholder="تاريخ استئناف العمل"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label text-left" htmlFor="input-email">
                        تاريخ مغادرة العمل
                      </label>
                      <Input 
                        className="form-control-alternative text-right"
                        id="input-text"
                        placeholder="تاريخ مغادرة العمل"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="input-first-name">
                        المسؤول عن النائب 
                      </label>
                      <Input 
                        className="form-control-alternative text-right"
                        id="input-first-name"
                        placeholder="المسؤول عن النائب"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="input-last-name">
                        رئيس المصلحة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="input-last-name"
                        placeholder="رئيس المصلحة"
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
        <Button variant="primary">
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddLeaveModal;
