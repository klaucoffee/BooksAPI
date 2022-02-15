import React, { useState, useEffect } from "react";
import Search from "./Search";
import MyLib from "./MyLib";
import "./styles.css";

const Books = () => {
  // const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [bookData, setBookData] = useState("");
  const [bookTitle, setBookTitle] = useState("");

  //FIX: restrict data obtained from API. think of how to narrow down selection
  //STOPPED HERE
  useEffect(() => {
    console.log("useEffect running with book title:", bookTitle);

    let bookurl = `https://openlibrary.org/search.json?q=${bookTitle}`;

    const makeApiCall = () => {
      setLoading(true);
      fetch(bookurl)
        .then((response) => response.json())
        .then((data) => {
          setBookData(data);
          setBookTitle(data.title);
          console.log("bookData", bookData);
          console.log(bookurl);
        })
        //setBookTitle(data.Title)
        .then(() => setLoading())
        .catch(setError); //.catch deals with rejected cases
    };
    makeApiCall();
  }, [bookTitle]);

  // if (loading) {
  //   return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  // }

  // if (error) {
  //   return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // }

  // if (!data) {
  //   return null;
  // } else {
  //   //if there is data to fetch, it is rendered here
  //   let booksarr = data.docs;
  //   const booksTable = booksarr.map((el, index) => {
  //     return (
  //       <tr className="table-item" key={index}>
  //         <td> {el.title} </td>
  //         <td> {el.author_name} </td>
  //       </tr>
  //     );
  //   });

  const handleSubmit = (title) => {
    setBookTitle(title);
    //setSearch(search);
    // if (search !== "") {
    //   //booksList is a filter to search for the books
    //   const bookList = booksarr.filter((book) => {
    //     //FIX: find out how to filter for author anbd title
    //     return Object.values(book)
    //       .join(" ")
    //       .toLowerCase()
    //       .includes(search.toLowerCase());
    //   });
    //   setSearchResults(bookList);
    // } else {
    //   setSearchResults(booksarr);
    // }
  };

  //   const booksResults = searchResults.map((el, index) => {
  //     return (
  //       <tr className="table-item" key={index}>
  //         <td> {el.title} </td>
  //         <td> {el.author_name} </td>
  //       </tr>
  //     );
  //   });
  //   console.log(search);
  //   console.log(booksResults);

  return (
    <div className="container">
      <Search handleSubmit={handleSubmit} />

      {search.length < 1 ? <MyLib bookdata={bookData} /> : null}
    </div>
  );
};

export default Books;
