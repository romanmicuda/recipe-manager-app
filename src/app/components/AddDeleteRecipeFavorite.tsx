import { useDispatch, useSelector } from "react-redux";
import { AddRecipeFavoriteProps, Recipe } from "../../types";
import { addRecipe, deleteRecipe } from "../../redux/recipeSlice";
import React from "react";

const AddDeleteRecipeFavorite: React.FC<AddRecipeFavoriteProps> = ({
  recipe,
}) => {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(
    (state: { recipes: { recipes: Recipe[] } }) => state.recipes.recipes
  );

  const handleFavorite = () => {
    if (recipe.isFavorite) {
      dispatch(deleteRecipe(recipe));
    } else {
      dispatch(addRecipe({ ...recipe, isFavorite: true }));
    }
  };

  return (
    <button
      onClick={handleFavorite}
      className="bg-gradient-to-r from-gradient-start to-gradient-end text-white py-2 px-4 rounded-lg shadow-button-hover hover:bg-opacity-80 transition flex items-center justify-center"
    >
      <span className="material-icons">
        {favoriteRecipes.some(
          (favrecipe) => favrecipe.id === recipe.id && favrecipe.isFavorite
        )
          ? "favorite"
          : "favorite_border"}
      </span>
    </button>
  );
};

export default AddDeleteRecipeFavorite;
