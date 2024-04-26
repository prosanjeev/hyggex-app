import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { IoRefreshOutline } from "react-icons/io5";
import { TbFocusCentered } from "react-icons/tb";

const Card = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [
    "/videos/1.mp4",
    "/videos/2.mp4",
    "/videos/3.mp4",
    "/videos/1.mp4",
    "/videos/2.mp4",
    "/videos/3.mp4",
    "/videos/1.mp4",
    "/videos/2.mp4",
    "/videos/3.mp4",
    "/videos/2.mp4",
  ];

  const handleRefreshVideos = () => {
    // Implement logic to refresh or reload the videos
    console.log("Refreshing videos...");
  };

  const showPreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const showNextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const zoomIn = () => {
    // Implement logic to zoom in on the video
    console.log("Zooming in...");
  };

  return (
    <div className="flex-col w-[612px] justify-center items-center my-2 mx-auto">
      <div className="card  w-[612px] items-center justify-center text-primary-content">
        <div className="flex items-center h-[323px]">
          {/* Display the current video */}
          <video
            src={videos[currentVideoIndex]}
            controls
            className="w-full h-full rounded-3xl"
          />
        </div>
      </div>

      <div className="flex justify-between items-center px-10 py-5 text-[30px]">
        <IoRefreshOutline onClick={handleRefreshVideos} />
        <div className="flex items-center space-x-6">
          <FaChevronCircleLeft onClick={showPreviousVideo} />
          <h2>{`${currentVideoIndex + 1}/${videos.length}`}</h2>
          <FaChevronCircleRight onClick={showNextVideo} />
        </div>
        <TbFocusCentered onClick={zoomIn} />
      </div>
    </div>
  );
};

export default Card;
