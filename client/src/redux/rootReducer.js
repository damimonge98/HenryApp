import { combineReducers } from 'redux';
import usersReducers from './reducers/usersReducers';
import authReducers from './reducers/authReducers';
import boomReducer from "./reducers/boomsReducer";

const rootReducer = combineReducers({
  auth: authReducers,
  user: usersReducers,
  boom: boomReducer
});

export default rootReducer;
