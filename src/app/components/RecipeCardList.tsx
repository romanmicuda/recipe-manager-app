import { RecipeCardListProps } from "@/types";
import React from "react";
import RecipeCard from "./RecipeCard";
import AddDeleteRecipeFavorite from "./AddDeleteRecipeFavorite";

import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe } from "../../redux/recipeSlice";
import { Recipe } from "../../types";

const RecipeCardList: React.FC<RecipeCardListProps> = ({ recipes }) => {
  return (
    <div>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <RecipeCard key={recipe.id} recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCardList;
