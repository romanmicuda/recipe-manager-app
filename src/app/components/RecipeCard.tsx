import { Recipe, RecipeCardProps } from "@/types";
import Link from "next/link";
import React from "react";
import AddDeleteRecipeFavorite from "./AddDeleteRecipeFavorite";

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div>
      <Link href={`/recipes/${recipe.id}`}>
        <p>
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
        </p>
      </Link>
      <AddDeleteRecipeFavorite recipe={recipe} />
    </div>
  );
};

export default RecipeCard;
