"use client";

import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe } from "@/redux/recipeSlice";
import { Ingredient, ProfileProps, Recipe } from "@/types";
import React, { useState } from "react";
import RecipeCardList from "@/app/components/RecipeCardList";
import FavoriteRecipes from "@/app/components/FavoriteRecipes";
import CustomRecipes from "@/app/components/CustomRecipes";
import ShoppingList from "@/app/components/ShoppingList";

export const Profile: React.FC<ProfileProps> = () => {
  const [activeTab, setActiveTab] = useState<
    "favorites" | "custom" | "shopping"
  >("favorites");
  const favoriteRecipes = useSelector(
    (state: { recipes: { recipes: Recipe[] } }) => state.recipes.recipes
  );

  const handleTabChange = (tab: "favorites" | "custom" | "shopping") => {
    setActiveTab(tab);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Your Profile</h1>
      <br />
      <p className="mb-6">
        Welcome to your profile page! Here, you can manage your saved recipes,
        and keep track of your culinary journey. Browse through all the recipes
        you've saved so far. Whether it's a family favorite or a new discovery,
        they're all here for you to revisit and enjoy anytime.
      </p>
      <br />
      <nav className="w-full mb-8 flex space-x-4 p-5 rou">
        <button
          onClick={() => handleTabChange("favorites")}
          className={`py-2 px-4 rounded-lg ${
            activeTab === "favorites"
              ? "bg-gradient-to-r from-gradient-start to-gradient-end text-white"
              : "bg-gray-200"
          }`}
        >
          Favorite Recipes
        </button>
        <button
          onClick={() => handleTabChange("custom")}
          className={`py-2 px-4 rounded-lg ${
            activeTab === "custom"
              ? "bg-gradient-to-r from-gradient-start to-gradient-end text-white"
              : "bg-gray-200"
          }`}
        >
          Custom Recipes
        </button>
        <button
          onClick={() => handleTabChange("shopping")}
          className={`py-2 px-4 rounded-lg ${
            activeTab === "shopping"
              ? "bg-gradient-to-r from-gradient-start to-gradient-end text-white"
              : "bg-gray-200"
          }`}
        >
          Shopping List
        </button>
      </nav>

      <section>
        {activeTab === "favorites" && (
          <FavoriteRecipes favoriteRecipes={favoriteRecipes} />
        )}
        {activeTab === "custom" && <CustomRecipes />}
        {activeTab === "shopping" && <ShoppingList />}
      </section>
    </div>
  );
};

export default Profile;
