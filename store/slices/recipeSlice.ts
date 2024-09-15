import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "@/types";

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
    removeRecipe(state, action: PayloadAction<number>) {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.id !== action.payload
      );
    },
    toggleFavorite(state, action: PayloadAction<number>) {
      const index = state.recipes.findIndex(
        (recipe) => recipe.id === action.payload
      );
      if (index !== -1) {
        state.recipes[index].isFavorite = !state.recipes[index].isFavorite;
      }
    },
  },
});

export const { toggleFavorite, addRecipe, removeRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
