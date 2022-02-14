import React, { useState, useEffect } from "react";
import Search from "./Search";

const Books = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://openlibrary.org/search.json?title=bloom")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading())
      .catch(setError); //.catch deals with rejected cases
  }, []);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (!data) {
    return null;
  } else {
    let booksarr = data.docs;
    console.log(booksarr);
    const booksTable = booksarr.map((el, index) => {
      return (
        <tr className="table-item" key={index}>
          <td> {el.title} </td>
          <td> {el.author_name} </td>
        </tr>
      );
    });

    return (
      <div className="container">
        <Search />
        <table className="table-header">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>{booksTable}</tbody>
        </table>
      </div>
    );
  }
};

export default Books;
