import React, { useState } from "react";

const SearchMyLib = ({ searchLib }) => {
  const [searchLibValue, setSearchLibValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchLibValue(e.target.value); //stores search term in searchValue state
    console.log(searchLibValue);
    //searchLib(searchLibValue);
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    searchLib(searchLibValue); //passing back as props
    setSearchLibValue(""); //adding this to automatically clear input field
  };

  return (
    <form className="search">
      <input
        value={searchLibValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input onClick={callSearchFunction} type="submit" value="FILTER" />
    </form>
  );
};

export default SearchMyLib;
