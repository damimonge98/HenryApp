import {
  GET_USERS,
  GET_USER,
  UPDATE_USER,
  REQUEST_ACTION,
  REQUEST_SUCCESS_ACTION,
  REQUEST_FAILED_ACTION
} from "../constants/usersContants";

const initialState = {
  users: [],
  userDetail: [],
  loading: false,
  error: null
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_ACTION:
      return {
        ...state,
        loading: true
      };

    case REQUEST_SUCCESS_ACTION:
      return {
        ...state,
        loading: false
      };

    case REQUEST_FAILED_ACTION:
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
          if (u.id === action.user.id)
            return action.user;
          return u;
        })
      };

    default:
      return state;
  }
};

export default userReducers;