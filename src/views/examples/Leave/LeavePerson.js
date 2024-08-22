import React, { useState,useEffect } from 'react';
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
  Button,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  
} from "reactstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// core components
import Header from "components/Headers/Header.js";
import AddLeaveModal from './addLeaveModal';
import EditLeaveModal from './editLeaveModal '
import {
  getAllLeavesByEmployee,
  getConfirmedLeavesByEmployee,
  getUnconfirmedLeavesByEmployee,
  getLeavesToConfirmByManager,
  getLeavesToConfirmByResponsible,
  getLeavesToConfirmByRemplacement,
} from '../Employess/employeeApi';

const Leave = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const userId = localStorage.getItem('userId');
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterOption, setFilterOption] = useState('all');
  const [editModalShow, setEditModalShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = leaves.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchLeaves();
  }, [userId, filterOption]);

  const fetchLeaves = async () => {
    setLoading(true); // Start loading
    try {
      let response;
      switch (filterOption) {
        case 'all':
          response = await getAllLeavesByEmployee(userId);
          break;
        case 'confirmed':
          response = await getConfirmedLeavesByEmployee(userId);
          break;
        case 'unconfirmed':
          response = await getUnconfirmedLeavesByEmployee(userId);
          break;
        case 'manager':
          response = await getLeavesToConfirmByManager(userId);
          break;
        case 'responsible':
          response = await getLeavesToConfirmByResponsible(userId);
          break;
        case 'replacement':
          response = await getLeavesToConfirmByRemplacement(userId);
          break;
        default:
          response = await getAllLeavesByEmployee(userId);
          break;
      }
      setLeaves(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching leaves:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return (
    <>
      <Header />
      <Container className="mt--7" fluid style={{ direction: 'rtl' }}>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <DropdownButton id="dropdown-item-button "  title="اختيارات اخرى">
                    <Dropdown.Item as="button"className='text-right text-lg' onClick={() => setFilterOption('all')}>
                      جميع الرخص
                    </Dropdown.Item>
                    <Dropdown.Item as="button" className='text-right text-lg' onClick={() => setFilterOption('confirmed')}>
                      الرخص الموافق عليها
                    </Dropdown.Item>
                    <Dropdown.Item as="button" className='text-right text-lg' onClick={() => setFilterOption('unconfirmed')}>
                      الرخص الغير موافق عليها
                    </Dropdown.Item>
                    <Dropdown.Item as="button"className='text-right text-lg' onClick={() => setFilterOption('manager')}>
                      الرخص الغير موافق عليها من طرف رئيس القسم
                    </Dropdown.Item>
                    <Dropdown.Item as="button"  className='text-right text-lg' onClick={() => setFilterOption('responsible')}>
                      الرخص الغير موافق عليها من طرف رئيس المصلحة
                    </Dropdown.Item>
                    <Dropdown.Item as="button" className='text-right text-lg' onClick={() => setFilterOption('replacement')}>
                      الرخص الغير موافق عليها من طرف النائب 
                    </Dropdown.Item>
                  </DropdownButton>
                  <Button color="primary" onClick={() => setModalShow(true)}>
                    طلب رخصة
                  </Button>
                  <AddLeaveModal show={modalShow} onHide={() => setModalShow(false)} />
                  <h3 className="mb-0">جدول الرخص</h3>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light text-center">
                  <tr>
                    <th scope="col">نوع الرخصة</th>
                    <th scope="col">تاريخ مغادرة المنصب</th>
                    <th scope="col">تاريخ استئناف العمل</th>
                    <th scope="col">اسم القائم بالنياية</th>
                    <th scope="col">رئيس المصلحة</th>
                    <th scope="col">رئيس القسم</th>
                    <th scope="col">الإعدادات</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {currentItems.map((leave, index) => (
                    <tr key={index}>
                      <th scope="row">{leave?.leaveType?.name}</th>
                      <td>{leave.startDate}</td>
                      <td>{leave.endDate}</td>
                      <td>{leave.replacement?.lastNameAr} {leave.replacement?.firstNameAr}</td>
                      <td>{leave.lmanager?.lastNameAr} {leave.lmanager?.firstNameAr}</td>
                      <td>{leave.responsible?.lastNameAr} {leave.responsible?.firstNameAr}</td>
                      <td>
                        <UncontrolledDropdown>
                          <DropdownToggle className="btn-icon-only text-light" href="#pablo" role="button" size="sm" color="" onClick={(e) => e.preventDefault()}>
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                              عرض
                            </DropdownItem>
                            <DropdownItem href="#pablo" onClick={() => setEditModalShow(true)}>
                              تعديل
                            </DropdownItem>
                            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                              حذف
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination className="pagination justify-content-end mb-0" listClassName="justify-content-end mb-0">
                    <PaginationItem className={currentPage === 1 ? 'disabled' : ''}>
                      <PaginationLink href="#pablo" onClick={(e) => { e.preventDefault(); paginate(currentPage - 1); }}>
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    {Array.from({ length: Math.ceil(leaves.length / itemsPerPage) }, (_, i) => (
                      <PaginationItem key={i + 1} className={currentPage === i + 1 ? 'active' : ''}>
                        <PaginationLink href="#pablo" onClick={(e) => { e.preventDefault(); paginate(i + 1); }}>
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem className={currentPage === Math.ceil(leaves.length / itemsPerPage) ? 'disabled' : ''}>
                      <PaginationLink href="#pablo" onClick={(e) => { e.preventDefault(); paginate(currentPage + 1); }}>
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Leave;