import axios from "axios";

import {
  REQUEST_ACTION,
  REQUEST_SUCCESS_ACTION,
  REQUEST_FAILED_ACTION,
  GET_INSTRUCTORS,
  GET_STUDENTS,
  GET_USER,
  GET_USERS,
  UPDATE_USER
} from "../constants/usersContants";

const requestAction = () => ({
  type: REQUEST_ACTION
});

const requestSuccessAction = () => ({
  type: REQUEST_SUCCESS_ACTION
});

const requestFailedAction = (error) => ({
  type: REQUEST_FAILED_ACTION,
  error
});

const getUsersAction = (users) => ({
  type: GET_USERS,
  users
});

const getUserAction = (user) => ({
  type: GET_USER,
  user
});

const updateUserAction = (user) => ({
  type: UPDATE_USER,
  user
});

export const getUsers = () => {
  return function async(dispatch) {
    try {
      dispatch(requestAction());

      const users = await axios.get("http://localhost:5000/users");

      dispatch(getUsersAction(users));
      dispatch(requestSuccessAction());
    } catch (error) {
      dispatch(requestFailedAction(error));
    }
  };
};

// export const getIntructors = () => {
//   return function (dispatch) {
//     axios.get("http://localhost:5000/users/instructors")
//       .then(res => {
//         dispatch({
//           type: GET_INSTRUCTORS,
//           payload: res
//         });
//       });
//   };
// };

// export const getStudents = () => {
//   return function (dispatch) {
//     axios.get("http://localhost:5000/users/students")
//       .then(res => {
//         dispatch({
//           type: GET_STUDENTS,
//           payload: res
//         });
//       });
//   };
// };

export const getUserById = (id) => {
  return function async(dispatch) {
    try {
      dispatch(requestAction());
      const user = axios.get(`http://localhost:5000/users/user/${id}`);

      dispatch(getUserAction(user));
      dispatch(requestSuccessAction());

    } catch (error) {
      dispatch(requestFailedAction(error));
    }
  };
};

export const updateUser = (id, data) => {
  return function (dispatch) {
    try {
      dispatch(requestAction());

      const updatedUser = axios.patch(`http://localhost:5000/users/user/${id}`, data);

      dispatch(updateUserAction(updatedUser));
      dispatch(requestSuccessAction());
    } catch (error) {
      dispatch(requestFailedAction(error));
    }
  };
};
