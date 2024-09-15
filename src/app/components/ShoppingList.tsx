import { Ingredient } from "@/types";
import React, { useState } from "react";
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

  const [finalShoppingList, setfinalShoppingList] = useState(
    Object.values(aggregatedShoppingList)
  );

  const handleDeleteIngredients = (ingredientName: string) => {
    setfinalShoppingList((prevShoppingList) => [
      ...prevShoppingList.filter((item) => item.name !== ingredientName),
    ]);
  };

  const hangleTogglePurchased = (index: number) => {
    setfinalShoppingList((prevShoppingList) => [
      ...prevShoppingList.map((item, i) =>
        i === index ? { ...item, purchased: !item.purchased } : item
      ),
    ]);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      {finalShoppingList.map((ingredient, index) => (
        <div>
          <div key={index}>
            <p
              onClick={() => hangleTogglePurchased(index)}
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
}

export default ShoppingList;
