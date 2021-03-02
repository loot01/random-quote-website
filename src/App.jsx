import GlobalStyle from "./globalStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegenerateBtn from "./components/RegenerateBtn";
import Quote from "./components/Quote";
import QuoteDetails from "./components/QuoteDetails";
import AuthorQuotes from "./components/AuthorQuotes";
import Footer from "./components/Footer";
function App() {
  const [quote, setQuote] = useState({
    quoteText: "",
    quoteAuthor: "",
    quoteGenre: "",
  });

  const fetchQuote = async () => {
    setQuote({
      quoteText: "",
      quoteAuthor: "",
      quoteGenre: "",
    });
    const results = await axios.get(
      "https://quote-garden.herokuapp.com/api/v3/quotes/random"
    );
    const fetchedQuote = results.data.data[0];
    setQuote(fetchedQuote);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <Router>
        <RegenerateBtn fetch={fetchQuote} />
        <Switch>
          <Route path="/author/:author">
            <AuthorQuotes />
          </Route>
          <Route path="/">
            <Quote text={quote.quoteText} />
            <QuoteDetails author={quote.quoteAuthor} genre={quote.quoteGenre} />
          </Route>
        </Switch>
        <Footer />
      </Router>

      <GlobalStyle />
    </div>
  );
}

export default App;
