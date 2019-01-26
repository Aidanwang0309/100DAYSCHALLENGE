import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware)),
  window.__Redux_DEVTOOLS_EXTENSION__ && window.__REDUX_DECTOOLS_EXTENSION__()
);

export default store;
