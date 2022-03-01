import React, { useState, useEffect } from "react";
import { Outlet, useOutletContext, Link } from "react-router-dom";
import "../App.css";
// import Header from "./Header";
// import BookDisplay from "./BookDisplay";
// import Search from "./Search";
import Home from "./Home";
import Header from "./Header";

const App = () => {
  const [library, setLibrary] = useState([]);

  return (
    <div className="App">
      <Header />
      <Outlet context={[library, setLibrary]} />
    </div>
  );
};

export default App;
