import React from "react";
import BookDisplay from "./BookDisplay";
import { useOutletContext } from "react-router-dom";
import Fav from "./Fav";

const MyLib = () => {
  const [library, setLibrary] = useOutletContext();
  console.log("library", library);

  return (
    <div className="books">
      {library.map((el, index) => {
        return <Fav key={index} book={el.book} />;
      })}
    </div>
  );
};

export default MyLib;
