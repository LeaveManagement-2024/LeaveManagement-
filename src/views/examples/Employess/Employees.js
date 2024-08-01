import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,
  Col,
  Input,
  FormGroup,
  CardBody,
} from "reactstrap";
import AddEmployeeModal from './addEmployeeModal';
import Header from "components/Headers/Header.js";
import {
  loginEmployee,
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getManagerByIdEmp,
  getResponsibleByIdEmp
} from './employeeApi'; 


const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});
  const [logInDTO, setLogInDTO] = useState({ email: '', password: '' });
  const [employeeDTO, setEmployeeDTO] = useState({
    firstNameFr: '',
    firstNameAr: '',
    lastNameFr: '',
    lastNameAr: '',
    email: '',
    password: '',
    phone: '',
    ppr: '',
    cin: '',
    addressFr: '',
    addressAr: '',
    hireDate: '',
    workLocationFr: '',
    workLocationAr: '',
    image: null,
    postId: '',
    gradeId: '',
    profileId: '',
    managerId: '',
    responsibleId: '',
    filiereId: ''
  });
  const [employeeId, setEmployeeId] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [message, setMessage] = useState('');
  const [modalShow, setModalShow] = useState(false);


  useEffect(() => {
    fetchAllEmployees();
  }, []);

  const fetchAllEmployees = async () => {
    try {
      const data = await getAllEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await loginEmployee(logInDTO);
      setMessage(response.message);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleAddEmployee = async () => {
    try {
      const response = await addEmployee(employeeDTO);
      setMessage(`تم إضافة الموظف برقم: ${response}`);
      fetchAllEmployees(); // Refresh the list
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleGetEmployeeById = async () => {
    try {
      const data = await getEmployeeById(employeeId);
      setEmployee(data);
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };

  const handleUpdateEmployee = async () => {
    try {
      await updateEmployee(employeeId, employeeDTO);
      setMessage('تم تحديث الموظف بنجاح');
      fetchAllEmployees(); // Refresh the list
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleDeleteEmployee = async (idE) => {
    try {
      
      await deleteEmployee(idE);
      setMessage('تم حذف الموظف بنجاح');
      fetchAllEmployees(); // Refresh the list
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleGetManagerByIdEmp = async () => {
    try {
      const data = await getManagerByIdEmp(employeeId);
      setEmployee(data);
    } catch (error) {
      console.error('Error fetching manager:', error);
    }
  };

  const handleGetResponsibleByIdEmp = async () => {
    try {
      const data = await getResponsibleByIdEmp(employeeId);
      setEmployee(data);
    } catch (error) {
      console.error('Error fetching responsible:', error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <Container className="mt--7" fluid style={{ direction: 'rtl' }}>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <Button color="primary" onClick={() => setModalShow(true)}>
                    إضافة موظف
                  </Button>
                  <AddEmployeeModal show={modalShow} onHide={() => setModalShow(false)}></AddEmployeeModal>
                  <h3 className="mb-0">جدول الموظفين</h3>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light text-center">
                  <tr>
                    <th scope="col">الاسم الكامل</th>
                    <th scope="col">الاطار</th>
                    <th scope="col">الشعبة</th>
                    <th scope="col">رقم البطاقة الوطنية</th>
                    <th scope="col">البريد الإلكتروني</th>
                    <th scope="col">الهاتف</th>
                    <th scope="col">العنوان الشخصي</th>
                    <th scope="col">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {currentItems.map((emp) => (
                    <tr key={emp.idE}>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={emp.image}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm mx-3">
                              {emp.firstNameAr} {emp.lastNameAr}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{emp?.grade?.gradeNameAr}</td>
                      <td>{emp?.filiere?.filiereNameAr}</td>
                      <td>
                        {emp.cin}
                      </td>
                      <td>
                        {emp.email}
                      </td>
                      <td>
                        {emp.phone}
                      </td>
                      <td>
                        {emp.addressAr}
                      </td>
                      <td >
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={() => handleGetEmployeeById(emp.idE)}
                            >
                              عرض
                            </DropdownItem>
                            <DropdownItem
                              
                              onClick={() => handleUpdateEmployee(emp.idE)}
                            >
                              تعديل
                            </DropdownItem>
                            <DropdownItem
                              
                              onClick={() => handleDeleteEmployee(emp.idE)}
                            >
                              حذف
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 text-right">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-start mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className={currentPage === 1 ? 'disabled' : ''}>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => { e.preventDefault(); paginate(currentPage - 1); }}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">السابق</span>
                      </PaginationLink>
                    </PaginationItem>
                    {Array.from({ length: Math.ceil(employees.length / itemsPerPage) }, (_, i) => (
                      <PaginationItem key={i + 1} className={currentPage === i + 1 ? 'active' : ''}>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => { e.preventDefault(); paginate(i + 1); }}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem className={currentPage === Math.ceil(employees.length / itemsPerPage) ? 'disabled' : ''}>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => { e.preventDefault(); paginate(currentPage + 1); }}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">التالي</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        {/* مثال لنموذج لإضافة/تحديث الموظفين */}
        
      </Container>
    </>
  );
};

export default Employees;
