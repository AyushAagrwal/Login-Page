import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { Link } from "react-router-dom";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign Out Succssfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {authUser ? (
        <>
          {" "}
          <p>{`Signed In as ${authUser.email} ${authUser.displayName} ${authUser.phoneNumber}`}</p>{" "}
          <button onClick={userSignOut}>
            {" "}
            {<Link to="/Sign-In">SignOut</Link>}
          </button>{" "}
        </>
      ) : (
        <span>
          <p>SignOut</p>
        </span>
      )}
    </div>
  );
};

export default AuthDetails;
