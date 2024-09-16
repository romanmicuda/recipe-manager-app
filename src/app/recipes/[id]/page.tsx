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
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
        {recipe.title}
      </h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-auto mb-6 rounded-lg shadow-xl"
      />

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gradient bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
          Ingredients
        </h2>
        <ul className="list-disc list-inside pl-5 space-y-2">
          {recipe.extendedIngredients.map((ingredient: any, index: number) => (
            <li key={index} className="text-lg text-gray-700">
              <span className="font-medium">
                {ingredient.amount} {ingredient.unit}
              </span>{" "}
              {ingredient.name}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 text-gradient bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
          Instructions
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {recipe.instructions}
        </p>
      </section>
    </div>
  );
};

export default RecipeDetail;
