import Link from "next/link";
import React from "react";

function Welcome() {
  return (
    <div>
      <h1>Welcome to Recipe Finder and Manager</h1>
      <p>
        Discover your passion for cooking with our easy-to-use recipe app!
        Whether you're just starting your culinary journey or looking to try
        something new, we're here to help you explore, create, and enjoy.
      </p>

      <section>
        <h2>🔍 Find Recipes with What You Have</h2>
        <p>
          Got a few ingredients but no idea what to cook? Enter what you have,
          and we'll show you delicious recipes you can make right now. Cooking
          is all about creativity—let's see what you can come up with!
        </p>
      </section>

      <section>
        <h2>❤️ Save and Share Your Favorites</h2>
        <p>
          Found a recipe that blew your mind? Save it to your profile and share
          it with friends! Cooking is more fun when you share your successes
          (and even your fails) with others.
        </p>
      </section>

      <section>
        <h2>📝 Create Your Own Recipes</h2>
        <p>
          Have a recipe idea? Add it to our app and make it your own! Experiment
          with ingredients, try new techniques, and discover your signature
          dish. Remember, every great chef started with an idea.
        </p>
      </section>

      <section>
        <h2>🛒 Make Shopping Simple</h2>
        <p>
          Planning a meal? Generate a shopping list based on your chosen recipes
          and make your grocery trips a breeze. Focus on what matters—creating
          amazing dishes!
        </p>
      </section>

      <div>
        <p>
          Ready to dive into the world of cooking? Start exploring, get
          inspired, and let's make something incredible together!
        </p>
      </div>
      <Link href="/dashboard">Find the recipes</Link>
    </div>
  );
}

export default Welcome;
