import React from "react";
import { Link } from "react-router-dom";
import "../Style/Login_page.css";

const Login_page = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h1>Log in to Your Account</h1>
        <input type="email" placeholder="Enter your Email" />
        <input type="password" placeholder="Enter your Password" />
        <button>Sign In</button>
        <p>
          Don't have an account? <Link to="/Sign-Up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login_page;
