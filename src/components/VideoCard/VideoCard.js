import React from "react";
import "./VideoCard.css";

const VideoCard = (props) => {
  const thumbnailUrl = props.thumbnail;
  const videoUrl = props.videoUrl;

  return (
    <a className="video-card" href={videoUrl} target="_blank" rel="noreferrer">
      <div className="video-thumbnail" style={{ backgroundImage: `url(${thumbnailUrl})` }}></div>
      <div className="video-title-div">
        <h3 className="video-title">{props.title}</h3>
      </div>
    </a>
  );
};

export default VideoCard;
