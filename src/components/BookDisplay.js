import React, { useState, useContext } from "react";
import { Outlet, useOutletContext, Link } from "react-router-dom";
import "../App.css";
import $ from "jquery";
import MyLib from "./MyLib";

//takes one prop at a time (book is the same as the prop in app.js)
const BookDisplay = ({ book }) => {
  //const [isbn, setIsbn] = useState([]);

  const [library, setLibrary] = useOutletContext();

  let bookLCCN = book.lccn;

  const coverLCCNurl =
    "https://covers.openlibrary.org/b/lccn/" + bookLCCN + "-M.jpg";

  let bookISBN = book.isbn;

  // if (bookISBN) {
  //   setIsbn(bookISBN[0]);
  // }

  //console.log(bookISBN);

  const saveBook = () => {
    //setLibrary($(event.target).parent());
    setLibrary([...library, { book }]);
    console.log(library);
  };

  const publishedYear = book.publish_year;

  return (
    <div className="book">
      <div className="bookCard">
        <h2>{book.title}</h2>
        <div>
          {typeof bookLCCN === "undefined" ? (
            <p>{bookISBN?.length > 1 ? bookISBN[0] : bookISBN}</p>
          ) : (
            <img
              width="200"
              alt={`The Book titled: ${book.title}`}
              src={coverLCCNurl}
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
