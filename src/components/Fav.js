import React from "react";

const Fav = ({ book }) => {
  console.log(book);

  return (
    <div>
      <h1>{book.book.title}</h1>
    </div>
  );
};

export default Fav;
