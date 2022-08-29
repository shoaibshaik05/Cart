import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWlYmf8MonbBqyXn9Yh-AK6aGIjna7TzA",
  authDomain: "cart-36ef5.firebaseapp.com",
  projectId: "cart-36ef5",
  storageBucket: "cart-36ef5.appspot.com",
  messagingSenderId: "644129627843",
  appId: "1:644129627843:web:2f63c6f9f86215faf5cc76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

