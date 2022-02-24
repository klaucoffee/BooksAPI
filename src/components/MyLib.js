import React from "react";
import BookDisplay from "./BookDisplay";

//store data in firebase based on what is clicked

//"homepage": "https://klaucoffee.github.io/booksapi",

//GOOGLE FIRESTORE / FIREBASE

// Initialize Cloud Firestore through Firebase
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBd5yb3ihAUzfM8lNGNQbyvsZsC7TdAi5g",
//   authDomain: "booksapi-dace1.firebaseapp.com",
//   projectId: "booksapi-dace1",
//   storageBucket: "booksapi-dace1.appspot.com",
//   messagingSenderId: "88925925970",
//   appId: "1:88925925970:web:61803f0580201fdcef658b",
//   measurementId: "G-S9Q78V6W3E",
// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//use db to access database
//const db = getFirestore();

const MyLib = (props) => {
  console.log(props);
  console.log("mylibrary");
  return <div>MyLib</div>;
};

export default MyLib;
