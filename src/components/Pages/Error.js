import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ cursor: "default" }}>
      <h1
        style={{
          marginLeft: "28%",
          marginTop: "18%",
          display: "inline-block",
          color: "red",
          fontSize: "500%",
        }}
      >
        Error 404 Not Found
      </h1>
      <Link to="/">
        <button
          style={{
            display: "block",
            width: "15%",
            marginLeft: "42%",
            marginTop: "5%",
            height: "40px",
            fontSize: "150%",
            color: "black",
            backgroundColor: "hotpink",
            cursor: "pointer",
          }}
        >
          Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
