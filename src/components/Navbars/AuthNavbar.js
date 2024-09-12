import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import '../../views/examples/style.css'; // Importez le fichier CSS

const AdminNavbar = () => {
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main" style={{ marginRight: "480px" }}>
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto card-blur" navbar>
              <NavItem>
                <NavLink
                  className="nav-link-icon  " // Ajoutez la classe nav-link-blur ici
                  to="/auth/register"
                  tag={Link}
                >
                  <i className="ni ni-circle-08 text-dark text-lg" />
                  <span className="nav-link-inner--text text-dark text-lg">تسجيل</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon " // Ajoutez la classe nav-link-blur ici
                  to="/auth/login"
                  tag={Link}
                >
                  <i className="ni ni-key-25 text-dark text-lg" />
                  <span className="nav-link-inner--text text-dark text-lg">دخول</span>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
          <NavbarBrand className="card-blur">
            <img
              alt="..."
              src={require("../../assets/img/brand/image17.png")}
              style={{ width: '250px', height: '80px', borderRadius: "15px" }} 
            />
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
