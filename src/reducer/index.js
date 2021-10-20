import { shopReducer } from "./Reducer";
import { combineReducers } from "redux";


export default combineReducers({
  shops: shopReducer,
});