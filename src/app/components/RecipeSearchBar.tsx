import { RecipeSearchBarProps } from "@/types";
import React, { useState } from "react";

const RecipeSearchBar: React.FC<RecipeSearchBarProps> = ({
  ingredients,
  addIngredient,
  loading,
  deleteIngredient,
}) => {
  const [ingredient, setIngredient] = useState<string>("");

  const handleSearch = () => {
    addIngredient(ingredient);
    setIngredient("");
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex">
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter ingredients"
          className="border p-2 rounded w-full m-3"
        />
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-gradient-start to-gradient-end text-white py-2 px-4 m-3 rounded-lg shadow-button-hover hover:bg-opacity-80 transition"
        >
          Search
        </button>
      </div>
      <div>
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b"
          >
            <p>{ingredient}</p>
            <button
              onClick={() => deleteIngredient(ingredient)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearchBar;
