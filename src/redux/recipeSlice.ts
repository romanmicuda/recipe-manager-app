import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ingredient, Recipe, RecipeDetail } from "../types";

interface RecipeState {
  recipes: Recipe[];
  customRecipeDetails: RecipeDetail[];
  shoppingList: Ingredient[];
}

const initialState: RecipeState = {
  recipes: [],
  customRecipeDetails: [],
  shoppingList: [],
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
    addIngredientsToShoppingList(state, action: PayloadAction<Ingredient[]>) {
      const ingredients = action.payload;
      state.shoppingList = [...state.shoppingList, ...(ingredients || [])];
    },
    removeIngredientFromShoppingList(state, action: PayloadAction<string>) {
      state.shoppingList = state.shoppingList.filter(
        (ingredient) => ingredient.name !== action.payload
      );
    },
  },
});

export const {
  addRecipe,
  addCustomRecipe,
  deleteRecipe,
  deleteCustomRecipe,
  addIngredientsToShoppingList,
  removeIngredientFromShoppingList,
} = recipeSlice.actions;

export default recipeSlice.reducer;
