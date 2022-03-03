import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import BookDisplay from "./BookDisplay";
import Search from "./Search";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null); //set Message

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);
    //console.log("search", movies); //TESTING
    let book_url = "https://openlibrary.org/search.json?q=" + searchValue;
    //`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`
    fetch(book_url)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.numFound > 500) {
          //too many responses
          setErrorMessage(
            "Too many responses - please narrow down search terms"
          );
          setLoading(false);
        } else if (jsonResponse.numFound > 0) {
          //if less than 500 but more than 0
          setBooks(jsonResponse.docs);
          setLoading(false);
        } else {
          setErrorMessage("Invalid Query");
          setLoading(false);
        }
      })
      .catch((error) => {
        setErrorMessage("There is an error");
      });
  };

  //not sure why refreshpage is not working
  const refreshPage = () => {
    window.location.reload();
    console.log("running");
  };

  console.log(books);
  //multiple ternery operators
  //   <Header text="Curate Your Library" onClick={refreshPage} />
  return (
    <div className="App">
      <Search search={search} />
      <p className="App-intro">
        The World Belongs to those who Read - Rick Holland
      </p>
      <div>
        <div className="books">
          {loading && !errorMessage ? (
            <div>Loading...</div>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            books.map((el, index) => {
              return <BookDisplay key={`${index}-${el.title}`} book={el} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
