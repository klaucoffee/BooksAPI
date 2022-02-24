import React from "react";
import "../App.css";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        This webapp is for any self-confessed bookworms who need to keep track
        of their personal libraries and who need to stop buying duplicates of
        the same books
      </p>
      <a href="https://github.com/klaucoffee/booksapi">
        Github repo for this project
      </a>
      <br></br>
      <a href="https://openlibrary.org/developers/api">
        Open Library API Source
      </a>
      <br></br>
      <a href="krystlelau90@gmail.com">Contact</a>
    </div>
  );
};

export default About;
