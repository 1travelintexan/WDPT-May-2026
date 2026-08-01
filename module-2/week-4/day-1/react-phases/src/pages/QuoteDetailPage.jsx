import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuoteDetailPage = () => {
  const [quote, setQuote] = useState({});
  const { quoteId } = useParams();
  useEffect(() => {
    async function getOneQuote() {
      try {
        const response = await fetch(`https://dummyjson.com/quotes/${quoteId}`);
        const oneQuote = await response.json();
        setQuote(oneQuote);
      } catch (error) {
        console.log(error);
      }
    }
    getOneQuote();
  }, [quoteId]);

  return (
    <div>
      <h2>Quote: {quote.quote}</h2>
      <h3>Author -{quote.author}</h3>
    </div>
  );
};
export default QuoteDetailPage;
