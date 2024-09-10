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
      if (result) {
        setRecipes(result);
      } else {
        setError("No recipes found");
      }
    } catch (error) {
      setError("Failed to fetch recipes");
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
          placeholder="Enter ingredients"
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {loading ? (
          <p>Loading recipes...</p>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        )}
      </div>
    </>
  );
};
