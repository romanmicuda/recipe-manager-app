import { Recipe, RecipeCardProps } from "@/types";
import Link from "next/link";
import React from "react";
import AddDeleteRecipeFavorite from "./AddDeleteRecipeFavorite";
import AddShoppingList from "./AddIngredientShoppingList";

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4 mb-4 bg-white hover:shadow-xl">
      <Link href={`/recipes/${recipe.id}`} className="block">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-40 object-cover mb-4 rounded"
        />
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold text-gray-800 truncate">
            {recipe.title}
          </h3>
        </div>
      </Link>

      <div className="mt-4 flex justify-between items-center">
        <AddShoppingList id={recipe.id} />
        <AddDeleteRecipeFavorite recipe={recipe} />
      </div>
    </div>
  );
};

export default RecipeCard;
