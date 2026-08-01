import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [quoteState, setQuoteState] = useState([]);

  //get the data just once on mounting
  useEffect(() => {
    //use fetch to go get the data
    fetch("https://dummyjson.com/quotes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.quotes);
        setQuoteState(data.quotes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {quoteState.map((oneQuote) => {
        return (
          <div style={{ margin: "10px" }} key={oneQuote.id}>
            <Link to={`/one-quote/${oneQuote.id}`}>
              <p> - {oneQuote.quote}</p>
            </Link>
            <p>Author: {oneQuote.author}</p>
          </div>
        );
      })}
    </div>
  );
};
export default HomePage;
