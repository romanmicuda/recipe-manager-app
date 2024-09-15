import {
  removeIngredientFromShoppingList,
  togglePurchasedIngredient,
} from "@/redux/recipeSlice";
import { Ingredient } from "@/types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface ShoppingListProps {
  shoppingList: Ingredient[];
}

export const ShoppingList: React.FC = () => {
  const dispatch = useDispatch();

  const shoppingList = useSelector(
    (state: { recipes: { shoppingList: Ingredient[] } }) =>
      state.recipes.shoppingList
  );

  const aggregatedShoppingList = shoppingList.reduce((acc, ingredient) => {
    const key = `${ingredient.name}-${ingredient.unit}`;
    if (!acc[key]) {
      acc[key] = { ...ingredient };
    } else {
      acc[key].amount += ingredient.amount;
    }
    return acc;
  }, {} as { [key: string]: Ingredient });

  const finalShoppingList = Object.values(aggregatedShoppingList);

  const handleDeleteIngredients = (ingredientName: string) => {
    dispatch(removeIngredientFromShoppingList(ingredientName));
  };

  const handleTogglePurchased = (index: number) => {
    dispatch(togglePurchasedIngredient(index));
  };

  return (
    <div>
      <h1>Shopping List</h1>
      {finalShoppingList.map((ingredient, index) => (
        <div>
          <div key={index}>
            <p
              onClick={() => handleTogglePurchased(index)}
              style={{
                cursor: "pointer",
                textDecoration: ingredient.purchased ? "line-through" : "none",
              }}
            >
              {ingredient.name}
            </p>
            <p>{ingredient.amount}</p>
            <p>{ingredient.unit}</p>
          </div>
          <button onClick={() => handleDeleteIngredients(ingredient.name)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingList;
