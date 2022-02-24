import React, { useState } from "react";
import "../App.css";
import $ from "jquery";
import MyLib from "./MyLib";

//takes one prop at a time (book is the same as the prop in app.js)
const BookDisplay = ({ book }) => {
  let bookLCCN = book.lccn;

  const coverurl =
    "https://covers.openlibrary.org/b/lccn/" + bookLCCN + "-M.jpg";

  const saveBook = (event) => {
    //setLibrary($(event.target).parent());
    //props.addToLib({book})
    console.log({ book });
  };

  //how to save whole div (bookCard) when clicked?
  //how to pass saved info to 'MyLib'
  return (
    <div className="book">
      <div className="bookCard">
        <h2>{book.title}</h2>
        <div>
          <img
            width="200"
            alt={`The Book titled: ${book.title}`}
            src={coverurl}
          />
        </div>
        <p>({book.publish_year})</p>
        <button type="button" onClick={saveBook}>
          Add to My Library!
        </button>
      </div>
    </div>
  );
};

export default BookDisplay;
