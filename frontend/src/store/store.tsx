import { createStore } from "redux";
import { greenReducer } from "./reducers";

const store = createStore(greenReducer);

export default store;
