export interface Recipe {
  id: number;
  title: string;
  image: string;
  usedIngredientCount?: number;
  missedIngredientCount?: number;
  isFavorite?: boolean;
}

export interface RecipeCardProps {
  recipe: Recipe;
}

export interface AddRecipeFavoriteProps {
  recipe: Recipe;
}

export interface RecipeDetail {
  id: number;
  title: string;
  image: string | null;
  instructions: string;
  extendedIngredients: Array<{ name: string; amount: number; unit: string }>;
}

export interface RecipeDetailProps {
  recipe: RecipeDetail;
}

export interface ProfileProps {}

export interface RecipeCardListProps {
  recipes: Recipe[];
}

export interface RecipeSearchBarProps {
  ingredients: string[];
  addIngredient: (ingredient: string) => void;
  loading: boolean;
  deleteIngredient: (ingredient: string) => void;
}
