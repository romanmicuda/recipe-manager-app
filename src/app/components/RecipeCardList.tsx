import { RecipeCardListProps } from "@/types";
import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeCardList: React.FC<RecipeCardListProps> = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeCardList;
