"use client";

import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe } from "@/redux/recipeSlice";
import { Ingredient, ProfileProps, Recipe } from "@/types";
import React from "react";
import RecipeCardList from "@/app/components/RecipeCardList";
import FavoriteRecipes from "@/app/components/FavoriteRecipes";
import CustomRecipes from "@/app/components/CustomRecipes";
import ShoppingList from "@/app/components/ShoppingList";

export const Profile: React.FC<ProfileProps> = () => {
  const favoriteRecipes = useSelector(
    (state: { recipes: { recipes: Recipe[] } }) => state.recipes.recipes
  );

  return (
    <div>
      <h1>Your Profile</h1>
      <p>
        Welcome to your profile page! Here, you can manage your saved recipes,
        update your personal information, and keep track of your culinary
        journey.
      </p>

      <section>
        <h2>🍴 Your Saved Recipes</h2>
        <p>
          Browse through all the recipes you've saved so far. Whether it's a
          family favorite or a new discovery, they're all here for you to
          revisit and enjoy anytime.
        </p>
      </section>
      <FavoriteRecipes favoriteRecipes={favoriteRecipes} />
      <CustomRecipes />
      <ShoppingList />
    </div>
  );
};

export default Profile;
