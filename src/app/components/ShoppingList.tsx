import { Ingredient } from "@/types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ShoppingList() {
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

  return (
    <div>
      <h1>Shopping List</h1>
      {finalShoppingList.map((ingredient, index) => (
        <div key={index}>
          <p>{ingredient.name}</p>
          <p>{ingredient.amount}</p>
          <p>{ingredient.unit}</p>
        </div>
      ))}
    </div>
  );
}

export default ShoppingList;
