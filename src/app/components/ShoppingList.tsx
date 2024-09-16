import {
  removeIngredientFromShoppingList,
  togglePurchasedIngredient,
} from "@/redux/recipeSlice";
import { Ingredient } from "@/types";
import React from "react";
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
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-gradient-start to-gradient-end text-white">
          <tr>
            <th className="py-2 px-4 text-left w-1/2">Ingredient</th>
            <th className="py-2 px-4 text-left w-1/4">Amount</th>
            <th className="py-2 px-4 text-left w-1/4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {finalShoppingList.map((ingredient, index) => (
            <tr
              key={index}
              className={`hover:bg-gray-100 ${
                ingredient.purchased ? "line-through" : ""
              }`}
            >
              <td
                className="py-2 px-4 cursor-pointer"
                onClick={() => handleTogglePurchased(index)}
              >
                {ingredient.name}
              </td>
              <td className="py-2 px-4">
                {ingredient.amount} {ingredient.unit}
              </td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleDeleteIngredients(ingredient.name)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingList;
