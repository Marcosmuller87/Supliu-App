import { configureStore } from "@reduxjs/toolkit";
import { supliuApi } from "../apis/supliuApi";

export default configureStore({
  reducer: {
    [supliuApi.reducerPath]: supliuApi.reducer,
  },
});
