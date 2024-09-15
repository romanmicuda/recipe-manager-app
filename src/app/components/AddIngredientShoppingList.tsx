import { addIngredientsToShoppingList } from "@/redux/recipeSlice";
import { Ingredient } from "@/types";
import React, { useState } from "react";
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
    console.log(recipe.extendedIngredients);
  };
  return (
    <div>
      <input type="number" value={amount} />
      <button onClick={() => handleAddIngredients(amount)}>
        Add To ShoppingList
      </button>
    </div>
  );
};

export default AddIngredientShoppingList;
