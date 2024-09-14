import { RecipeCardListProps } from "@/types";
import React from "react";
import RecipeCard from "./RecipeCard";
import AddRecipeFavorite from "./AddRecipeFavorite";

const RecipeCardList: React.FC<RecipeCardListProps> = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <RecipeCard key={recipe.id} recipe={recipe} />
          <AddRecipeFavorite />
        </div>
      ))}
    </div>
  );
};

export default RecipeCardList;
