import { combineReducers } from 'redux';
import authReducers from './reducers/authReducers';
import usersReducers from './reducers/usersReducers';
import boomReducer from "./reducers/boomsReducer";
import lecturesReducers from './reducers/lecturesReducers';

const rootReducer = combineReducers({
  auth: authReducers,
  user: usersReducers,
  boom: boomReducer,
  lectures: lecturesReducers
});

export default rootReducer;
