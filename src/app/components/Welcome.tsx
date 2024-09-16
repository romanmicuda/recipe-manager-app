import Link from "next/link";
import React from "react";

function Welcome() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Recipe Finder and Manager
      </h1>
      <p className="mb-8">
        Discover your passion for cooking with our easy-to-use recipe app!
        Whether you're just starting your culinary journey or looking to try
        something new, we're here to help you explore, create, and enjoy.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          🔍 Find Recipes with What You Have
        </h2>
        <p>
          Got a few ingredients but no idea what to cook? Enter what you have,
          and we'll show you delicious recipes you can make right now.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          ❤️ Save and Share Your Favorites
        </h2>
        <p>
          Found a recipe that blew your mind? Save it to your profile and share
          it with friends!
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          📝 Create Your Own Recipes
        </h2>
        <p>Have a recipe idea? Add it to our app and make it your own!</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🛒 Make Shopping Simple</h2>
        <p>
          Planning a meal? Generate a shopping list based on your chosen recipes
          and make your grocery trips a breeze.
        </p>
      </section>
      <div className="flex justify-center">
        <Link
          href="/dashboard"
          className="bg-gradient-to-r from-gradient-start to-gradient-end text-white py-2 px-14 rounded-lg shadow-button-hover hover:bg-opacity-80 transition"
        >
          Find the recipes
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
