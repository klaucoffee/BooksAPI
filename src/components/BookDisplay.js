import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "../App.css";
import Button from "@mui/material/Button";

//takes one prop at a time (book is the same as the prop in app.js)
const BookDisplay = ({ book }) => {
  const [library, setLibrary] = useOutletContext();
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");
  const [resultsButton, setResultsButton] = useState(false);

  let bookLCCN = book.lccn;

  // const coverLCCNurl =
  //   "https://covers.openlibrary.org/b/lccn/" + bookLCCN?.[0] + "-M.jpg";

  const coverLCCNjson =
    "https://covers.openlibrary.org/b/lccn/" + bookLCCN?.[0] + ".json";

  let bookISBN = book.isbn;
  // const coverISBNurl =
  //   "https://covers.openlibrary.org/b/isbn/" + bookISBN?.[0] + "-M.jpg";

  const coverISBNjson =
    "https://covers.openlibrary.org/b/isbn/" + bookISBN?.[0] + ".json";

  let bookOCLC = book.oclc;
  // const coverOCLCurl =
  //   "https://covers.openlibrary.org/b/occn/" + bookOCLC?.[0] + "-M.jpg";

  const coverOCLCjson =
    "https://covers.openlibrary.org/b/oclc/" + bookOCLC?.[0] + ".json";

  useEffect(() => {
    const fetchJSON = (urlJSON) => {
      fetch(urlJSON)
        .then((response) => response.json())
        .then((jsonResponse) => {
          setUrl(jsonResponse.source_url);
        })
        .catch((error) => {
          setStatus("404");
        });
    };
    bookLCCN
      ? fetchJSON(coverLCCNjson)
      : bookISBN
      ? fetchJSON(coverISBNjson)
      : bookOCLC
      ? fetchJSON(coverOCLCjson)
      : fetchJSON("https://covers.openlibrary.org/b/oclc/undefined.json");
  }, []);

  const saveBook = () => {
    //setLibrary($(event.target).parent());
    setResultsButton(true);
    setLibrary([...library, { book }]);
  };

  const removeBook = () => {
    const newList = library.filter((item) => item.book.key !== book.key);
    setLibrary(newList);
  };

  const publishedYear = book.publish_year;

  return (
    <div className="book">
      <h2 style={{ paddingBottom: 10 }}>{book.title}</h2>
      <div>
        {status === "404" ? (
          <div className="placeholder">No Image Available</div>
        ) : (
          <img
            className="img"
            width="200"
            alt={`The Book titled: ${book.title}`}
            src={url}
          />
        )}
      </div>
      <p style={{ padding: 5 }}>
        {book.author_name?.length > 1
          ? `${book.author_name[0]} & ${book.author_name[1]}`
          : book.author_name}
      </p>
      <p style={{ paddingBottom: 10 }}>
        {publishedYear?.length > 1 ? publishedYear[0] : publishedYear}
      </p>
      <div>
        {resultsButton === false ? (
          <Button variant="outlined" onClick={saveBook}>
            Add to My Library!
          </Button>
        ) : (
          <Button className="button" variant="contained" onClick={removeBook}>
            Remove from Library!
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookDisplay;
