import { combineReducers } from "redux";
import covidReducer from "../reducers/covid/index";

const rootReducer = combineReducers({
  covidReducer
});

export default rootReducer;
