import React, { useState, useEffect } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `http://openlibrary.org/search.json?title=bloom` //need to say title=${book.title}
      );
      console.log(res.data);
    };
    fetchBooks();
  }, []);

  return <div>Books</div>;
};

export default Books;
