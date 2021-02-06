import {
  GET_USERS,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  INVITE_USERS,
  REQUEST_ACTION_USER,
  REQUEST_SUCCESS_ACTION_USER,
  REQUEST_FAILED_ACTION_USER
} from "../constants/usersContants";

const initialState = {
  users: [],
  invited: [],
  userDetail: [],
  loading: false,
  error: null
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_ACTION_USER:
      return {
        ...state,
        loading: true
      };

    case REQUEST_SUCCESS_ACTION_USER:
      return {
        ...state,
        loading: false,
        error: null
      };

    case REQUEST_FAILED_ACTION_USER:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case GET_USERS:
      return {
        ...state,
        users: action.users
      };

    case GET_USER:
      return {
        ...state,
        userDetail: action.user
      };

    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(u => {
          if (u._id === action.user._id)
            return action.user;
          return u;
        })
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(u => {
          if (u._id === action.id) {
            return false;
          }
          return true;
        })
      };

    case INVITE_USERS:
      return {
        ...state,
        invited: action.invited
      };

    default:
      return state;
  }
};

export default userReducers;