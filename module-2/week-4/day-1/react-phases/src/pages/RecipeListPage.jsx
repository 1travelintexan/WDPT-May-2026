import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecipeListPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.recipes);
        setRecipes(data.recipes);
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      <h1>Recipes Page:</h1>
      <div className="recipe-container">
        {recipes.map((oneRecipe) => {
          return (
            <div className="recipe-card" key={oneRecipe.id}>
              <img src={oneRecipe.image} alt={oneRecipe.name} />
              <Link to={`/one-recipe/${oneRecipe.id}`}>
                <h4>{oneRecipe.name}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default RecipeListPage;
