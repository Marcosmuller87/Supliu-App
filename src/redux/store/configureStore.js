import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "../reducers/mainReducer";

export const configureStore = () => {
  const middlewares = [thunk];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancers = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(mainReducer, enhancers);

  return store;
};
