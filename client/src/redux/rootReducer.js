import { combineReducers } from "redux";
import usersReducers from "./reducers/usersReducers";
import authReducers from "./reducers/authReducers";
import talkReducers from "./reducers/talkReducers";

const rootReducer = combineReducers({
  auth: authReducers,
  user: usersReducers,
  talk: talkReducers,
});

export default rootReducer;
