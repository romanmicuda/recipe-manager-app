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
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => handleChangeAmount(e.target.value)}
      />
      <button onClick={() => handleAddIngredients(amount)}>
        Add To ShoppingList
      </button>
    </div>
  );
};

export default AddIngredientShoppingList;
