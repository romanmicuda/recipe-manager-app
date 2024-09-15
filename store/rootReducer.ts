import { combineReducers } from "redux";
import recipeReducer from "./slices/recipeSlice";

const rootReducer = combineReducers({
  recipes: recipeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
