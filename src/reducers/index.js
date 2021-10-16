import { combineReducers } from "redux";
import slackReducer from "./slackReducer";

export default combineReducers({
  slack: slackReducer,
});
