// src/slices/index.js
import { combineReducers } from "@reduxjs/toolkit";
import coralReducer from "./cardSlice";

const rootReducer = combineReducers({
  counter: coralReducer,
  // Add other reducers here
});

export default rootReducer;
