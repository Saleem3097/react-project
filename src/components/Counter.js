import React, { useState } from "react";
import "./Video.css";

const Counter = ({ initialMessage, children }) => {
  const [number, setNumber] = useState(1);
  const [message, setMessage] = useState(initialMessage);
  function handleClick() {
    setNumber(number + 1);
    setMessage(!message);
    if(message===false){
      setNumber(number - 1);
    }
  }

  const ST = {
    color: "white",
  };

  return (
    <>
      <div style={ST}>{number}</div>
      <h1
        style={{ float: "right", background: "transparent", cursor: "pointer" }}
        onClick={handleClick}
      >
        <span>
          {message ? "💙":"❤️"} {children}
        </span>
      </h1>
    </>
  );
};

export default Counter;
