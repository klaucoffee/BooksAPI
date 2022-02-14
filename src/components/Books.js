import React, { useState, useEffect } from "react";

const Books = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://openlibrary.org/search.json?title=bloom")
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
        <tr key={index}>
          <td> {el.title} </td>
          <td> {el.author_name} </td>
        </tr>
      );
    });

    return (
      <div className="container">
        <table>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
          {booksTable}
        </table>
      </div>
    );
  }
};

export default Books;
