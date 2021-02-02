import axios from "axios";

import {
  GET_INSTRUCTORS, GET_STUDENTS,
  GET_USER, GET_USERS,
  UPDATE_USER
} from "../constants/usersContants";

export const getUsers = () => {
  return function (dispatch) {
    axios.get("http://localhost:5000/users")
      .then(res => {
        dispatch({
          type: GET_USERS,
          payload: res
        });
      });
  };
};

export const getIntructors = () => {
  return function (dispatch) {
    axios.get("http://localhost:5000/users/instructors")
      .then(res => {
        dispatch({
          type: GET_INSTRUCTORS,
          payload: res
        });
      });
  };

};

export const getStudents = () => {
  return function (dispatch) {
    axios.get("http://localhost:5000/users/students")
      .then(res => {
        dispatch({
          type: GET_STUDENTS,
          payload: res
        });
      });
  };
};

export const getOneUser = (id) => {
  return function (dispatch) {
    axios.get(`http://localhost:5000/users/user/${id}`)
      .then(res => {
        dispatch({
          type: GET_USER,
          payload: res.data
        });
      });
  };
};

export const updateUser = (id, data) => {
  return function (dispatch) {
    axios.patch(`http://localhost:5000/users/user/${id}`, data)
      .then(res => {
        dispatch({
          type: UPDATE_USER,
          payload: res.data
        });
      });
  };
};
