### React with TypeScript and Next.js Assignment: Recipe Finder and Manager

#### **Assignment Overview**

Develop a web application named **"Recipe Finder and Manager"** using React with TypeScript and Next.js. This application will allow users to search for recipes based on the ingredients they have, save their favorite recipes, and create shopping lists. Additionally, users will be able to add custom recipes and manage them through their user profiles.

### **Project Requirements**

#### **1. Project Setup:**

- **Next.js**: Use Next.js for server-side rendering (SSR) and static site generation (SSG).
- **TypeScript**: The entire codebase should be written in TypeScript to leverage type safety.
- **API Integration**: Integrate a recipe API (such as Spoonacular or Edamam) for fetching recipes based on ingredients.

#### **2. Key Features:**

1. **Recipe Search:**

   - Implement a search functionality that allows users to search for recipes by entering a list of ingredients they have.
   - Display search results with basic recipe details like title, ingredients, and thumbnail image.
   - Users should be able to click on a recipe to view more details, including preparation instructions and nutritional information.

2. **User Profiles:**

   - Implement user authentication using a solution like **NextAuth.js** or **Firebase Authentication**.
   - Each user should have a profile page where they can view and manage their saved recipes and custom recipes.
   - Use a state management library such as **Redux** or **React Context** for managing global state, especially for user sessions and recipe data.

3. **Favorites and Custom Recipes:**

   - Allow users to save recipes from search results to their favorites.
   - Provide functionality for users to add custom recipes, including a form to enter the recipe name, ingredients, instructions, and an optional image upload.

4. **Shopping List Generation:**

   - Users should be able to generate shopping lists based on selected recipes.
   - Display the shopping list with quantities for each ingredient required for the selected recipes.
   - Allow users to mark items in the shopping list as purchased or remove them.

5. **Responsive Design:**
   - Ensure the app is responsive and works well on different devices, including desktops, tablets, and mobile phones.

#### **3. Additional Requirements:**

- **Environment Configuration**:

  - Use environment variables for sensitive data like API keys. Create a `.env.local` file to store these variables locally.

- **Styling**:

  - Use a modern CSS framework such as **Tailwind CSS** or **Chakra UI** for styling components, ensuring a consistent and visually appealing design.

- **Testing**:

  - Write unit tests for critical components using a testing framework like **Jest** and **React Testing Library**.
  - Aim to achieve at least 80% test coverage for the application.

- **Documentation**:
  - Provide a README file with setup instructions, a brief overview of the project, and instructions for running tests.
  - Include inline comments and TypeScript types/interfaces to make the codebase easy to understand and maintain.

---

### **Getting Started**

1. **Set up the Project:**

   ```bash
   npx create-next-app@latest recipe-finder-manager --typescript
   cd recipe-finder-manager
   ```

2. **Install Necessary Dependencies:**

   ```bash
   npm install next-auth @reduxjs/toolkit react-redux axios tailwindcss postcss autoprefixer
   ```

3. **Initialize Tailwind CSS:**

   ```bash
   npx tailwindcss init -p
   ```

4. **Configure TypeScript Paths and Aliases:**

   - Edit `tsconfig.json` to add path aliases for better module imports.

5. **Set up Environment Variables:**

   - Create a `.env.local` file in the root directory to store your API keys and other environment-specific variables.

6. **API Integration Setup:**

   - Create a service folder (`/services/api.ts`) and set up API functions to fetch data from the recipe API.

7. **Implement Core Components and Pages:**

   - Create components for **RecipeSearch**, **RecipeList**, **RecipeDetails**, **UserProfile**, **Favorites**, **AddRecipeForm**, and **ShoppingList**.
   - Implement corresponding pages under the `/pages` directory using Next.js's file-based routing.

8. **Add Authentication with NextAuth.js:**

   - Configure NextAuth in `/pages/api/auth/[...nextauth].ts`.

9. **State Management:**

   - Set up Redux or React Context to manage user session and recipe data.

10. **Develop Features Step-by-Step:**
    - Start with basic search functionality and progressively implement user authentication, saving recipes, adding custom recipes, and shopping list generation.
