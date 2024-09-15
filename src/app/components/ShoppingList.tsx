import { Ingredient } from "@/types";
import React, { useState } from "react";

export interface ShoppingListProps {
  shoppingList: Ingredient[];
}

export const ShoppingList: React.FC<ShoppingListProps> = ({ shoppingList }) => {
  const [finalShoppingList, setfinalShoppingList] = useState(shoppingList);

  const handleDeleteIngredients = (ingredientName: string) => {
    setfinalShoppingList((prevShoppingList) => [
      ...prevShoppingList.filter((item) => item.name !== ingredientName),
    ]);
  };

  const hangleTogglePurchased = (index: number) => {
    setfinalShoppingList((prevShoppingList) => [
      ...prevShoppingList
        .map((item, i) =>
          i === index ? { ...item, purchased: !item.purchased } : item
        )
        .sort((a, b) => Number(a.purchased) - Number(b.purchased)),
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
};

export default ShoppingList;
