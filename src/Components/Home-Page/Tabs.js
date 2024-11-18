import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import advisory from "../../assets/images/software-advisory.webp";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeTab() {
  return (
    <Container fluid>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col md={12} lg={4} className="xorbix_services_main">
            <div className="services_heading text-start justify-content-center">
              <h2>Xorbix Services</h2>
            </div>
            <Nav variant="pills" className="flex-column nav_items_main">
              <Nav.Item>
                <Nav.Link className="text-start" eventKey="first">
                  Software Advisory
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-start" eventKey="second">
                  Software Development
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-start" eventKey="third">
                  Managed Software As A Service
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-start" eventKey="fourth">
                  Databricks Practice
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-start" eventKey="fifth">
                  IT Consulting & Placement
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-start" eventKey="sixth">
                  Product Development
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={12} lg={8} className="xorbix_services_content_main">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="services_inner_main d-flex flex-column gap-4">
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div className="content_box">
                      <h2>Vison & Mission</h2>
                      <p>
                        Our goal is to build consumer-focused software that
                        inspires users to download and use your solution.
                      </p>
                    </div>
                    <div className="content_box">
                      <h2>Strategy Development</h2>
                      <p>
                        Create a full-scope software strategy that establishes
                        your audience, identifies the problems this software
                        solves, determines your competition and more.
                      </p>
                    </div>
                  </div>
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div
                      className="content_box content_box_img"
                      style={{ background: `url(${advisory})` }}
                    >
                      <div></div>
                    </div>
                    <div className="content_box">
                      <h2>Marketing & Sales</h2>
                      <p>
                        Decide how to price your software, including whether or
                        not to include ads, and develop a marketing plan to
                        attract the right buyers to your solution.
                      </p>
                    </div>
                  </div>
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div className="content_box">
                      <h2>Onboarding</h2>
                      <p>
                        Develop training opportunities and build resources, such
                        as videos, so end users can confidently start using your
                        solution.
                      </p>
                    </div>
                    <div className="content_box">
                      <h2>Maintenance & Support</h2>
                      <p>
                        Build a plan to maintain existing features, add
                        enhancements and improve functionality to continuously
                        attract more users and inspire more downloads.
                      </p>
                    </div>
                  </div>
                  <div className="services_box_btn text-end">
                    <Link to="/#software-advisory">
                      <Button variant="primary">
                        Learn More About Our Software Advisory Services
                      </Button>
                    </Link>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="services_inner_main d-flex flex-column gap-4">
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div className="content_box">
                      <h2>Vison & Mission</h2>
                      <p>
                        Our goal is to build consumer-focused software that
                        inspires users to download and use your solution.
                      </p>
                    </div>
                    <div className="content_box">
                      <h2>Strategy Development</h2>
                      <p>
                        Create a full-scope software strategy that establishes
                        your audience, identifies the problems this software
                        solves, determines your competition and more.
                      </p>
                    </div>
                  </div>
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div
                      className="content_box content_box_img"
                      style={{ background: `url(${advisory})` }}
                    >
                      <div></div>
                    </div>
                    <div className="content_box">
                      <h2>Marketing & Sales</h2>
                      <p>
                        Decide how to price your software, including whether or
                        not to include ads, and develop a marketing plan to
                        attract the right buyers to your solution.
                      </p>
                    </div>
                  </div>
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div className="content_box">
                      <h2>Onboarding</h2>
                      <p>
                        Develop training opportunities and build resources, such
                        as videos, so end users can confidently start using your
                        solution.
                      </p>
                    </div>
                    <div className="content_box">
                      <h2>Maintenance & Support</h2>
                      <p>
                        Build a plan to maintain existing features, add
                        enhancements and improve functionality to continuously
                        attract more users and inspire more downloads.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className="services_inner_main d-flex flex-column gap-4">
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div className="content_box">
                      <h2>Vison & Mission</h2>
                      <p>
                        Our goal is to build consumer-focused software that
                        inspires users to download and use your solution.
                      </p>
                    </div>
                    <div className="content_box">
                      <h2>Strategy Development</h2>
                      <p>
                        Create a full-scope software strategy that establishes
                        your audience, identifies the problems this software
                        solves, determines your competition and more.
                      </p>
                    </div>
                  </div>
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div
                      className="content_box content_box_img"
                      style={{ background: `url(${advisory})` }}
                    >
                      <div></div>
                    </div>
                    <div className="content_box">
                      <h2>Marketing & Sales</h2>
                      <p>
                        Decide how to price your software, including whether or
                        not to include ads, and develop a marketing plan to
                        attract the right buyers to your solution.
                      </p>
                    </div>
                  </div>
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div className="content_box">
                      <h2>Onboarding</h2>
                      <p>
                        Develop training opportunities and build resources, such
                        as videos, so end users can confidently start using your
                        solution.
                      </p>
                    </div>
                    <div className="content_box">
                      <h2>Maintenance & Support</h2>
                      <p>
                        Build a plan to maintain existing features, add
                        enhancements and improve functionality to continuously
                        attract more users and inspire more downloads.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <div className="services_inner_main d-flex flex-column gap-4">
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div className="content_box">
                      <h2>Vison & Mission</h2>
                      <p>
                        Our goal is to build consumer-focused software that
                        inspires users to download and use your solution.
                      </p>
                    </div>
                    <div className="content_box">
                      <h2>Strategy Development</h2>
                      <p>
                        Create a full-scope software strategy that establishes
                        your audience, identifies the problems this software
                        solves, determines your competition and more.
                      </p>
                    </div>
                  </div>
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div
                      className="content_box content_box_img"
                      style={{ background: `url(${advisory})` }}
                    >
                      <div></div>
                    </div>
                    <div className="content_box">
                      <h2>Marketing & Sales</h2>
                      <p>
                        Decide how to price your software, including whether or
                        not to include ads, and develop a marketing plan to
                        attract the right buyers to your solution.
                      </p>
                    </div>
                  </div>
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div className="content_box">
                      <h2>Onboarding</h2>
                      <p>
                        Develop training opportunities and build resources, such
                        as videos, so end users can confidently start using your
                        solution.
                      </p>
                    </div>
                    <div className="content_box">
                      <h2>Maintenance & Support</h2>
                      <p>
                        Build a plan to maintain existing features, add
                        enhancements and improve functionality to continuously
                        attract more users and inspire more downloads.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <div className="services_inner_main d-flex flex-column gap-4">
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div className="content_box">
                      <h2>Vison & Mission</h2>
                      <p>
                        Our goal is to build consumer-focused software that
                        inspires users to download and use your solution.
                      </p>
                    </div>
                    <div className="content_box">
                      <h2>Strategy Development</h2>
                      <p>
                        Create a full-scope software strategy that establishes
                        your audience, identifies the problems this software
                        solves, determines your competition and more.
                      </p>
                    </div>
                  </div>
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div
                      className="content_box content_box_img"
                      style={{ background: `url(${advisory})` }}
                    >
                      <div></div>
                    </div>
                    <div className="content_box">
                      <h2>Marketing & Sales</h2>
                      <p>
                        Decide how to price your software, including whether or
                        not to include ads, and develop a marketing plan to
                        attract the right buyers to your solution.
                      </p>
                    </div>
                  </div>
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div className="content_box">
                      <h2>Onboarding</h2>
                      <p>
                        Develop training opportunities and build resources, such
                        as videos, so end users can confidently start using your
                        solution.
                      </p>
                    </div>
                    <div className="content_box">
                      <h2>Maintenance & Support</h2>
                      <p>
                        Build a plan to maintain existing features, add
                        enhancements and improve functionality to continuously
                        attract more users and inspire more downloads.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <div className="services_inner_main d-flex flex-column gap-4">
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div className="content_box">
                      <h2>Vison & Mission</h2>
                      <p>
                        Our goal is to build consumer-focused software that
                        inspires users to download and use your solution.
                      </p>
                    </div>
                    <div className="content_box">
                      <h2>Strategy Development</h2>
                      <p>
                        Create a full-scope software strategy that establishes
                        your audience, identifies the problems this software
                        solves, determines your competition and more.
                      </p>
                    </div>
                  </div>
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div
                      className="content_box content_box_img"
                      style={{ background: `url(${advisory})` }}
                    >
                      <div></div>
                    </div>
                    <div className="content_box">
                      <h2>Marketing & Sales</h2>
                      <p>
                        Decide how to price your software, including whether or
                        not to include ads, and develop a marketing plan to
                        attract the right buyers to your solution.
                      </p>
                    </div>
                  </div>
                  <div className="services_boxes_main d-lg-flex flex-lg-row d-sm-flex flex-sm-column gap-4">
                    <div className="content_box">
                      <h2>Onboarding</h2>
                      <p>
                        Develop training opportunities and build resources, such
                        as videos, so end users can confidently start using your
                        solution.
                      </p>
                    </div>
                    <div className="content_box">
                      <h2>Maintenance & Support</h2>
                      <p>
                        Build a plan to maintain existing features, add
                        enhancements and improve functionality to continuously
                        attract more users and inspire more downloads.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default HomeTab;
