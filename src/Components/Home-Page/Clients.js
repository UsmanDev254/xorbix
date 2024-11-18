import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import client from "../../assets/images/client-logos.png";
import glance from "../../assets/images/xorbix-glance.webp";

function Clients() {
  return (
    <Container fluid>
      <Row>
        <Col md={12} className="clients_main">
          <div className="client_logos">
            <div className="client_logo_img">
              <img src={client} alt="clients"></img>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="xorbix_clients_counter_row">
        <Col
          lg={4} sm={12}
          className="second_col technology_img"
          style={{ background: `url(${glance})` }}
        >
          <div></div>
        </Col>
        <Col
          lg={2} sm={12}
          className="glance_col d-flex flex-column justify-content-center"
        >
          <div className="technology_content">
            <div className="devider_main">
              <div className="devider_inner"></div>
            </div>
            <div className="glance_heading">
              <h2>XORBIX AT A GLANCE</h2>
            </div>
          </div>
        </Col>
        <Col
          lg={6} sm={12}
          className="client_counter_main d-flex flex-column justify-content-center"
        >
          <div className="devider_main">
            <div className="devider_inner"></div>
          </div>
          <div className="clients_counter_inner d-flex flex-column gap-5">
            <Row className="gap-2">
              <Col className="border-bottom client_least_heading">
                <h4>Millions+ of Users Served</h4>
              </Col>
              <Col className="border-bottom client_least_heading">
                <h4>250+ Clients Served</h4>
              </Col>
            </Row>
            <Row className="gap-2">
              <Col className="border-bottom client_least_heading">
                <h4>Millions+ of Users Served</h4>
              </Col>
              <Col className="border-bottom client_least_heading">
                <h4>250+ Clients Served</h4>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Clients;
