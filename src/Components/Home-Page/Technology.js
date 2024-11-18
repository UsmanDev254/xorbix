import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import technology from '../../assets/images/technology.webp';


function Technology() {
  return (
    <Container fluid>
      <Row>
        <Col className="first_col col-lg-4 col-md-12 order-md-2 order-lg-1">
          <div className="technology_content">
            <div className="technology_heading">
              <h2>Making Technology Transformations</h2>
            </div>
            <div className="technology_paragraph">
              <p>
                When it comes to software and IT solutions, we make the complex
                simple. Since 1998, Xorbix Technologies, Inc. has developed
                customized software and delivered IT expertise that unlock your
                business’ full potential. We help you implement the right
                solutions today and quickly adapt to the ever-changing tech
                landscape of tomorrow.
              </p>
            </div>
            <div className="technology_heading">
              <Button variant="light"><Link to={'/about'}>Contact Us</Link></Button>
            </div>
          </div>
        </Col>
        <Col className="second_col technology_img col-lg-4 col-md-12 order-lg-2 order-md-1" style={{background: `url(${technology})`}}>
          <div>
          </div>
        </Col>
        <Col className="third_col technology_partner_col d-flex justify-content-center align-items-center col-lg-4 col-md-12 order-lg-3">
            <div className="technology_partner_heading text-end justify-content-center">
              <h2>Your Technology Solutions Partner</h2>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Technology;
