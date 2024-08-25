import React, { useState } from 'react';
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
// core components
import Header from "components/Headers/Header.js";
import AddLeaveModal from './addLeaveModal';
import EditLeaveModal from './editLeaveModal '

const data = [
  {
    project: 'Argon Design System',
    budget: '$2,500 USD',
    status: 'pending',
    statusColor: 'warning',
    users: [
      { name: 'Ryan Tompson', img: require("../../../assets/img/theme/team-1-800x800.jpg") },
      { name: 'Romina Hadid', img: require("../../../assets/img/theme/team-2-800x800.jpg") },
      { name: 'Alexander Smith', img: require("../../../assets/img/theme/team-3-800x800.jpg") },
      { name: 'Jessica Doe', img: require("../../../assets/img/theme/team-4-800x800.jpg") },
    ],
    completion: 60,
    completionColor: 'danger',
  },
  {
    project: 'Argon Design System',
    budget: '$2,500 USD',
    status: 'pending',
    statusColor: 'warning',
    users: [
      { name: 'Ryan Tompson', img: require("../../../assets/img/theme/team-1-800x800.jpg") },
      { name: 'Romina Hadid', img: require("../../../assets/img/theme/team-2-800x800.jpg") },
      { name: 'Alexander Smith', img: require("../../../assets/img/theme/team-3-800x800.jpg") },
      { name: 'Jessica Doe', img: require("../../../assets/img/theme/team-4-800x800.jpg") },
    ],
    completion: 60,
    completionColor: 'warning',
  },
  {
    project: 'Argon Design System',
    budget: '$2,500 USD',
    status: 'pending',
    statusColor: 'warning',
    users: [
      { name: 'Ryan Tompson', img: require("../../../assets/img/theme/team-1-800x800.jpg") },
      { name: 'Romina Hadid', img: require("../../../assets/img/theme/team-2-800x800.jpg") },
      { name: 'Alexander Smith', img: require("../../../assets/img/theme/team-3-800x800.jpg") },
      { name: 'Jessica Doe', img: require("../../../assets/img/theme/team-4-800x800.jpg") },
    ],
    completion: 60,
    completionColor: 'danger',
  },
  // Ajoutez plus de données ici
];

const Leave = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculer les indices de la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const [editModalShow, setEditModalShow] = useState(false);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Header />
      <Container className="mt--7" fluid style={{ direction: 'rtl' }}>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <Button  color="primary" onClick={() => setModalShow(true)}>
                  إضافة رخصة                 
                  </Button>
                  <AddLeaveModal show={modalShow} onHide={() => setModalShow(false)}></AddLeaveModal>
                  <h3 className="mb-0">جدول الرخص</h3>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light text-center">
                  <tr>
                    <th scope="col"> نوع الرخصة</th>
                    <th scope="col">   تاريخ مغادرة المنصب</th>
                    <th scope="col">  تاريخ استئناف العمل </th>
                    <th scope="col">  اسم القائم بالنياية </th>
                    <th scope="col">المسؤول عن النائب </th>
                    <th scope="col">رئيس المصلحة</th>
                    <th scope="col"> </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("../../../assets/img/theme/bootstrap.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              {item.project}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{item.budget}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className={`bg-${item.statusColor}`} />
                          {item.status}
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          {item.users.map((user, idx) => (
                            <a
                              key={idx}
                              className="avatar avatar-sm"
                              href="#pablo"
                              id={`tooltip${user.name.replace(/\s+/g, '')}`}
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={user.img}
                              />
                            </a>
                          ))}
                          {item.users.map((user, idx) => (
                            <UncontrolledTooltip
                              key={idx}
                              delay={0}
                              target={`tooltip${user.name.replace(/\s+/g, '')}`}
                            >
                              {user.name}
                            </UncontrolledTooltip>
                          ))}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">{item.completion}%</span>
                          <div>
                            <Progress
                              max="100"
                              value={item.completion}
                              barClassName={`bg-${item.completionColor}`}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
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
                              onClick={(e) => e.preventDefault()}
                            >
                              عرض
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={() => setEditModalShow(true)}
                            >
                               تعديل
                            </DropdownItem>
                           
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
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
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className={currentPage === 1 ? 'disabled' : ''}>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => { e.preventDefault(); paginate(currentPage - 1); }}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
                      <PaginationItem key={i + 1} className={currentPage === i + 1 ? 'active' : ''}>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => { e.preventDefault(); paginate(i + 1); }}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem className={currentPage === Math.ceil(data.length / itemsPerPage) ? 'disabled' : ''}>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => { e.preventDefault(); paginate(currentPage + 1); }}
                      >
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
