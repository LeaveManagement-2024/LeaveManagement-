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
import AddLeavePersonModal from './addLeavePersonModal';
import EditLeaveModal from './editLeaveModal ';
import {
  getAllLeavesByEmployee,
  getConfirmedLeavesByEmployee,
  getUnconfirmedLeavesByEmployee,
  getLeavesToConfirmByManager,
  getLeavesToConfirmByResponsible,
  getLeavesToConfirmByRemplacement,
  getListesLeavesToConfirm,
  getListesConfirmedLeaves,
} from '../Employess/employeeApi';
import { deleteLeave } from './LeaveApi';
import "../style.css"
const Leave = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [currentPage1, setCurrentPage1] = useState(1);
  const itemsPerPage1 = 5;
  const userId = localStorage.getItem('userId');
  const [leaves, setLeaves] = useState([]);
  const [listsleaves, setListsLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterOption, setFilterOption] = useState('all');
  const [filterOption1, setFilterOption1] = useState('confirmed');
  const [editModalShow, setEditModalShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [editLeave, setEditLeave] = useState([]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = leaves.slice(indexOfFirstItem, indexOfLastItem);
  const indexOfLastItem1 = currentPage1 * itemsPerPage1;
  const indexOfFirstItem1 = indexOfLastItem1 - itemsPerPage1;
  const currentItems1 = listsleaves.slice(indexOfFirstItem1, indexOfLastItem1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    fetchLeaves();
    fetchLeavesConfUnconf();
  }, [userId, filterOption,filterOption1]);

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
  const fetchLeavesConfUnconf = async () => {
    setLoading(true); // Start loading
    try {
      let response;
      switch (filterOption1) {
        case 'confirmed':
          response = await getListesConfirmedLeaves(userId);
          break;
        case 'unconfirmed':
          response = await getListesLeavesToConfirm(userId);
          break;
        default:
          response = await getListesLeavesToConfirm(userId);
          break;
      }
      setListsLeaves(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching leaves:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }
  
  const handleDeleteLeave = async (id) => {
    try {
      await deleteLeave(id);
      fetchLeaves();
    } catch (error) {
      console.error('Error deleting :', error);
    }
  };
  

  // Function to render badge based on visa status

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
                    <Dropdown.Item as="button" className='text-right text-lg' onClick={() => setFilterOption('all')}>
                      جميع الرخص
                    </Dropdown.Item>
                    <Dropdown.Item as="button" className='text-right text-lg' onClick={() => setFilterOption('confirmed')}>
                      الرخص الموافق عليها
                    </Dropdown.Item>
                    <Dropdown.Item as="button" className='text-right text-lg' onClick={() => setFilterOption('unconfirmed')}>
                      الرخص الغير موافق عليها
                    </Dropdown.Item>
                    <Dropdown.Item as="button" className='text-right text-lg' onClick={() => setFilterOption('manager')}>
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
                  <AddLeavePersonModal show={modalShow} onHide={() => setModalShow(false)} />
                  <h3 className="mb-0">جدول الرخص</h3>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light text-center">
                  <tr>
                    <th scope="col">نوع الرخصة</th>
                    <th scope="col">تاريخ مغادرة المنصب</th>
                    <th scope="col">تاريخ استئناف العمل</th>
                    <th scope="col">رئيس القسم</th>                   
                    <th scope="col">رئيس المصلحة</th>
                    <th scope="col">اسم القائم بالنياية</th>
                    <th scope="col">الإعدادات</th>
                  </tr>
                </thead>
                <tbody className="text-center">
  {currentItems.map((leave, index) => (
     <tr  
     
     key={index} 
     className={
       leave.managerVisa === 'true' ? 'manager-visa-true' : 
       leave.managerVisa === 'false' ? 'manager-visa-false' : ''
      
     }
   >
      <th scope="row">{leave?.leaveType?.name}</th>
      <td>{leave.startDate}</td>
      <td>{leave.endDate}</td>
      
      
      <td>
      {leave.lmanager?.lastNameAr} {leave.lmanager?.firstNameAr}
        <Badge color={leave.managerVisa === 'true' ? 'success' : leave.managerVisa === 'false' ? 'warning' : 'secondary'} style={{marginRight:'15px'}} >
          {leave.managerVisa === 'true' ? (
            <i className="fas fa-check fa-2x"></i>
          ) : leave.managerVisa === 'false' ? (
            <i className="fas fa-exclamation fa-2x"></i>
          ) : (
            'غير محدد'
          )}
        </Badge>
      </td>
      <td>
      {leave.responsible?.lastNameAr} {leave.responsible?.firstNameAr}
        <Badge color={leave.responsibleVisa === 'true' ? 'success' : leave.responsibleVisa === 'false' ? 'warning' : 'secondary'} style={{marginRight:'15px'}}>
          {leave.responsibleVisa === 'true' ? (
            <i className="fas fa-check fa-2x "></i>
          ) : leave.responsibleVisa === 'false' ? (
            <i className="fas fa-exclamation fa-2x"></i>
          ) : (
            'غير محدد'
          )}
        </Badge>
        
      </td>
      <td>
      {leave.replacement?.lastNameAr} {leave.replacement?.firstNameAr}
        <Badge color={leave.remplecementVisa === 'true' ? 'success' : leave.remplecementVisa === 'false' ? 'warning' : 'secondary'} style={{marginRight:'15px'}}>
          {leave.remplecementVisa === 'true' ? (
            <i className="fas fa-check fa-2x"></i>
          ) : leave.remplecementVisa === 'false' ? (
            <i className="fas fa-exclamation fa-2x"></i>
          ) : (
            'غير محدد'
          )}
        
        </Badge> 
        
      </td>
      <td>
        <UncontrolledDropdown >
          <DropdownToggle className="btn-icon-only text-light" href="#pablo" role="button" size="sm" color="" onClick={(e) => e.preventDefault()}
            disabled={leave.managerVisa === 'true'} >
            <i className="fas fa-ellipsis-v text-dark" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
              عرض
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={() => {
              setEditModalShow(true);
              setEditLeave(leave);
            }}>
              تعديل
            </DropdownItem>
            <EditLeaveModal
              show={editModalShow}
              leave={editLeave}
              onHide={() => { setEditModalShow(false); }}
            />
            <DropdownItem href="#pablo" onClick={() => handleDeleteLeave(leave.leaveId)}>
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



        <Row className="mt-5">
          <div className="col">
            <Card className=" bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <DropdownButton id="dropdown-item-button "  title="اختيارات اخرى">
                    
                    <Dropdown.Item as="button" className='text-right text-lg' onClick={() => setFilterOption1('confirmed')}>
                      الرخص الموافق عليها
                    </Dropdown.Item>
                    <Dropdown.Item as="button" className='text-right text-lg' onClick={() => setFilterOption1('unconfirmed')}>
                      الرخص الغير موافق عليها
                    </Dropdown.Item>
                
                  </DropdownButton>
                  
                  <h3 className="mb-0 text-white  ">جدول الرخص</h3>
                </div>
              </CardHeader>
              <Table className="align-items-center  table-dark table-flush" responsive>
                <thead className="text-center thead-dark">
                  <tr>
                    <th scope="col" > اسم الموظف</th>
                    <th scope="col">تاريخ مغادرة المنصب</th>
                    <th scope="col">تاريخ استئناف العمل</th>
                    <th scope="col">رئيس القسم</th>                   
                    <th scope="col">رئيس المصلحة</th>
                    <th scope="col">اسم القائم بالنياية</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody className="text-center">
  {currentItems1.map((leave, index) => (
     <tr  
     
    
   >
      <th scope="row">{leave?.employee?.lastNameAr} {leave?.employee?.firstNameAr}</th>
      <td>{leave.startDate}</td>
      <td>{leave.endDate}</td>
      
      
      <td>
      {leave.lmanager?.lastNameAr} {leave.lmanager?.firstNameAr}
        <Badge color={leave.managerVisa === 'true' ? 'success' : leave.managerVisa === 'false' ? 'warning' : 'secondary'} style={{marginRight:'15px'}} >
          {leave.managerVisa === 'true' ? (
            <i className="fas fa-check fa-2x"></i>
          ) : leave.managerVisa === 'false' ? (
            <i className="fas fa-exclamation fa-2x"></i>
          ) : (
            'غير محدد'
          )}
        </Badge>
      </td>
      <td>
      {leave.responsible?.lastNameAr} {leave.responsible?.firstNameAr}
        <Badge color={leave.responsibleVisa === 'true' ? 'success' : leave.responsibleVisa === 'false' ? 'warning' : 'secondary'} style={{marginRight:'15px'}}>
          {leave.responsibleVisa === 'true' ? (
            <i className="fas fa-check fa-2x "></i>
          ) : leave.responsibleVisa === 'false' ? (
            <i className="fas fa-exclamation fa-2x"></i>
          ) : (
            'غير محدد'
          )}
        </Badge>
        
      </td>
      <td>
      {leave.replacement?.lastNameAr} {leave.replacement?.firstNameAr}
        <Badge color={leave.remplecementVisa === 'true' ? 'success' : leave.remplecementVisa === 'false' ? 'warning' : 'secondary'} style={{marginRight:'15px'}}>
          {leave.remplecementVisa === 'true' ? (
            <i className="fas fa-check fa-2x"></i>
          ) : leave.remplecementVisa === 'false' ? (
            <i className="fas fa-exclamation fa-2x"></i>
          ) : (
            'غير محدد'
          )}
        
        </Badge> 
        
      </td>
      <td>
      
<div class="checkbox-wrapper-12">
  <div class="cbx">
    <input id="cbx-12" type="checkbox" checked="" />
    <label for="cbx-12"></label>
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
      <path d="M2 8.36364L6.23077 12L13 2"></path>
    </svg>
  </div>

  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="goo-12">
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="4"
          result="blur"
        ></feGaussianBlur>
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
          result="goo-12"
        ></feColorMatrix>
        <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
      </filter>
    </defs>
  </svg>
</div>

      </td>
    </tr>
  ))}
</tbody>
              </Table>
              <CardFooter className="py-4 bg-default shadow">
                <nav aria-label="...">
                  <Pagination className="pagination justify-content-end mb-0" listClassName="justify-content-end mb-0">
                    <PaginationItem className={currentPage1 === 1 ? 'disabled' : ''}>
                      <PaginationLink href="#pablo" onClick={(e) => { e.preventDefault(); paginate(currentPage1 - 1); }}>
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    {Array.from({ length: Math.ceil(leaves.length / itemsPerPage1) }, (_, i) => (
                      <PaginationItem key={i + 1} className={currentPage1 === i + 1 ? 'active' : ''}>
                        <PaginationLink href="#pablo" onClick={(e) => { e.preventDefault(); paginate(i + 1); }}>
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem className={currentPage1 === Math.ceil(leaves.length / itemsPerPage1) ? 'disabled' : ''}>
                      <PaginationLink href="#pablo" onClick={(e) => { e.preventDefault(); paginate(currentPage1 + 1); }}>
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
