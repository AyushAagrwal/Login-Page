import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login_page from "./components/Pages/Login_page";
import SignIn_page from "./components/Pages/SignIn_page";
import SignUp_page from "./components/Pages/SignUp_page";
import "./components/Style/App.css";
// import { useEffect } from "react";
// import { auth } from "./components/Pages/Firebase";
import AuthDetails from "./components/Pages/AuthDetails";
import PhoneAuth from "./components/Pages/PhoneAuth";
import Forgot_pas from "./components/Pages/Forgot_pas";
import Email_veriy from "./components/Pages/Email_veriy";
import Error from "./components/Pages/Error";

function App() {
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log(user);
  //   });
  // });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Sign-In" element={<SignIn_page />} />
          <Route path="/Sign-Up" element={<SignUp_page />} />
          <Route path="/" element={<Login_page />} />
          <Route path="/Sign-Out" element={<AuthDetails />} />
          <Route path="/Phone-Verify" element={<PhoneAuth />} />
          <Route path="/Forgot-Password" element={<Forgot_pas />} />
          <Route path="/Email-verify" element={<Email_veriy />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
