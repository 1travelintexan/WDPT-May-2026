import { useEffect, useState } from "react";

const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRandomQuote(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Quote: {randomQuote.quote}</h2>
      <h3>Author -{randomQuote.author}</h3>
    </div>
  );
};
export default RandomQuote;
