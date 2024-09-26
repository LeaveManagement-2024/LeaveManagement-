import Modal from 'react-bootstrap/Modal';
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
import axios from 'axios';
import { getAllLeaveTypes } from "../parametre/leave_type/leaveTypeApi";
import { getAllEmployees, getFilirerByEmployee } from "../Employess/employeeApi";
import { getAllAnnualLeave } from "../annualLeave/annualLeaveAPI";
import {getLeaveById} from "./LeaveApi"
import { useEffect, useState } from 'react';

const EditLeaveModal = (props) => {
  const [leavetypes, setLeaveType] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [anuualLeaves, setAnuualLeaves] = useState([]);
  const [filiere, setFiliere] = useState(null);
  const [annualLeaveId, setAnnualLeaveId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [leaveTypeId, setLeaveTypeId] = useState('');
  const [replacementId, setReplacementId] = useState('');
  const [lmanagerId, setLmanagerId] = useState('');
  const [responsible, setResponsible] = useState('');
  const userId = localStorage.getItem('userId');
  const [employeeId, setEmployeeId] = useState('');
  const [leave,setLeave] = useState('');

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  const fetchAllLeaveTypes = async () => {
    try {
      const leavetypeData = await getAllLeaveTypes();
      setLeaveType(leavetypeData);
    } catch (error) {
      console.error('Error fetching leave types:', error);
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

  const fetchFiliere = async () => {
    try {
      const data = await getFilirerByEmployee(userId);
      setFiliere(data);
      setResponsible(data?.service?.respService?.idE);
      setLmanagerId(data?.service?.departement?.respDepartement?.idE);
    } catch (error) {
      console.error('Error fetching filiere:', error);
    }
  };

  const fetchAllAnnualLeave = async () => {
    try {
      const data = await getAllAnnualLeave();
      setAnuualLeaves(data);
    } catch (error) {
      console.error('Error fetching annual leaves:', error);
    }
  };
  const fetchLeaveById = async (id) => {
    try {
      const data = await getLeaveById(id);
      
      setStartDate(data.startDate);
      setEndDate(data.endDate);
      setLeaveTypeId(data?.leaveType?.leaveTypeId);
      setEmployeeId(data?.employee?.idE);
      setResponsible(data?.responsible?.idE);
      setLmanagerId(data?.lmanager?.idE);
      setAnnualLeaveId(data?.annualLeave?.annualLeaveId);
      setReplacementId(data?.replacement?.idE);
    } catch (error) {
      console.error('Error fetching annual leaves:', error);
    }
  };

  useEffect(() => {
    fetchAllLeaveTypes();
    fetchAllEmployees();
    fetchAllAnnualLeave();
    fetchFiliere();
    fetchLeaveById(props.leave.leaveId);
  }, [props.leave.leaveId]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'annualLeaveId':
        setAnnualLeaveId(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
      case 'endDate':
        setEndDate(value);
        break;
      case 'employeeId':
        setEmployeeId(value);
        break;
      case 'responsible':
        setResponsible(value);
        break;
      case 'leaveTypeId':
        setLeaveTypeId(value);
        break;
      case 'replacementId':
        setReplacementId(value);
        break;
      case 'lmanagerId':
        setLmanagerId(value);
        break;
      default:
        break;
    }
  };

  // Validation function
  const validate = () => {
    let tempErrors = {};
  
    // Obtenir la date d'aujourd'hui sans l'heure
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    if (!startDate) {
      tempErrors.startDate = "يرجى إدخال تاريخ مغادرة العمل";
    } else if (new Date(startDate) <= today) {
      tempErrors.startDate = "يجب أن يكون تاريخ المغادرة بعد تاريخ اليوم";
    }
  
    if (!endDate) {
      tempErrors.endDate = "يرجى إدخال تاريخ استئناف العمل";
    } else if (startDate && endDate && new Date(startDate) >= new Date(endDate)) {
      tempErrors.endDate = "يجب أن يكون تاريخ الاستئناف بعد تاريخ المغادرة";
    }
  
    if (!leaveTypeId) {
      tempErrors.leaveTypeId = "يرجى اختيار نوع الرخصة";
    }
  
    if (!replacementId) {
      tempErrors.replacementId = "يرجى اختيار اسم النائب";
    }
  
    if (!annualLeaveId) {
      tempErrors.annualLeaveId = "يرجى اختيار السنة الإدارية";
    }
  
    setErrors(tempErrors);
  
    return Object.keys(tempErrors).length === 0;
  };

  const handleEditLeave = async () => {
    if (validate()) {
      try {
        const leavetData = {
          startDate,
          endDate,
          employeeId : userId,
          annualLeaveId,
          leaveTypeId,
          replacementId,
          lmanagerId: filiere?.service?.departement?.respDepartement?.idE,
          responsible: filiere?.service?.respService?.idE,
        };

        await axios({
          method: 'put',
          url: `http://192.168.1.10:8093/leave/update/${props.leave.leaveId}`,
          data: leavetData,
        }).then((response) => {
          console.log(response.data);
          window.location.reload();
        });
      } catch (error) {
        console.error('Error adding leave:', error);
      }
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
            <Card className="bg-secondary shadow ">
              <CardHeader className="bg-white border-0">
              <h4 className='text-center text-xl'>  تعديل الرخصة الادارية</h4>
              </CardHeader>
              <CardBody>
            <Form>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="input-first-name">
                        اسم النائب
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="replacementId"
                        placeholder="اسم النائب"
                        type="select"
                        value={replacementId}
                        onChange={handleChange}
                      >
                        <option value="">اختر اسم النائب</option>
                        {employees.length > 0 && employees.map((emp) => (
                          <option key={emp.idE} value={emp.idE}>
                            {emp.lastNameAr} {emp.firstNameAr}
                          </option>
                        ))}
                      </Input>
                      {errors.replacementId && <div className="text-danger">{errors.replacementId}</div>}
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="input-last-name">
                        نوع الرخصة
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="leaveTypeId"
                        placeholder="...رخصة مرضية،رخصة ولادة"
                        type="select"
                        value={leaveTypeId}
                        onChange={handleChange}
                      >
                        <option value="">اختر نوع الرخصة</option>
                        {leavetypes.length > 0 && leavetypes.map((lt) => (
                          <option key={lt.leaveTypeId} value={lt.leaveTypeId}>
                            {lt.name}
                          </option>
                        ))}
                      </Input>
                      {errors.leaveTypeId && <div className="text-danger">{errors.leaveTypeId}</div>}
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
                        id="endDate"
                        placeholder="تاريخ استئناف العمل"
                        type="date"
                        value={endDate}
                        onChange={handleChange}
                      />
                      {errors.endDate && <div className="text-danger">{errors.endDate}</div>}
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup className="text-right">
                      <label className="form-control-label text-left">
                        تاريخ مغادرة العمل
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="startDate"
                        placeholder="تاريخ مغادرة العمل"
                        type="date"
                        value={startDate}
                        onChange={handleChange}
                      />
                      {errors.startDate && <div className="text-danger">{errors.startDate}</div>}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <FormGroup className="text-right">
                      <label className="form-control-label" htmlFor="annualLeaveId">
                        السنة الادارية
                      </label>
                      <Input
                        className="form-control-alternative text-right"
                        id="annualLeaveId"
                        placeholder="السنة الادارية"
                        type="select"
                        value={annualLeaveId}
                        onChange={handleChange}
                      >
                        <option value="">اختر السنة الادارية</option>
                        {anuualLeaves.length > 0 && anuualLeaves.map((al) => (
                          <option key={al.annualLeaveId} value={al.annualLeaveId}>
                            {al.label}
                          </option>
                        ))}
                      </Input>
                      {errors.annualLeaveId && <div className="text-danger">{errors.annualLeaveId}</div>}
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Form>
          </CardBody>
            </Card>
          
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center" >
       
          <Button onClick={props.onHide}>خروج</Button>
          <Button variant="primary" onClick={handleEditLeave} >
          تعديل
          </Button>
          
        </Modal.Footer>
      </Modal>
      
    );
  };
  export default EditLeaveModal;