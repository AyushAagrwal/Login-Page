import React, { useState } from "react";
import "../Style/SignIn_page.css";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./Firebase";
import { Link, useNavigate } from "react-router-dom";

const SignIn_page = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  // const [otp, setOtp] = useState("");
  // const [phone, setPhone] = useState("");

  //** Google SignIn */
  const Sign_In = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/Sign-Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //** Google Verification */

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/Sign-Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //** Forgot Password */

  const resetPassword = () => {
    if (email != null) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("Password reset email sent");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
    } else {
      alert("Please Enter a valid Email");
    }
  };

  return (
    <div className="sign-in-container">
      <form action="" onSubmit={Sign_In}>
        <h1>Log in to Account</h1>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        />
        <button type="submit">Sign IN</button>
        <p>
          Don't have a account?{" "}
          <span>
            <Link to="/Sign-Up">Sign-Up</Link>
          </span>
        </p>
        <span>
          <Link to="/Forgot-Password" onClick={resetPassword}>
            Forgot Password
          </Link>
        </span>
        <br />
        <button onClick={signInWithGoogle}>Sign In with Google</button>
        <br />

        <Link to="/Phone-Verify">
          <button>Sign Up with Phone</button>
        </Link>
      </form>
    </div>
  );
};

export default SignIn_page;
