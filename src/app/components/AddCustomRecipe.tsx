import { addCustomRecipe } from "@/redux/recipeSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddCustomRecipe() {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [instructions, setInstructions] = useState<string>("");
  const [extendedIngredients, setExtendedIngredients] = useState<
    Array<{ name: string; amount: number; unit: string }>
  >([{ name: "", amount: 0, unit: "" }]);

  const dispatch = useDispatch();

  const handleIngredientChange = (
    index: number,
    field: "name" | "amount" | "unit",
    value: string | number
  ) => {
    const updatedIngredients = extendedIngredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, [field]: value };
      }
      return ingredient;
    });
    setExtendedIngredients(updatedIngredients);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addIngredient = (index: number) => {
    setExtendedIngredients([
      ...extendedIngredients.slice(0, index + 1),
      { name: "", amount: 0, unit: "" },
      ...extendedIngredients.slice(index + 1),
    ]);
  };

  const removeIngredient = (index: number) => {
    const newIngredients = extendedIngredients.filter((_, i) => i !== index);
    setExtendedIngredients(
      newIngredients.length
        ? newIngredients
        : [{ name: "", amount: 0, unit: "" }]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const recipe = {
      id: Date.now(),
      title,
      image,
      instructions,
      extendedIngredients,
    };

    dispatch(addCustomRecipe(recipe));

    console.log(recipe);
    setTitle("");
    setImage(null);
    setInstructions("");
    setExtendedIngredients([{ name: "", amount: 0, unit: "" }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title"
        />
      </div>

      <div>
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <img
            src={image}
            alt="Recipe Preview"
            style={{ width: "200px", marginTop: "10px" }}
          />
        )}
      </div>

      <div>
        <label>Instructions:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Enter instructions"
        />
      </div>

      <div>
        <label>Ingredients:</label>
        {extendedIngredients.map((ingredient, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
              placeholder="Ingredient name"
            />
            <input
              type="number"
              value={ingredient.amount}
              onChange={(e) =>
                handleIngredientChange(index, "amount", Number(e.target.value))
              }
              placeholder="Amount"
            />
            <input
              type="text"
              value={ingredient.unit}
              onChange={(e) =>
                handleIngredientChange(index, "unit", e.target.value)
              }
              placeholder="Unit (e.g., cups, grams)"
            />

            {extendedIngredients.length - 1 == index ? (
              <button
                type="button"
                onClick={() => addIngredient(index)}
                style={{ marginLeft: "10px" }}
              >
                Add
              </button>
            ) : (
              <button
                type="button"
                onClick={() => removeIngredient(index)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      <div>
        <button type="submit">Submit Recipe</button>
      </div>
    </form>
  );
}

export default AddCustomRecipe;
