import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../assets/images/logo.png";

function NavBar() {
  return (
    <header>
      <Navbar expand="lg" className="py-3 navbar_parent">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            <img src={logo} alt="Logo" className="site_logo" />
          </Navbar.Brand>

          {/* Toggler for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible Navbar for mobile */}
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0 nabar_inner"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              <Nav.Link as={NavLink} to="/services" className="navbar_link">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="navbar_link">
                Industries
              </Nav.Link>
              <Nav.Link as={NavLink} to="/casestudies" className="navbar_link">
                Our Work
              </Nav.Link>
              <Nav.Link as={NavLink} to="/event" className="navbar_link">
                Event
              </Nav.Link>
              <Nav.Link as={NavLink} to="/industries" className="navbar_link">
                Insights
              </Nav.Link>
              <Nav.Link as={NavLink} to="/clients" className="navbar_link">
                Our Clients
              </Nav.Link>
            </Nav>

            {/* Contact Us button, aligned to the right */}
            <Nav className="ml-lg-auto">
              <Nav.Item>
                <Link to="/contact-us">
                  <Button variant="primary" className="mt-3 mt-lg-0">
                    Contact Us
                  </Button>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
