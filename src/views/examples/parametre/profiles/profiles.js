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
import AddProfileModal from './addProfileModal';
import EditProfileModal from './editProfileModal';
import Header from "components/Headers/Header.js";
import {
  getAllProfiles,
  getProfileById,
  deleteProfile,
} from './profileApi'; 

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [profile, setProfile] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [message, setMessage] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editProfile, setEditProfile] = useState([])

  useEffect(() => {
    fetchAllProfiles();
  }, [profile]);

  const fetchAllProfiles = async () => {
    try {
      const data = await getAllProfiles();
      setProfiles(data);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  const handleGetProfileById = async (idProfile) => {
    try {
      const data = await getProfileById(idProfile);
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleDeleteProfile = async (idProfile) => {
    try {
      await deleteProfile(idProfile);
      setMessage('تم حذف الملف الشخصي بنجاح');
      fetchAllProfiles(); // Refresh the list
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = profiles.slice(indexOfFirstItem, indexOfLastItem);
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
                    إضافة صفة 
                  </Button>
                  <AddProfileModal show={modalShow} onHide={() => setModalShow(false)}></AddProfileModal>
                  <h3 className="mb-0">جدول الصفات </h3>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light text-center">
                  <tr>
                    <th scope="col"  className='text-lg' > اسم الصفة</th>
                    <th scope="col" className='text-lg' > الإعدادات </th>

                  </tr>
                </thead>
                <tbody className="text-center">
                  {currentItems.map((profile) => (
                    <tr key={profile.idProfile}>
                      <td>{profile.profileName}</td>
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
                              onClick={() => handleGetProfileById(profile.idProfile)}
                            >
                              عرض
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => { setEditModalShow(true); setEditProfile(profile); }}
                            >
                              تعديل
                            </DropdownItem>
                            <EditProfileModal 
                              show={editModalShow}
                              profile={editProfile} 
                              onHide={() => setEditModalShow(false)}
                            />
                            <DropdownItem
                              onClick={() => handleDeleteProfile(profile.idProfile)}
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
                    {Array.from({ length: Math.ceil(profiles.length / itemsPerPage) }, (_, i) => (
                      <PaginationItem key={i + 1} className={currentPage === i + 1 ? 'active' : ''}>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => { e.preventDefault(); paginate(i + 1); }}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem className={currentPage === Math.ceil(profiles.length / itemsPerPage) ? 'disabled' : ''}>
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

export default Profiles;

