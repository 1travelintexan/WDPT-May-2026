import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetailPage = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
      })
      .catch((err) => console.log(err));
  }, [recipeId]);
  return (
    <div>
      <h1>{recipe.name}'s Page</h1>
      <img src={recipe.image} alt={recipe.name} />
    </div>
  );
};
export default RecipeDetailPage;
