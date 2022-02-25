import React, { useState } from "react";
import "../App.css";
import $ from "jquery";
import MyLib from "./MyLib";

//takes one prop at a time (book is the same as the prop in app.js)
const BookDisplay = ({ book }) => {
  let bookLCCN = book.lccn;

  const coverLCCNurl =
    "https://covers.openlibrary.org/b/lccn/" + bookLCCN + "-M.jpg";

  const saveBook = (props) => {
    //setLibrary($(event.target).parent());
    props.addToLib({ book });
    //console.log({ book });
  };

  const bookISBN = JSON.stringify(book.isbn);
  // console.log(bookISBN);
  // console.log(typeof bookISBN);

  const bookPublishYear = JSON.stringify(book.publish_year);
  // const sliced = [...bookPublishYear];
  // console.log(sliced);

  console.log(bookPublishYear);
  //const bookPublishOneYear = bookPublishYear.slice(1, 5);
  //console.log(bookPublishOneYear); //How to render this? Can console.log but can't 'return' this
  //console.log(typeof bookPublishOneYear);
  // <p>
  //         {typeof bookPublishYear !== "undefined"
  //           ? {book.publish_year}
  //           : "year not available"}
  //       </p>

  //how to save whole div (bookCard) when clicked?
  //how to pass saved info to 'MyLib'

  return (
    <div className="book">
      <div className="bookCard">
        <h2>{book.title}</h2>
        <div>
          {typeof bookLCCN === "undefined" ? (
            "yes"
          ) : (
            <img
              width="200"
              alt={`The Book titled: ${book.title}`}
              src={coverLCCNurl}
            />
          )}
        </div>

        <p>{book.publish_year}</p>

        <button type="button" onClick={saveBook}>
          Add to My Library!
        </button>
      </div>
    </div>
  );
};

export default BookDisplay;
