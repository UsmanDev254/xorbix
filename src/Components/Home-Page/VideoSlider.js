import React, { useState } from "react";
import Modal from "react-modal";
import { Box, Button, Typography, Grid, IconButton, Card } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

Modal.setAppElement("#root"); // For accessibility

// Sample video data
const videos = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/2vjPBrBU-TM?list=RD2vjPBrBU-TM",
    title: "Video 1",
    description: "This is the description for Video 1.",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/cY1_o8yrILc",
    title: "Video 2",
    description: "This is the description for Video 2.",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/lW9ep22YmlM",
    title: "Video 3",
    description: "This is the description for Video 3.",
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/epd6ewgpS1o",
    title: "Video 4",
    description: "This is the description for Video 4.",
  },
  {
    id: 5,
    url: "https://www.youtube.com/embed/DcPJ5PopVKM",
    title: "Video 5",
    description: "This is the description for Video 5.",
  },
];

const VideoSlider = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getThumbnail = (url) => {
    // Check if the URL is a YouTube link
    if (url.includes("youtube.com")) {
      const videoId = url.split("/")[4]?.split("?")[0];
      return `https://img.youtube.com/vi/${videoId}/0.jpg`;
    }
    // Fallback thumbnail for non-YouTube videos (local video files)
    return "placeholder_thumbnail.png"; // Add a placeholder thumbnail image in your project directory
  };

  const handlePrevious = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentVideo = videos[currentVideoIndex] || videos[0]; // Default to the first video if index is invalid

  return (
    <Card
      sx={{ padding: 3, display: "flex", alignItems: "center", width: "100%" }}
    >
      <Grid container>
        {/* Video Thumbnails */}
        <IconButton onClick={handlePrevious}>
          <ArrowBackIosIcon />
        </IconButton>
        <Grid
          item
          xs={5}
          sx={{ overflowX: "auto", display: "flex", alignItems: "center" }}
        >
          {currentVideo && (
            <>
              <Box
                sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}
              >
                <IconButton onClick={openModal}>
                  <img
                    src={getThumbnail(currentVideo.url)}
                    alt={currentVideo.title}
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      cursor: "pointer",
                    }}
                    onClick={openModal}
                  />
                </IconButton>
              </Box>
            </>
          )}
        </Grid>

        {/* Content and Navigation Area */}
        <Grid style={{ marginTop: "90px", marginLeft: "-70px" }} item>
          {currentVideo && (
            <>
              <Typography variant="h5" gutterBottom>
                {currentVideo.title}
              </Typography>
              <Typography variant="body1">
                {currentVideo.description}
              </Typography>
            </>
          )}
        </Grid>
        &nbsp;&nbsp;&nbsp;
        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>

      {/* Modal for Video Playback */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Play Video"
        style={{
          content: { width: "80%", height: "80%", margin: "auto" },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          {currentVideo && currentVideo.url.includes("youtube.com") ? (
            <iframe
              width="100%"
              height="400"
              src={currentVideo.url}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video width="100%" height="400" controls>
              <source src={currentVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={closeModal}
            sx={{ marginTop: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Card>
  );
};

export default VideoSlider;
