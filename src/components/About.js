import React from "react";
import "../App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const About = () => {
  const styleObj = {
    fontSize: 20,
    color: "#A9A9A9",
    textAlign: "center",
    padding: "100px",
  };
  return (
    <div>
      <p style={styleObj}>
        This webapp is for any self-confessed bookworms who need to keep track
        of their personal libraries and who need to stop buying duplicates of
        the same books
      </p>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button href="https://github.com/klaucoffee/booksapi">
          Github repo for this project
        </Button>
        <br></br>
        <Button href="https://openlibrary.org/developers/api">
          Open Library API Source
        </Button>
        <br></br>
        <Button href="mailto:krystlelau90@gmail.com?subject=Feedback%20about%20Bookworm%20web%20app">
          Contact me at krystlelau90@gmail.com
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default About;
