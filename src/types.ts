export interface Recipe {
  id: number;
  title: string;
  image: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
}

export interface RecipeCardProps {
  recipe: Recipe;
}

export interface RecipeDetailProps {
  recipe: {
    title: string;
    image: string;
    instructions: string;
    extendedIngredients: Array<{ name: string; amount: number; unit: string }>;
  };
}
