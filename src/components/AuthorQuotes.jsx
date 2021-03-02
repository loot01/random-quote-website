import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Quote from "./Quote";

const AuthorQuotes = () => {
  const [quotes, setQuotes] = useState([
    {
      quoteText: "",
    },
  ]);
  const { author = "hi" } = useParams();
  useEffect(() => {
    axios
      .get(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`)
      .then((res) => {
        setQuotes(res.data.data);
      });
  }, []);
  return (
    <div>
      <h1
        style={{
          color: "#333333",
          fontWeight: 700,
          fontSize: "36px",
          marginTop: "48px",
          marginLeft: "416px",
        }}
      >
        {author}
      </h1>
      {quotes.map((quote) => (
        <Quote text={quote.quoteText} key={quote._id} />
      ))}
    </div>
  );
};

export default AuthorQuotes;
