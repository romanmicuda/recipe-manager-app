import React from "react";
import { RecipeSearch } from "../components/RecipeSearch";

function Dashboard() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <section className="mx-auto">
        <h2 className="text-2xl font-semibold mb-5">
          ✨ Start Your Recipe Adventure
        </h2>
        <p>
          Enter the ingredients you have on hand, and let us inspire you with a
          variety of delicious recipes.
        </p>
      </section>
      <RecipeSearch />
    </div>
  );
}

export default Dashboard;
