import { addIngredientsToShoppingList } from "@/redux/recipeSlice";
import { Ingredient } from "@/types";
import React, { ReactHTML, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe } from "../features/recipes/api";

interface AddIngredientShoppingListProps {
  id: number;
}

export const AddIngredientShoppingList: React.FC<
  AddIngredientShoppingListProps
> = ({ id }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(1);

  const handleAddIngredients = async (amount: number) => {
    const recipe = await fetchRecipe(id);

    const modifiedIngredients = recipe.extendedIngredients.map(
      (ingredient: Ingredient) => ({
        ...ingredient,
        amount: ingredient.amount * amount,
      })
    );

    dispatch(addIngredientsToShoppingList(modifiedIngredients));
    setAmount(1);
  };

  const handleChangeAmount = (amount: string) => {
    setAmount(Number(amount));
  };
  return (
    <div className="flex items-center space-x-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => handleChangeAmount(e.target.value)}
        className="border border-gray-300 p-1.5 rounded-md w-20 text-center"
        min="1"
      />

      <button
        onClick={() => handleAddIngredients(amount)}
        className="bg-gradient-to-r from-gradient-start to-gradient-end text-white py-2 px-4 rounded-lg shadow-button-hover hover:bg-opacity-80 transition flex items-center justify-center"
      >
        <span className="material-icons">shopping_cart</span>
      </button>
    </div>
  );
};

export default AddIngredientShoppingList;
