import React, { useState, useEffect } from "react";
import { Outlet, useOutletContext, Link } from "react-router-dom";
import "../App.css";
// import Header from "./Header";
// import BookDisplay from "./BookDisplay";
// import Search from "./Search";
import Home from "./Home";
import Header from "./Header";

const App = () => {
  const [library, setLibrary] = React.useState(0);
  console.log(library);

  const addToLib = (item) => {
    setLibrary([...library, item]); //takes original state library, spreads the array, adding the item at the end
    console.log(library);
  };

  return (
    <div className="App">
      <Header />
      <Outlet context={[library, setLibrary]} addToLib={addToLib} />
    </div>
  );
};

export default App;
