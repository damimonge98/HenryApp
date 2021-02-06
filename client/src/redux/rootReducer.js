import { combineReducers } from 'redux';
import authReducers from './reducers/authReducers';
import talkReducers from './reducers/talkReducers';
import boomReducer from './reducers/boomsReducer';
import usersReducers from './reducers/usersReducers';
import lecturesReducers from './reducers/lecturesReducers';
import moduleReducers from "./reducers/modulesReducers";

const rootReducer = combineReducers({
  auth: authReducers,
  user: usersReducers,
  talk: talkReducers,
  boom: boomReducer,
  lectures: lecturesReducers,
  modules: moduleReducers
});

export default rootReducer;
