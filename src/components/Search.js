import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {};
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Enter a book name"
        onChange={handleSearch}
      ></input>
    </div>
  );
};

export default Search;
