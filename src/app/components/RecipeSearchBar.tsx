import { RecipeSearchBarProps } from "@/types";
import React, { useState } from "react";

const RecipeSearchBar: React.FC<RecipeSearchBarProps> = ({
  ingredients,
  addIngredient,
  loading,
  deleteIngredient,
}) => {
  const [ingredient, setIngredient] = useState<string>("");

  const handleSearch = () => {
    addIngredient(ingredient);
    setIngredient("");
  };

  return (
    <div>
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter ingredients"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
      <div>
        {ingredients.map((item, index) => (
          <div key={index} onClick={() => deleteIngredient(item)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearchBar;
