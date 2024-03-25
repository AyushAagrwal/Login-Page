import React from "react";
import { Link } from "react-router-dom";
import { verifymail } from "./SignUp_page";
import { auth } from "firebaseui";

const Email_veriy = () => {
  //   const kuchbhi = verifymail(auth);
  return (
    <div>
      Please Verify your email
      <br />
      if verrified click
      <button>Verified</button>
    </div>
  );
};

export default Email_veriy;
