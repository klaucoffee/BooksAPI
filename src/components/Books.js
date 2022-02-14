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
    console.log(data);
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
    return (
      <div className="container">
        <ul>
          {booksarr.map((el, index) => {
            return <li key={index}>title = {el.title}</li>;
          })}
        </ul>
      </div>
    );
  }
};
export default Books;
