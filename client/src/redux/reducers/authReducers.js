import {
  REQUEST_ACTION_AUTH,
  REQUEST_SUCCESS_ACTION_AUTH,
  REQUEST_FAILED_ACTION_AUTH,
  LOGIN_ACTION,
  REGISTER_ACTION,
  LOGOUT_ACTION
} from '../constants/authContants';

const initialState = {
  user: null,
  isAuth: false,
  loading: true,
  error: null
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_ACTION_AUTH:
      return {
        ...state,
        loading: true
      };

    case REQUEST_SUCCESS_ACTION_AUTH:
      return {
        ...state,
        loading: false,
        error: null
      };

    case REQUEST_FAILED_ACTION_AUTH:
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
