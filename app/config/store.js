import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";
import logger from "redux-logger";



export default (initalState = {}) => {
  const middleware = [thunk, logger];
  const enhancers = [];
  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
	if (process.env.NODE_ENV === "development") {
		middleware.push(logger);
	}

  return store;
};
