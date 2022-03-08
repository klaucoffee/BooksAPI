import React, { useState } from "react";
import BookDisplay from "./BookDisplay";
import { useOutletContext } from "react-router-dom";
import Fav from "./Fav";
import Button from "@mui/material/Button";

import SearchMyLib from "./SearchMyLib";

const MyLib = () => {
  const [library, setLibrary] = useOutletContext();
  const [tempLib, setTempLib] = useState("");

  const searchLib = (searchLibValue) => {
    if (searchLibValue !== "") {
      setTempLib(library);
      const filterList = library.filter((i) => {
        //.includes
        return i.book.title
          .toLowerCase()
          .includes(searchLibValue.toLowerCase()); //what is i want to search by word instead of whole titles
      });

      setLibrary(filterList);
    }
  };

  const handleClick = () => {
    setLibrary(tempLib);
    setTempLib("");
  };

  return (
    <div>
      <h2 style={{ padding: 10, textAlign: "left" }}>My Books</h2>
      <SearchMyLib searchLib={searchLib} />
      <div className="search">
        {tempLib !== "" ? (
          <Button onClick={handleClick}>Clear filter</Button>
        ) : (
          <div></div>
        )}
      </div>

      <div className="books">
        {library.map((el, index) => {
          return <Fav key={index} book={el.book} />;
        })}
      </div>
    </div>
  );
};

export default MyLib;
