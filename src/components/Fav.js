import { useOutletContext } from "react-router-dom";
import "../App.css";

//takes one prop at a time (book is the same as the prop in app.js)
const Fav = ({ index, book }) => {
  //const [isbn, setIsbn] = useState([]);

  const [library, setLibrary] = useOutletContext();

  const removeBook = () => {
    const newList = library.filter((item) => item.book.key !== book.key);
    setLibrary(newList);
  };

  const publishedYear = book.publish_year;

  return (
    <div className="book">
      <div className="bookCard">
        <h2>{book.title}</h2>
        <p>
          {book.author_name?.length > 1
            ? `${book.author_name[0]} & ${book.author_name[1]}`
            : book.author_name}
        </p>
        <p>{publishedYear?.length > 1 ? publishedYear[0] : publishedYear}</p>

        <button type="button" onClick={removeBook}>
          Remove from LIbrary!
        </button>
      </div>
    </div>
  );
};

export default Fav;
