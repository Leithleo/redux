import rootReducer from "./redux/reducers/toDoReducer";
import { createStore, compose } from "redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer());

export default store;