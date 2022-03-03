import { useOutletContext } from "react-router-dom";
import "../App.css";

//takes one prop at a time (book is the same as the prop in app.js)
const Fav = ({ index, book }) => {
  //const [isbn, setIsbn] = useState([]);

  const [library, setLibrary] = useOutletContext();

  let bookLCCN = book.lccn;

  const coverLCCNurl =
    "https://covers.openlibrary.org/b/lccn/" +
    bookLCCN?.[0] +
    "-M.jpg?default=false";

  let bookISBN = book.isbn;
  const coverISBNurl =
    "https://covers.openlibrary.org/b/isbn/" +
    bookISBN?.[0] +
    "-M.jpg?default=false";

  let bookOCLC = book.oclc;
  const coverOCLCurl =
    "https://covers.openlibrary.org/b/occn/" +
    bookOCLC?.[0] +
    "-M.jpg?default=false";

  const removeBook = () => {
    const newList = library.filter((item) => item.book.key !== book.key);
    setLibrary(newList);
  };

  const publishedYear = book.publish_year;

  const randomDog = () => {
    fetch("https://random.dog/woof.json")
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
      });
  };

  return (
    <div className="book">
      <div className="bookCard">
        <h2>{book.title}</h2>
        <div>
          {!bookLCCN && !bookISBN && !bookOCLC ? (
            <p>all undefined</p>
          ) : bookLCCN ? (
            <img
              width="200"
              alt={`The Book titled: ${book.title}`}
              src={coverLCCNurl}
            />
          ) : bookISBN ? (
            <img
              width="200"
              alt={`The Book titled: ${book.title}`}
              src={coverISBNurl}
            />
          ) : (
            <img
              width="200"
              alt={`The Book titled: ${book.title}`}
              src={coverOCLCurl}
            />
          )}
        </div>
        <p>
          {book.author_name?.length > 1
            ? `${book.author_name[0]} & ${book.author_name[1]}`
            : book.author_name}
        </p>
        <p>{publishedYear?.length > 1 ? publishedYear[0] : publishedYear}</p>
        <button type="button" onClick={removeBook}>
          Remove from Library!
        </button>
      </div>
    </div>
  );
};

export default Fav;
