import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../types";

interface RecipeState {
  recipes: Recipe[];
}

const initialState: RecipeState = {
  recipes: [],
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
  },
});

export const { addRecipe, deleteRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
