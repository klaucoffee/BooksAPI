import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
// import "../App.css";
// import Header from "./Header";
// import BookDisplay from "./BookDisplay";
// import Search from "./Search";
import Home from "./Home";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
