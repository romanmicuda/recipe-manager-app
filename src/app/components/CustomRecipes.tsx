import React from "react";
import RecipeCardList from "./RecipeCardList";
import { RecipeDetail } from "@/types";
import AddCustomRecipe from "./AddCustomRecipe";
import { useSelector } from "react-redux";

const FavoriteRecipes: React.FC = () => {
  const customRecipesDetails = useSelector(
    (state: { recipes: { customRecipeDetails: RecipeDetail[] } }) =>
      state.recipes.customRecipeDetails
  );

  const customRecipes = customRecipesDetails
    .filter((recipeDetail) => recipeDetail.image !== null)
    .map((recipeDetail) => ({
      id: recipeDetail.id,
      title: recipeDetail.title,
      image: recipeDetail.image as string,
    }));

  return (
    <div>
      <h1>Custom Recipes</h1>
      <RecipeCardList recipes={customRecipes} />
      <AddCustomRecipe />
    </div>
  );
};

export default FavoriteRecipes;
