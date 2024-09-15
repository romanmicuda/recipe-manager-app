// src/app/recipes/[id]/page.tsx

import React from "react";
import axios from "axios";
import { RecipeDetailProps } from "@/types";
import { fetchRecipe } from "@/app/features/recipes/api";

const RecipeDetail: React.FC<RecipeDetailProps> = async ({ params }: any) => {
  const { id } = params;
  const recipe = await fetchRecipe(id);

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />

      <h2>Ingredients</h2>
      <ul>
        {recipe.extendedIngredients.map((ingredient: any, index: number) => (
          <li key={index}>
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
