import axios from "../../configAxios";

import {
  REQUEST_ACTION_USER,
  REQUEST_SUCCESS_ACTION_USER,
  REQUEST_FAILED_ACTION_USER,
  GET_USER,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER,
  INVITE_USERS
} from "../constants/usersContants";

const requestActionUser = () => ({
  type: REQUEST_ACTION_USER
});

const requestSuccessActionUser = () => ({
  type: REQUEST_SUCCESS_ACTION_USER
});

const requestFailedActionUser = (error) => ({
  type: REQUEST_FAILED_ACTION_USER,
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
      dispatch(requestActionUser());

      const res = await axios.get("/users");
      console.log("res", res)
      dispatch(getUsersAction(res.data));
      dispatch(requestSuccessActionUser());
    } catch (error) {
      dispatch(requestFailedActionUser(error));
    }
  };
};

export const getUserById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionUser());
      const res = axios.get(`/users/user/${id}`);

      dispatch(getUserAction(res.data));
      dispatch(requestSuccessActionUser());

    } catch (error) {
      dispatch(requestFailedActionUser(error));
    }
  };
};

export const updateUser = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionUser());

      const res = await axios.patch(`/users/user/${id}`, data);

      dispatch(updateUserAction(res.data));
      dispatch(requestSuccessActionUser());
    } catch (error) {
      dispatch(requestFailedActionUser(error));
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionUser());

      const res = await axios.delete(`/users/${id}`);

      dispatch(deleteUserAction(res.data));
      dispatch(requestSuccessActionUser());
    } catch (error) {
      dispatch(requestFailedActionUser(error));
    }
  };
};

export const inviteUsers = (file) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionUser());

      const data = new FormData();
      data.append('users', file, file.name);
      const res = await axios.post("/upload/users", data);

      dispatch(inviteUsersAction(res.data.invited));
      dispatch(requestSuccessActionUser());
    } catch (error) {
      dispatch(requestFailedActionUser(error));
    }
  };
};
