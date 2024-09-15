import React from "react";
import RecipeCardList from "./RecipeCardList";
import { Recipe } from "@/types";

export interface FavoriteRecipesProps {
  favoriteRecipes: Recipe[];
}
const FavoriteRecipes: React.FC<FavoriteRecipesProps> = ({
  favoriteRecipes,
}) => {
  return (
    <div>
      <h1>Favorite recipes</h1>
      <RecipeCardList recipes={favoriteRecipes} />
    </div>
  );
};

export default FavoriteRecipes;
