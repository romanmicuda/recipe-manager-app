// src/app/page.tsx

import React from "react";
import { RecipeSearch } from "./components/RecipeSearch";

const HomePage = () => {
  return (
    <main className="container">
      <h1>Recipe Finder and Manager</h1>
      <p>
        Search for recipes, save your favorites, and create shopping lists based
        on your chosen recipes!
      </p>
      <RecipeSearch />
    </main>
  );
};

export default HomePage;
