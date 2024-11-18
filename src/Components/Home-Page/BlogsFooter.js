import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import blog1 from "../../assets/images/40.webp";
import blog2 from "../../assets/images/41.webp";

function BlogFooter() {
  return (
    <div className="blogs_parent mt-5 mb-5">
      <div className="blogs_inner">
        <Container fluid>
          <Row>
            <Col lg={3} sm={12} className="blog_imag blog_child p-0">
              <img src={blog1} className="blog_img"></img>
            </Col>
            <Col lg={3} sm={12} className="blog_content blog_child p-4 text-start">
              <h3>
                The Benefits of Databricks for Manufacturing Companies in
                Madison
              </h3>
              <p>
                Madison’s manufacturing sector is experiencing a significant
                shift toward data-driven operations, and Databricks stands at
                the forefront of this transformation.
              </p>
            </Col>

            <Col lg={3} sm={12} className="blog_imag blog_child p-0">
              <img src={blog2} className="blog_img"></img>
            </Col>
            <Col lg={3} sm={12} className="blog_content blog_child p-4 text-start">
              <h3>
                The Benefits of Databricks for Manufacturing Companies in
                Madison
              </h3>
              <p>
                Madison’s manufacturing sector is experiencing a significant
                shift toward data-driven operations, and Databricks stands at
                the forefront of this transformation.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={12} className="blog_content blog_child p-4 text-start">
              <h3>
                The Benefits of Databricks for Manufacturing Companies in
                Madison
              </h3>
              <p>
                Madison’s manufacturing sector is experiencing a significant
                shift toward data-driven operations, and Databricks stands at
                the forefront of this transformation.
              </p>
            </Col>
            <Col lg={3} sm={12} className="blog_imag blog_child p-0">
              <img src={blog1} className="blog_img"></img>
            </Col>

            <Col lg={3} sm={12} className="blog_content blog_child p-4 text-start">
              <h3>
                The Benefits of Databricks for Manufacturing Companies in
                Madison
              </h3>
              <p>
                Madison’s manufacturing sector is experiencing a significant
                shift toward data-driven operations, and Databricks stands at
                the forefront of this transformation.
              </p>
            </Col>

            <Col lg={3} sm={12} className="blog_imag blog_child p-0">
              <img src={blog2} className="blog_img"></img>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default BlogFooter;
