import { configureStore } from "@reduxjs/toolkit";
import seaBattleReducer from "./SeaBattleSlice.js";

export const store = configureStore({
  reducer: {
    seaBattleReducer,
  },
});
