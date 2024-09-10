import React from "react";
import { RecipeSearch } from "../components/RecipeSearch";

function Dashboard() {
  return (
    <div>
      <h1>Welcome to Your Culinary Dashboard</h1>
      <p>
        This is your personal cooking space where you can unleash your
        creativity and discover endless possibilities. Whether you're looking to
        try something new or perfect your favorite dishes, the journey starts
        here.
      </p>

      <section>
        <h2>✨ Start Your Recipe Adventure</h2>
        <p>
          Enter the ingredients you have on hand, and let us inspire you with a
          variety of delicious recipes. Cooking is an adventure, and every great
          dish begins with a little curiosity and a lot of imagination.
        </p>
      </section>

      <RecipeSearch />
    </div>
  );
}

export default Dashboard;
