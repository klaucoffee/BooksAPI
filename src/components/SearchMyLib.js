import React, { useState } from "react";
import Button from "@mui/material/Button";

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

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <form className="search" style={{ marginLeft: 10 }}>
      <input
        value={searchLibValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="FILTER" />
      <Button
        style={{ marginLeft: "auto", marginRight: 10 }}
        variant="outlined"
        onClick={refreshPage}
      >
        Reset Library
      </Button>
    </form>
  );
};

export default SearchMyLib;
