import { combineReducers } from "redux";
import { albumsReducer } from "./albumsReducer";

// Reducer combinado para o redux Store

export const mainReducer = combineReducers({
  // Reducers
  albums: albumsReducer,
});
