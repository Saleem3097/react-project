import React from 'react';
import './Video.css';

const Video = ({ title, channel="Pew die pie", views, image, date }) => {
  return (
    <div className="container">
      <div className="pic">
        <img src={image} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views<span>.</span> {date}
      </div>
    </div>
  );
};

export default Video;
