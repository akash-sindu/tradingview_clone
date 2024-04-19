import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
export default configureStore({
  reducer: {
    darkMode: themeReducer,
  },
});
