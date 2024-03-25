// import React, { Component } from "react";
// import { auth } from "./Firebase";
// import { RecaptchaVerifier } from "firebase/auth";

// export default class PhoneAuth extends Component {
//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   configureCaptcha = () => {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha",
//       {
//         size: "invisible",
//         callback: (response) => {
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//           this.onSignInSubmit();
//         },
//         defaultCountry: "IN",
//       },

//       auth
//     );
//   };

//   onSignInSubmit = (e) => {
//     e.preventDefault();
//     this.configureCaptcha();

//     const phoneNumber = "+91" + this.state.mobile;
//     console.log(phoneNumber);
//     const appVerifier = window.recaptchaVerifier;

//     this.signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         window.confirmationResult = confirmationResult;
//         console.log("OTP sent");
//         // ...
//       })
//       .catch((error) => {
//         // Error; SMS not sent
//         // ...
//         console.log("SMS not sent");
//       });
//   };

//   onSubmitOTP = (e) => {
//     e.preventDefault();
//     const code = this.state.otp;
//     console.log(code);
//     window.confirmationResult
//       .confirm(code)
//       .then((result) => {
//         // User signed in successfully.
//         const user = result.user;
//         console.log(JSON.stringify(user));
//         alert("User is verified");
//         // ...
//       })
//       .catch((error) => {
//         // User couldn't sign in (bad verification code?)
//         // ...
//       });
//   };
//   render() {
//     return (
//       <div>
//         <h2>Login Form</h2>
//         <form onSubmit={this.onSignInSubmit}>
//           <div id="sign-in-button"></div>
//           <input
//             type="number"
//             name="mobile"
//             placeholder="Mobile number"
//             required
//             onChange={this.handleChange}
//           />
//           <button type="submit">Submit</button>
//         </form>

//         <h2>Enter OTP</h2>
//         <form onSubmit={this.onSubmitOTP}>
//           <input
//             type="number"
//             name="otp"
//             placeholder="OTP Number"
//             required
//             onChange={this.handleChange}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

const PhoneAuth = () => {
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const configureCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
        defaultCountry: "IN",
      },

      auth
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();

    const phoneNumber = "+91" + phone;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP sent");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("SMS not sent");
      });
  };

  const onSubmitOtp = (e) => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        navigate("/Sign-Out");
        alert("user verified ");
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={onSignInSubmit}>
        <div id="recaptcha"></div>
        <input
          type="number"
          placeholder="Mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Get OTP</button>
      </form>
      <form onSubmit={onSubmitOtp}>
        <input
          type="number"
          placeholder="OTP Number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default PhoneAuth;
