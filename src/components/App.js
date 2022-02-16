import BookDisplay from "./BookDisplay";

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

  return (
    <div className="App">
      <BookDisplay />
    </div>
  );
};

export default App;
