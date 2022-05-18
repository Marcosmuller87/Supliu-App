import { configureStore } from "@reduxjs/toolkit";
// Reducers
import albums from "../slices/albums";

export default configureStore({
  reducer: {
    albums,
  },
});
