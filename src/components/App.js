import BookDisplay from "./BookDisplay";
import Search from "./Search";

const demo_url = `https://openlibrary.org/search.json?q="one+day+in+the+life"`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(demo_url)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setBooks(jsonResponse.docs);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    let book_url = "https://openlibrary.org/search.json?q=" + searchValue;

    fetch(book_url)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log("searchValue", searchValue);
        console.log(book_url);
        console.log(jsonResponse.numFound);
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
      });
  };

  return (
    <div className="App">
      <Search search={search} />
      <BookDisplay />
    </div>
  );
};

export default App;
