import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{background:'#022976'}} className="text-white text-center text-lg-start">
      <Container className="py-5 px-4">
        <Row>
          <Col lg="3" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Xorbix</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
            </p>
          </Col>

          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Industries</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to={'/#'} className="text-white">
                  HealthCare
                </Link>
              </li>
              <li>
                <Link to={'/#'} className="text-white">
                  Insurance
                </Link>
              </li>
              <li>
                <Link to={'/#'} className="text-white">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to={'/#'} className="text-white">
                  Technology
                </Link>
              </li>
              <li>
                <Link to={'/#'} className="text-white">
                  Others
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Services</h5>
            <ul className="list-unstyled">
              <li>
                <Link to={'/#'} className="text-white">
                  Software Advisory
                </Link>
              </li>
              <li>
                <Link to={'/#'} className="text-white">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to={'/#'} className="text-white">
                  MSaaS
                </Link>
              </li>
              <li>
                <Link to={'/#'} className="text-white">
                  Databricks
                </Link>
              </li>
              <li>
                <Link to={'/#'} className="text-white">
                  Product Development
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Solutions</h5>
            <ul className="list-unstyled">
              <li>
                <Link to={'/#'} className="text-white">
                Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to={'/#'} className="text-white">
                Custom AI Development
                </Link>
              </li>
              <li>
                <Link to={'/#'} className="text-white">
                Generative AI Solutions
                </Link>
              </li>
              <li>
                <Link to={'/#'} className="text-white">
                Machine Learning
                </Link>
              </li>
              <li>
                <Link to={'/#'} className="text-white">
                Cloud Development
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <Link className="text-white" to={'/xorbix.com'} >
          Xorbix.com
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
