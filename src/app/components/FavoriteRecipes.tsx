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
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Favorite Recipes</h1>
      <RecipeCardList recipes={favoriteRecipes} />
    </div>
  );
};

export default FavoriteRecipes;
