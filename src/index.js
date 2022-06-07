import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// CSS
import './styles/style.css'
// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
// FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "risk-store-d0c5c.firebaseapp.com",
  projectId: "risk-store-d0c5c",
  storageBucket: "risk-store-d0c5c.appspot.com",
  messagingSenderId: "549594444878",
  appId: "1:549594444878:web:437ce477b3694537983f1f",
  measurementId: "G-NHDVPNWCDJ"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
