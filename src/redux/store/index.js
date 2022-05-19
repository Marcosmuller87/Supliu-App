import { configureStore } from "@reduxjs/toolkit";
// Reducers
import albums from "../slices/albums";
import tracks from "../slices/tracks";

export default configureStore({
  reducer: {
    albums,
    tracks,
  },
});
