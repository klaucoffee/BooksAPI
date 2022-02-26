import React, { useState } from "react";
import "../App.css";
import $ from "jquery";
import MyLib from "./MyLib";

//takes one prop at a time (book is the same as the prop in app.js)
const BookDisplay = ({ book }) => {
  const [isbn, setIsbn] = useState([]);
  let bookLCCN = book.lccn;

  const coverLCCNurl =
    "https://covers.openlibrary.org/b/lccn/" + bookLCCN + "-M.jpg";

  let bookISBN = book.isbn;
  if (bookISBN) {
    setIsbn(bookISBN[0]);
  }

  console.log(isbn);

  //how to save the result? (bookISBN[0])
  // const coverLCCNurl =
  //   "https://covers.openlibrary.org/b/lccn/" + bookLCCN + "-M.jpg";

  const saveBook = (props) => {
    //setLibrary($(event.target).parent());
    props.addToLib({ book });
    //console.log({ book });
  };

  const publishedYear = book.publish_year;
  console.log("book publish year", book.publish_year);

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
              src={isbn}
            />
          )}
        </div>

        <p>{publishedYear?.length > 1 ? publishedYear[0] : publishedYear}</p>

        <button type="button" onClick={saveBook}>
          Add to My Library!
        </button>
      </div>
    </div>
  );
};

export default BookDisplay;
