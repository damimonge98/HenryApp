import { GET_USERS, GET_INSTRUCTORS, GET_STUDENTS, GET_USER, EDIT_USER, UPDATE_USER } from "../constants/usersContants";

const initialState = {
  users: [],
  user: [],
  intructor: [],
  student: [],
  editUser: []
 };

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return{
        ...state,
        users: action.payload
      }
    case GET_INSTRUCTORS:
      return {
        ...state,
        instructor: action.payload
      }
    case GET_STUDENTS:
      return{
        ...state,
        student: action.payload
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload
      }
    case EDIT_USER:
      return {
        ...state,
        user: action.payload
      }

    default:
      return state;
  }
};

export default userReducers;