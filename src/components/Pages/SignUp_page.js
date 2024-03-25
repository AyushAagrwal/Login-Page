import React, { useState } from "react";
import "../Style/SignIn_page.css";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "./Firebase";
import { Link, useNavigate } from "react-router-dom";

export const verifymail = (userCredential) => {
  const Evs = userCredential.user.emailVerified;
  if (Evs) {
    return 1;
    // navigate("/");
  } else {
    return 0;
    // navigate("/Email-verify");
  }
};

const SignUp_page = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [naame, setName] = useState("");

  const Sign_Up = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await sendEmailVerification(auth.currentUser).then(() => {
          console.log("verification sent");
        });
        updateProfile({ displayName: naame });

        var status = verifymail(userCredential);
        // Signed in
        if (status) {
          navigate("/");
        } else {
          navigate("/Email-verify");
        }
        // console.log(userCredential.user.emailVerified == true);
        console.log(userCredential);

        // navigate("/Email-verify");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-up-container">
      <form action="" onSubmit={Sign_Up}>
        <h1>Create a Account</h1>
        <input
          type="name"
          placeholder="Enter your name"
          value={naame}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Sign UP</button>
        <p>
          Already have a account?{" "}
          <span>
            <Link to="/Sign-In">Sign-In</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp_page;
