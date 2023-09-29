import React from "react";
import "./Video.css";
import PlayButton from "./PLayButton";
import Counter from "./Counter";

const Video = ({
  title,
  channel = "PewDiePie",
  views,
  image,
  date,
  verified,
  id,
}) => {
  // Conditional rendering for the verified badge
  const channelName = verified ? `${channel} ✅` : channel;
  const channelClassName = `channel ${verified ? "verified" : ""}`;

  return (
    <div className="container">
      <div className="pic">
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <span style={{position:'right'}}>🔔 Subscribed</span>
      <Counter className="views" initialMessage={true}></Counter>
      <div className={channelClassName}>{channelName}.</div>
      <div className="views">
        {views} views<span>.</span> {date}
      </div>
      <PlayButton initialMessage={false}>{title}</PlayButton>
    </div>
  );
};

export default Video;
