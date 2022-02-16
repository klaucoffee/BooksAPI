import React from "react";

//deault needed because on first render, there are no images
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

//takes one prop at a time (book is the same as the prop in app.js)
const BookDisplay = ({ book }) => {
  // const poster =
  //   movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  let bookLCCN = book.lccn;

  const coverurl =
    "https://covers.openlibrary.org/b/lccn/" + bookLCCN + "-M.jpg";

  return (
    <div className="book">
      <h2>{book.title}</h2>
      <div>
        <img
          width="200"
          alt={`The Book titled: ${book.title}`}
          src={coverurl}
        />
      </div>
      <p>({book.publish_year})</p>
    </div>
  );
};

export default BookDisplay;
