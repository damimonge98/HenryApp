import axios from "axios";

import {
  REQUEST_ACTION,
  REQUEST_SUCCESS_ACTION,
  REQUEST_FAILED_ACTION,
  GET_USER,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER,
  INVITE_USERS
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

const deleteUserAction = (id) => ({
  type: DELETE_USER,
  id
});

const inviteUsersAction = (invited) => ({
  type: INVITE_USERS,
  invited
});

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(requestAction());

      const res = await axios.get("http://localhost:5000/users");

      dispatch(getUsersAction(res.data));
      dispatch(requestSuccessAction());
    } catch (error) {
      dispatch(requestFailedAction(error));
    }
  };
};

export const getUserById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(requestAction());
      const res = axios.get(`http://localhost:5000/users/user/${id}`);

      dispatch(getUserAction(res.data));
      dispatch(requestSuccessAction());

    } catch (error) {
      dispatch(requestFailedAction(error));
    }
  };
};

export const updateUser = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch(requestAction());

      const res = await axios.patch(`http://localhost:5000/users/user/${id}`, data);

      dispatch(updateUserAction(res.data));
      dispatch(requestSuccessAction());
    } catch (error) {
      dispatch(requestFailedAction(error));
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(requestAction());

      const res = await axios.delete(`http://localhost:5000/users/${id}`);

      dispatch(deleteUserAction(res.data));
      dispatch(requestSuccessAction());
    } catch (error) {
      dispatch(requestFailedAction(error));
    }
  };
};

export const inviteUsers = (file) => {
  return async (dispatch) => {
    try {
      dispatch(requestAction());

      const data = new FormData();
      data.append('users', file, file.name);
      const res = await axios.post("http://localhost:5000/upload/users", data);

      dispatch(inviteUsersAction(res.data.invited));
      dispatch(requestSuccessAction());
    } catch (error) {
      dispatch(requestFailedAction(error));
    }
  };
};
