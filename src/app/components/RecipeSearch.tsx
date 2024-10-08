"use client";

import React, { useCallback, useDebugValue, useEffect, useState } from "react";
import { searchRecipe } from "../features/recipes/api";
import { Recipe } from "@/types";
import RecipeCardList from "./RecipeCardList";
import RecipeSearchBar from "./RecipeSearchBar";
import { useDispatch, useSelector } from "react-redux";

export const RecipeSearch: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (ingredients.length === 0) return;

    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await searchRecipe(ingredients.join(", "));
        if (result) {
          setRecipes(result);
          setRecipes((prevRecipes) => [
            ...prevRecipes.map((recipe) => ({ ...recipe, isFavorite: false })),
          ]);
        } else {
          setError("No recipes found");
        }
      } catch (error) {
        setError("Failed to fetch recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [ingredients]);

  const deleteIngredient = useCallback((ingredient: string) => {
    setIngredients((prev) => [...prev.filter((item) => item !== ingredient)]);
  }, []);
  const addIngredient = useCallback((ingredient: string) => {
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      ingredient.trim(),
    ]);
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <RecipeSearchBar
        ingredients={ingredients}
        addIngredient={addIngredient}
        loading={loading}
        deleteIngredient={deleteIngredient}
      />
      {error && <p className="text-red-500">{error}</p>}
      <div>
        {loading ? (
          <p>Loading recipes...</p>
        ) : (
          <RecipeCardList recipes={recipes} />
        )}
      </div>
    </div>
  );
};
