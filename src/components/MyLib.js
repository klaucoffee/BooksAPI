import React, { useState } from "react";
import BookDisplay from "./BookDisplay";
import { useOutletContext } from "react-router-dom";
import Fav from "./Fav";
import SearchMyLib from "./SearchMyLib";

const MyLib = () => {
  const [library, setLibrary] = useOutletContext();
  const [tempLib, setTempLib] = useState([]);

  const searchLib = (searchLibValue) => {
    if (searchLibValue !== "") {
      setTempLib(library);
      const filterList = library.filter((i) => {
        return i.book.title.toLowerCase() === searchLibValue.toLowerCase();
      });

      setLibrary(filterList);
    }
  };

  const handleClick = () => {
    setLibrary(tempLib);
  };

  return (
    <div>
      <SearchMyLib searchLib={searchLib} />
      <div className="search">
        {tempLib !== [] ? (
          <button onClick={handleClick}>Clear filter</button>
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
