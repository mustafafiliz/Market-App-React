import { combineReducers } from "redux";
import productListReducer from "./productListReducer";
import basketReducer from "./basketReducer";

const rootReducer = combineReducers({
  productListReducer,
  basketReducer,
});

export default rootReducer;
