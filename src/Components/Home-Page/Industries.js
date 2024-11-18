import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import healthcare from "../../assets/images/Healthcare-1.jpg";
import insurance from "../../assets/images/Insurance-1.jpg";
import manufacturing from "../../assets/images/Manufacturing-1.jpg";
import technology from "../../assets/images/Software-1.jpg";

function Industries() {
  const [bgImage, setBgImage] = useState(healthcare); // Default background image
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which item is hovered

  const industryData = [
    {
      title: "Healthcare",
      image: healthcare,
      desc: "We build and maintain software solutions that help healthcare organizations.",
      button: "/healthcare",
    },
    {
      title: "Insurance",
      image: insurance,
      desc: "We work with the largest health insurance companies.",
      button: "/insurance",
    },
    {
      title: "Manufacturing",
      image: manufacturing,
      desc: "We help manufacturing industries rely on smart machines.",
      button: "/manufacturing",
    },
    {
      title: "Technology",
      image: technology,
      desc: "We help software developers build custom solutions.",
      button: "/technology",
    },
  ];

  const handleHover = (image, index) => {
    setBgImage(image); // Update the background image on hover
    setHoveredIndex(index); // Set the current index as hovered
  };

  const handleLeave = () => {
    setBgImage(healthcare); // Revert to default background
    setHoveredIndex(null); // Reset the hovered index
  };

  return (
    <div className="industry_parent">
      <h2 className="industry_heading mt-5 mb-5">Industries</h2>
      <div
        className="custom-list-background-switcher"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="custom-hover-switcher-row d-flex flex-row custom-items-wrapper">
          {industryData.map((industry, i) => (
            <div
              key={i}
              className="custom-hover-switcher-column d-flex flex-column col-lg-3 col-sm-3 border-end border-white"
              onMouseEnter={() => handleHover(industry.image, i)}
              onMouseLeave={handleLeave}
            >
                <div className="custom-item-overlay flex-grow-1"></div>
                {/* Ensure the content is pushed to the bottom */}
                <div className="custom-hover-switcher-content mt-auto pb-3">
                  <div className="custom-hover-switcher-link">
                    <div className="custom-hover-switcher-title">
                      <h2>{industry.title}</h2>
                    </div>
                    {hoveredIndex === i && (
                      <>
                        <div className="custom-hover-switcher-desc">
                          <p>{industry.desc}</p>
                        </div>
                        <div className="industry_btn">
                          <NavLink
                            to={industry.button}
                            className="custom-button custom-more-btn"
                          >
                            <Button type="button">Learn More</Button>
                          </NavLink>
                        </div>
                      </>
                    )}
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Industries;
