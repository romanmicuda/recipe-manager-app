import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe, RecipeDetail } from "../types";

interface RecipeState {
  recipes: Recipe[];
  customRecipeDetails: RecipeDetail[];
}

const initialState: RecipeState = {
  recipes: [],
  customRecipeDetails: [],
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe(state, action: PayloadAction<Recipe>) {
      state.recipes.push(action.payload);
    },
    deleteRecipe(state, action: PayloadAction<Recipe>) {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
    addCustomRecipe(state, action: PayloadAction<RecipeDetail>) {
      state.customRecipeDetails.push(action.payload);
    },
    deleteCustomRecipe(state, action: PayloadAction<RecipeDetail>) {
      state.customRecipeDetails = state.customRecipeDetails.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
  },
});

export const { addRecipe, addCustomRecipe, deleteRecipe, deleteCustomRecipe } =
  recipeSlice.actions;

export default recipeSlice.reducer;
