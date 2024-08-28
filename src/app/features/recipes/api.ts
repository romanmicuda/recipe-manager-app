import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

export const searchRecipe = async (recipeName: string) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients`,
      {
        params: {
          ingredients: recipeName,
          number: 10,
          ranking: 1,
          apiKey: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Error occured ${error}`);
  }
};
