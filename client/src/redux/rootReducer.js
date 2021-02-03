import { combineReducers } from 'redux';
import usersReducers from './reducers/usersReducers';
import authReducers from './reducers/authReducers';
import talkReducers from './reducers/talkReducers';
import boomReducer from './reducers/boomsReducer';

const rootReducer = combineReducers({
  auth: authReducers,
  user: usersReducers,
  talk: talkReducers,
  boom: boomReducer
});

export default rootReducer;
