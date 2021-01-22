import { combineReducers } from "redux";
import usersReducers from "./reducers/usersReducers";
import authReducers from "./reducers/authReducers";

const rootReducer = combineReducers({
  auth: authReducers,
  user: usersReducers,
});

export default rootReducer;
