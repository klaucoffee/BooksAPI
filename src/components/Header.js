import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = (props) => {
  //not sure why refreshpage is not working
  const refreshPage = () => {
    window.location.reload(false);
    console.log("running");
  };

  return (
    <div>
      <header className="App-header">
        <h2>For Bookworms</h2>
      </header>
      <div className="nav">
        <div className="nav-item">
          <div onClick={refreshPage}>
            <Link to="/booksapi">Home</Link>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/booksapi/my-library">My Library</Link>
        </div>
        <div className="nav-item">
          <Link to="/booksapi/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
