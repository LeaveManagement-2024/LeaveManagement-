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
import AddPublicHolidayModal from './addPublicHolidayModal';
import EditPublicHolidayModal from './editPublicHollidayModal';
import Header from "components/Headers/Header.js";
import {
  getAllPublicHolidays,
  getPublicHolidayById,
  deletePublicHoliday,
} from './public_holidayApi'; 

const PublicHolidays = () => {
  const [publicHolidays, setPublicHolidays] = useState([]);
  const [publicHoliday, setPublicHoliday] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [message, setMessage] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editPublicHoliday, setEditPublicHoliday] = useState([])

  useEffect(() => {
    fetchAllPublicHolidays();
  }, [publicHoliday]);

  const fetchAllPublicHolidays = async () => {
    try {
      const data = await getAllPublicHolidays();
      setPublicHolidays(data);
    } catch (error) {
      console.error('Error fetching public holidays:', error);
    }
  };

  const handleGetPublicHolidayById = async (id) => {
    try {
      const data = await getPublicHolidayById(id);
      setPublicHoliday(data);
    } catch (error) {
      console.error('Error fetching public holiday:', error);
    }
  };

  const handleDeletePublicHoliday = async (id) => {
    try {
      await deletePublicHoliday(id);
      setMessage('تم حذف العطلة الرسمية بنجاح');
      fetchAllPublicHolidays(); // Refresh the list
    } catch (error) {
      console.error('Error deleting public holiday:', error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = publicHolidays.slice(indexOfFirstItem, indexOfLastItem);
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
                    إضافة عطلة رسمية
                  </Button>
                  <AddPublicHolidayModal show={modalShow} onHide={() => setModalShow(false)}></AddPublicHolidayModal>
                  <h3 className="mb-0">جدول العطل الرسمية</h3>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light text-center">
                  <tr>
                    <th scope="col">Public Holiday Name</th>
                    <th scope="col">اسم العطلة الرسمية</th>
                    <th scope="col">Date</th>
                    <th scope="col">التاريخ</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {currentItems.map((holiday) => (
                    <tr key={holiday.id}>
                      <td>{holiday.nameAr}</td>
                      <td>{holiday.nameEn}</td>
                      <td>{holiday.date}</td>
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
                              onClick={() => handleGetPublicHolidayById(holiday.id)}
                            >
                              عرض
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => { setEditModalShow(true); setEditPublicHoliday(holiday); }}
                            >
                              تعديل
                            </DropdownItem>
                            <EditPublicHolidayModal 
                              show={editModalShow}
                              publicHoliday={editPublicHoliday} 
                              onHide={() => setEditModalShow(false)}
                            />
                            <DropdownItem
                              onClick={() => handleDeletePublicHoliday(holiday.id)}
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
                    {Array.from({ length: Math.ceil(publicHolidays.length / itemsPerPage) }, (_, i) => (
                      <PaginationItem key={i + 1} className={currentPage === i + 1 ? 'active' : ''}>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => { e.preventDefault(); paginate(i + 1); }}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem className={currentPage === Math.ceil(publicHolidays.length / itemsPerPage) ? 'disabled' : ''}>
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

export default PublicHolidays;

