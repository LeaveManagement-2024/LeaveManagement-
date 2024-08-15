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
import AddServiceModal from './addServiceModal';
import EditServiceModal from './editServiceModal';
import Header from "components/Headers/Header.js";
import {
  getAllServices,
  getServiceById,
  deleteService,
} from './serviceApi'; 

const Services = () => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [message, setMessage] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editService, setEditService] = useState([])

  useEffect(() => {
    fetchAllServices();
  }, [service]);

  const fetchAllServices = async () => {
    try {
      const data = await getAllServices();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleGetServiceById = async (id) => {
    try {
      const data = await getServiceById(id);
      setService(data);
    } catch (error) {
      console.error('Error fetching service:', error);
    }
  };

  const handleDeleteService = async (id) => {
    try {
      await deleteService(id);
      setMessage('تم حذف الخدمة بنجاح');
      fetchAllServices(); // Refresh the list
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = services.slice(indexOfFirstItem, indexOfLastItem);
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
                    إضافة خدمة
                  </Button>
                  <AddServiceModal show={modalShow} onHide={() => setModalShow(false)}></AddServiceModal>
                  <h3 className="mb-0">جدول الخدمات</h3>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light text-center">
                  <tr>
                    <th scope="col">Service Name</th>
                    <th scope="col">اسم الخدمة</th>
                    <th scope="col">Description</th>
                    <th scope="col">الوصف</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {currentItems.map((service) => (
                    <tr key={service.id}>
                      <td>{service.nameAr}</td>
                      <td>{service.nameEn}</td>
                      <td>{service.descriptionAr}</td>
                      <td>{service.descriptionEn}</td>
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
                              onClick={() => handleGetServiceById(service.id)}
                            >
                              عرض
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => { setEditModalShow(true); setEditService(service); }}
                            >
                              تعديل
                            </DropdownItem>
                            <EditServiceModal 
                              show={editModalShow}
                              service={editService} 
                              onHide={() => setEditModalShow(false)}
                            />
                            <DropdownItem
                              onClick={() => handleDeleteService(service.id)}
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
                    {Array.from({ length: Math.ceil(services.length / itemsPerPage) }, (_, i) => (
                      <PaginationItem key={i + 1} className={currentPage === i + 1 ? 'active' : ''}>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => { e.preventDefault(); paginate(i + 1); }}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem className={currentPage === Math.ceil(services.length / itemsPerPage) ? 'disabled' : ''}>
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

export default Services;
