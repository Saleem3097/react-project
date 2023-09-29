import React, { useState } from "react";

const PlayButton = ({ initialMessage, children }) => {
  const [message, setMessage] = useState(initialMessage);

  function handleClick() {
    console.log(message);
    setMessage(!message); // Toggle the value of message
  }

  return (
    <div
      className="btn btn-danger custom-btn"
      style={{ width: "250px" }}
      onClick={handleClick}
    >
      <span className="text-white">{message ? "Playing  ⏩" : "Paused..  ⏸️"} {children}</span>
    </div>
  );
};

export default PlayButton;