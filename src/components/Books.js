import React, { useState, useEffect } from "react";
import Search from "./Search";
import MyLib from "./MyLib";
import "./styles.css";

const Books = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState(false);
  const [bookData, setBookData] = useState([]);
  const [bookTitle, setBookTitle] = useState("");

  useEffect(() => {
    let bookurl = `http://openlibrary.org/search.json?q=${bookTitle}`;

    const makeApiCall = () => {
      setLoading(true);
      fetch(bookurl)
        .then((response) => response.json())
        .then((data) => {
          setBookData(data);
          setBookTitle(data.title);
          console.log("bookdata in useeffect if clause", bookData);
        })
        .then(() => setLoading())
        .catch(setError);
    };
    makeApiCall();
  }, [bookTitle]);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  console.log(search);
  if (search) {
    console.log("line 41", bookData.docs); //this can't work because keep resetting state with new query
    if (bookData.docs[0].title !== "undefined") {
      console.log("inside if search", bookData.docs);
      bookData.docs.map((el, i) => {
        return (
          <MyLib>
            key={i}
            title={el.title}
            author={el.author_name}
            publish={el.publish_year}
            edition={el.edition_count}
          </MyLib>
        );
      });
    }
  }

  const handleSubmit = (title) => {
    setBookTitle(title);
    console.log("passed props from search:", title);
    setSearch(true);
  };

  return (
    <div className="container">
      <Search search={search} handleSubmit={handleSubmit} />
    </div>
  );
};
export default Books;
