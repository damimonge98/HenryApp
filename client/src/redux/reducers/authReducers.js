import {
  REQUEST_ACTION,
  REQUEST_FAILED_ACTION,
  LOGIN_ACTION,
  REGISTER_ACTION,
  LOGOUT_ACTION
} from '../constants/authContants';

const initialState = {
  user: null,
  isAuth: false,
  loading: false,
  error: null
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_ACTION:
      return {
        ...state,
        loading: true
      };

    case REQUEST_FAILED_ACTION:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case LOGIN_ACTION:
      return {
        ...state,
        loading: false,
        user: action.user,
        isAuth: true
      };

    case REGISTER_ACTION:
      return {
        ...state,
        loading: false
      };

    case LOGOUT_ACTION:
      return {
        ...state,
        loading: false,
        user: null,
        isAuth: false
      };

    default:
      return state;
  }
};

export default authReducers;
