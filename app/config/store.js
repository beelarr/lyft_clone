import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import logger from "redux-logger";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
	middleware.push(logger);
}


export default createStore(reducers, compose(applyMiddleware(...middleware)))
