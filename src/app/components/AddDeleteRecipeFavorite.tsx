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
    <div>
      <button onClick={handleFavorite}>
        {!favoriteRecipes.some(
          (favrecipe) => favrecipe.id == recipe.id && favrecipe.isFavorite
        )
          ? "Add to Favorite"
          : "Delete to Favorite"}
      </button>
    </div>
  );
};

export default AddDeleteRecipeFavorite;
