import React from "react";

const Search = ({ term, searchKeyword }) => {
  const handleSearch = (e) => {
    searchKeyword(e.target.value);
  };
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        value={term}
        placeholder="Enter the book title or the author"
        onChange={handleSearch}
      ></input>
    </div>
  );
};

export default Search;
