import React, { useState, useEffect } from 'react';
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
  Table,
  Container,
  Row,
  Button,
  CardBody,
} from "reactstrap";
import AddLeaveTypeModal from './addLeaveTypeModal'; // Import the AddLeaveTypeModal component
import EditLeaveTypeModal from './editLeaveTypeModal'; // Import the EditLeaveTypeModal component
import Header from "components/Headers/Header.js";
import {
  getAllLeaveTypes,
  getLeaveTypeById,
  deleteLeaveType,
} from './leaveTypesApi'; // Assuming you have an API utility for leave types

const LeaveTypes = () => {
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [leaveType, setLeaveType] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [message, setMessage] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editLeaveType, setEditLeaveType] = useState({})

  useEffect(() => {
    fetchAllLeaveTypes();
  }, [leaveType]);

  const fetchAllLeaveTypes = async () => {
    try {
      const data = await getAllLeaveTypes();
      setLeaveTypes(data);
    } catch (error) {
      console.error('Error fetching leave types:', error);
    }
  };

  const handleGetLeaveTypeById = async (idLT) => {
    try {
      const data = await getLeaveTypeById(idLT);
      setLeaveType(data);
    } catch (error) {
      console.error('Error fetching leave type:', error);
    }
  };

  const handleDeleteLeaveType = async (idLT) => {
    try {
      await deleteLeaveType(idLT);
      setMessage('تم حذف نوع الإجازة بنجاح');
      fetchAllLeaveTypes(); // Refresh the list
    } catch (error) {
      console.error('Error deleting leave type:', error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = leaveTypes.slice(indexOfFirstItem, indexOfLastItem);
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
                    إضافة نوع إجازة
                  </Button>
                  <AddLeaveTypeModal show={modalShow} onHide={() => setModalShow(false)}></AddLeaveTypeModal>
                  <h3 className="mb-0">جدول أنواع الإجازة</h3>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light text-center text-lg">
                  <tr className=''>
                    <th scope="col" className='text-lg'>اسم نوع الإجازة</th>
                    <th scope="col" className="text-lg text-uppercase">Nom du type de congé</th>
                    <th scope="col" className='text-lg'>الإعدادات</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {currentItems.map((lt) => (
                    <tr key={lt.idLeaveType}>
                      <td>{lt.leaveTypeNameAr}</td>
                      <td>{lt.leaveTypeNameFr}</td>
                      <td >
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="md"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              onClick={() => handleGetLeaveTypeById(lt.idLeaveType)}
                            >
                              عرض
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => { setEditModalShow(true); setEditLeaveType(lt); }}
                            >
                              تعديل
                            </DropdownItem>
                            <EditLeaveTypeModal 
                              show={editModalShow}
                              leaveType={editLeaveType} 
                              onHide={() => setEditModalShow(false)}
                            />
                            <DropdownItem
                              onClick={() => handleDeleteLeaveType(lt.idLeaveType)}
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
                    {Array.from({ length: Math.ceil(leaveTypes.length / itemsPerPage) }, (_, i) => (
                      <PaginationItem key={i + 1} className={currentPage === i + 1 ? 'active' : ''}>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => { e.preventDefault(); paginate(i + 1); }}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem className={currentPage === Math.ceil(leaveTypes.length / itemsPerPage) ? 'disabled' : ''}>
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
      </Container>
    </>
  );
};

export default LeaveTypes;
