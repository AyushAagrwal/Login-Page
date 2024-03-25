// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM8v2C6JFOa1uEV_AqKHwhXd1hvYBezmQ",
  authDomain: "fir-login-c6cfd.firebaseapp.com",
  projectId: "fir-login-c6cfd",
  storageBucket: "fir-login-c6cfd.appspot.com",
  messagingSenderId: "521616488852",
  appId: "1:521616488852:web:bd9e8b2194999795ce3781",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export { auth };
export default app;
