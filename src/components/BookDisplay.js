import { useOutletContext } from "react-router-dom";
import "../App.css";

//takes one prop at a time (book is the same as the prop in app.js)
const BookDisplay = ({ book }) => {
  //const [isbn, setIsbn] = useState([]);
  //<p>{bookISBN?.length > 1 ? bookISBN[0] : bookISBN}</p>

  const [library, setLibrary] = useOutletContext();

  const saveBook = () => {
    //setLibrary($(event.target).parent());
    setLibrary([...library, { book }]);
    console.log(library);
  };

  const publishedYear = book.publish_year;

  return (
    <div className="book">
      <h2>{book.title}</h2>
      <p>
        {book.author_name?.length > 1
          ? `${book.author_name[0]} & ${book.author_name[1]}`
          : book.author_name}
      </p>
      <p>{publishedYear?.length > 1 ? publishedYear[0] : publishedYear}</p>
      <button type="button" onClick={saveBook}>
        Add to My Library!
      </button>
    </div>
  );
};

export default BookDisplay;
