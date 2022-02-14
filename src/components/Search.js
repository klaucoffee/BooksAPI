import React, { useState } from "react";

const Search = () => {
  const handleSearch = (e) => {};
  return (
    <div>
      <input
        className="searchbar"
        type="text"
        placeholder="Enter a book name"
        onChange={handleSearch}
      ></input>
    </div>
  );
};

export default Search;
