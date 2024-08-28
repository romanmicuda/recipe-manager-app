"use client";

import React, { useEffect, useState } from "react";
import { searchRecipe } from "../features/recipes/api";
import RecipeCard from "./RecipeCard";
import { Recipe } from "@/types";

export const RecipeSearch: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await searchRecipe(ingredients);
      setRecipes(result);
    } catch (error) {
      setError("Failed fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button onClick={handleSearch}>
          {loading ? "Searching" : "Search"}
        </button>
      </div>
      {error && <p>error</p>}
      <div>
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </>
  );
};
