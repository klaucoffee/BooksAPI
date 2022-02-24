import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = (props) => {
  return (
    <div>
      <header className="App-header">
        <h2>Curate Your Library</h2>
      </header>
      <div className="nav">
        <div className="nav-item">
          <span className="nav-logo">
            <Link to="/booksapi">Home</Link>
          </span>
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
