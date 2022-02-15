import React, { useState, useEffect } from "react";
import Search from "./Search";
import MyLib from "./MyLib";
import "./styles.css";

const Books = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState(false);
  const [bookData, setBookData] = useState("");
  const [bookTitle, setBookTitle] = useState("");

  useEffect(() => {
    let bookurl = `http://openlibrary.org/search.json?q=${bookTitle}`;

    const makeApiCall = () => {
      setLoading(true);
      fetch(bookurl)
        .then((response) => response.json())
        .then((data) => {
          if (data.docs[0].title !== "undefined") {
            setBookData(data);
            setBookTitle(data.title);
            console.log("bookdata in useeffect if clause", bookData);
          }
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

  // const myLibrary = bookData.docs.map((el, index) => {
  //   console.log("in my lib", bookData);
  //   return (
  //     <div>
  //       <li>
  //         key={index}
  //         title={el.title}
  //         author={el.author_name}
  //         publish={el.publish.year}
  //         edition={el.edition_count}
  //       </li>
  //     </div>
  //   );
  // });

  // if (bookData.q !== "undefined") {
  //   //if there is data to fetch, it is rendered here

  const handleSubmit = (title) => {
    setBookTitle(title);
    console.log("passed props from search:", title);
    setSearch(title);
  };

  //const arr = bookData.docs;
  // if (arr[0].title !== "undefined") {
  //   console.log("inside if search", arr);
  //   arr.map((el, i) => {
  //     return (
  //       <li>
  //         key={i}
  //         title={el.title}
  //         author={el.author_name}
  //         publish={el.publish_year}
  //         edition={el.edition_count}
  //       </li>
  //     );
  //   });
  // }
  return (
    <div className="container">
      <Search search={search} handleSubmit={handleSubmit} />
    </div>
  );
};
export default Books;
