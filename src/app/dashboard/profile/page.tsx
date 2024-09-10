// src/app/profile/page.tsx

import React from "react";

function Profile() {
  return (
    <div>
      <h1>Your Profile</h1>
      <p>
        Welcome to your profile page! Here, you can manage your saved recipes,
        update your personal information, and keep track of your culinary
        journey.
      </p>

      <section>
        <h2>🍴 Your Saved Recipes</h2>
        <p>
          Browse through all the recipes you've saved so far. Whether it's a
          family favorite or a new discovery, they're all here for you to
          revisit and enjoy anytime.
        </p>
      </section>

      <section>
        <h2>✍️ Update Your Details</h2>
        <p>
          Keep your profile up to date. Change your username, email, or any
          other personal information to ensure your account reflects your
          current details.
        </p>
      </section>

      <section>
        <h2>🔒 Account Settings</h2>
        <p>
          Manage your account settings, including password changes and other
          security options. Your privacy and security are important to us.
        </p>
      </section>
    </div>
  );
}

export default Profile;
