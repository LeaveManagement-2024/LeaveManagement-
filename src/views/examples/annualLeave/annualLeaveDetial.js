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
import { useParams } from 'react-router-dom';
import AddGradeModal from '../parametre/grades/addGradeModal';
import EditGradeModal from '../parametre/grades/editGradeModal';
import Header from "components/Headers/Header.js";
import {
  getAllAnnualLeaveLine
} from './annualLeaveAPI'; 
 import "../../examples/style.css"
const AnnualLeaveDetial = () => {
  const [annualLeaveLines, setAnnualLeaveLines] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [message, setMessage] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editGrade, setEditGrade] = useState([])
  const {idan}  = useParams();
  useEffect(() => {
    fetchAllAnnualLeaveLine();
  }, []);

  const fetchAllAnnualLeaveLine = async () => {
    try {
      const data = await getAllAnnualLeaveLine();
      setAnnualLeaveLines(data);
    } catch (error) {
      console.error('Error fetching AnnualLeaveLines:', error);
    }
  };

  

 /* const handleDeleteGrade = async (idG) => {
    try {
      await deleteGrade(idG);
      setMessage('تم حذف الدرجة بنجاح');
      fetchAllGrades(); // Refresh the list
    } catch (error) {
      console.error('Error deleting grade:', error);
    }
  };*/

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = annualLeaveLines.slice(indexOfFirstItem, indexOfLastItem);
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
                    إضافة إطار
                  </Button>
                  <AddGradeModal show={modalShow} onHide={() => setModalShow(false)}></AddGradeModal>
                  <h3 className="mb-0">جدول  {idan}</h3>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light text-center text-lg">
                  <tr className=''>
                    <th scope="col" style={{color:'black',fontSize:'0.8em'}} >اسم الموظف  </th>
                    <th scope="col" style={{color:'black',fontSize:'0.8em'}} > N jour declarer  </th>
                    <th scope="col"  style={{color:'black',fontSize:'0.8em'}}> N jour restant  </th>
                    <th scope="col"  style={{color:'black',fontSize:'0.8em'}}> الإعدادات </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {currentItems.map((all) => (
                    <tr key={all.idGrade}>
                      <td  style={{color:'black',fontSize:'1em'}} >{all?.employee?.lastNameAr} {all?.employee?.firstNameAr}</td>
                      <td>
                        <div class="password">
                          <input maxlength="1" value={all.declaredDays} class="input" name="text" type="text" />
                        </div>
                        </td>
                      <td>
                      <div class="password">
                          <input maxlength="1" value={all.declaredDays} class="input" name="text" type="text" />
                        </div>
                        </td>
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
                            //  onClick={() => handleGetGradeById(all.idG)}
                            >
                              عرض
                            </DropdownItem>
                            <DropdownItem
                             // onClick={() => { setEditModalShow(true); setEditGrade(all); }}
                            >
                              تعديل
                            </DropdownItem>
                            <EditGradeModal 
                              show={editModalShow}
                              grade={editGrade} 
                              onHide={() => setEditModalShow(false)}
                            />
                            <DropdownItem
                             // onClick={() => handleDeleteGrade(all.idGrade)}
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
                    {Array.from({ length: Math.ceil(annualLeaveLines.length / itemsPerPage) }, (_, i) => (
                      <PaginationItem key={i + 1} className={currentPage === i + 1 ? 'active' : ''}>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => { e.preventDefault(); paginate(i + 1); }}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem className={currentPage === Math.ceil(annualLeaveLines.length / itemsPerPage) ? 'disabled' : ''}>
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

export default AnnualLeaveDetial;
