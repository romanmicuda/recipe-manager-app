import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { RootState } from "../../../store/rootReducer";
import { addRecipe } from "../../../store/slices/recipeSlice";
import { AddRecipeFavoriteProps, Recipe } from "../../types";
import React from "react";

const AddRecipeFavorite: React.FC<AddRecipeFavoriteProps> = ({ recipe }) => {
  const dispatch: AppDispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  const handleAddRecipe = (recipe: Recipe) => {
    dispatch(addRecipe(recipe));
  };
  return (
    <div>
      <button onClick={() => handleAddRecipe(recipe)}>Add to Favorite</button>
    </div>
  );
};

export default AddRecipeFavorite;
