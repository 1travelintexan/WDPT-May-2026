import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import QuoteDetailPage from "./pages/QuoteDetailPage";
import RandomQuote from "./pages/RandomQuote";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* dynamic route example  */}
        <Route path="/one-recipe/:recipeId" element={<RecipeDetailPage />} />
        <Route path="/one-quote/:quoteId" element={<QuoteDetailPage />} />
        <Route path="/random-quote" element={<RandomQuote />} />
        <Route path="/recipes" element={<RecipeListPage />} />
      </Routes>
    </>
  );
}

export default App;
