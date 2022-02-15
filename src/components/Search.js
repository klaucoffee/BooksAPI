import React, { useState } from "react";

const Search = (props) => {
  const [bookTitle, setBookTitle] = useState("");

  const handleSubmit = (e) => {
    console.log("handleSubmit - bookTitle", bookTitle);
    e.preventDefault();
    props.handleSubmit(bookTitle);
    setBookTitle("");
  };

  const handleSearch = (e) => {
    setBookTitle(e.target.value);
    console.log(bookTitle);
  };
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        value={bookTitle}
        placeholder="Enter the book title or the author"
        onChange={handleSearch}
      ></input>
      <input type="submit" value="find book info" onClick={handleSubmit} />
    </div>
  );
};

export default Search;
