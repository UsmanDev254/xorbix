import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import sam from "../../assets/images/sam.webp";
import president from "../../assets/images/president.webp";
import anne from "../../assets/images/anne.webp";

function Testimonial() {
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [videoUrl, setVideoUrl] = useState(""); // Video URL state

  const handleShowModal = (url) => {
    setVideoUrl(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVideoUrl(""); // Clear video URL when modal is closed
  };

  return (
    <div>
      <Carousel
        data-bs-theme="dark"
        interval={1500}
        className="carousel_parent mt-5"
      >
        <Carousel.Item>
          <div className="row align-items-center testimonial_content_row_main">
            <div className="col-md-6">
              <img
                className="testimonial_img"
                src={sam}
                alt="Descriptive text"
                onClick={() =>
                  handleShowModal(
                    "https://www.youtube.com/embed/_F40QmIoeOE?autoplay=1"
                  )
                }
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="col-md-6">
              <Carousel.Caption className="text-start">
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="row align-items-center testimonial_content_row_main">
            <div className="col-md-6">
              <img
                className="testimonial_img"
                src={president}
                alt="Descriptive text"
                onClick={() =>
                  handleShowModal(
                    "https://www.youtube.com/embed/_F40QmIoeOE?autoplay=1"
                  )
                }
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="col-md-6">
              <Carousel.Caption className="text-start">
                <h5>Second slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="row align-items-center testimonial_content_row_main">
            <div className="col-md-6">
              <img
                className="testimonial_img"
                src={anne}
                alt="Descriptive text"
                onClick={() =>
                  handleShowModal(
                    "https://www.youtube.com/embed/_F40QmIoeOE?autoplay=1"
                  )
                }
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="col-md-6">
              <Carousel.Caption className="text-start">
                <h5>Third slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Modal Component */}
      <Modal show={showModal} onHide={handleCloseModal} centered className="modal_parent">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="400"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Testimonial;
