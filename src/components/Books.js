import React, { useState, useEffect } from "react";
import Search from "./Search";
import "./styles.css";

const Books = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  console.log(search);

  //FIX: restrict data obtained from API. think of how to narrow down selection
  let url = "https://openlibrary.org/search.json?author=bloom";
  useEffect(() => {
    setLoading(true);
    fetch(url)
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
    const booksTable = booksarr.map((el, index) => {
      return (
        <tr className="table-item" key={index}>
          <td> {el.title} </td>
          <td> {el.author_name} </td>
        </tr>
      );
    });

    const searchHandler = (search) => {
      setSearch(search);
      if (search !== "") {
        const bookList = booksarr.filter((book) => {
          //FIX: find out how to filter for author anbd title
          return Object.values(book)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase());
        });
        setSearchResults(bookList);
      } else {
        setSearchResults(booksarr);
      }
    };

    const booksResults = searchResults.map((el, index) => {
      return (
        <tr className="table-item" key={index}>
          <td> {el.title} </td>
          <td> {el.author_name} </td>
        </tr>
      );
    });
    console.log(search);
    console.log(booksResults);

    return (
      <div className="container">
        <Search term={search} searchKeyword={searchHandler} />

        {search.length < 1 ? (
          <table className="table-header">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>{booksTable}</tbody>
          </table>
        ) : (
          <table className="table-header">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>{booksResults}</tbody>
          </table>
        )}
      </div>
    );
  }
};

export default Books;
