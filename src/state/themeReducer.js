import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "darkMode",
  initialState: {
    value: false,
  },
  reducers: {
    changeDarkMode: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeDarkMode } = appSlice.actions;

export default appSlice.reducer;
