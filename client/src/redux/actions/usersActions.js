import axios from "axios";

import {
  REQUEST_ACTION,
  REQUEST_SUCCESS_ACTION,
  REQUEST_FAILED_ACTION,
  GET_USER,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER
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
s;
export const deleteUser = (file) => {
  return async (dispatch) => {
    try {
      dispatch(requestAction());

      data.append('users', file.users, "users");
      axios
        .post("http://localhost:5000/upload/users", data, {
          // onUploadProgress: ProgressEvent => {
          //   // this.setState({
          //   //   loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
          //   // });
          // },
        })
        .then(res => {
          console.log(res.statusText);
        });

      dispatch(deleteUserAction(res.data));
      dispatch(requestSuccessAction());
    } catch (error) {
      dispatch(requestFailedAction(error));
    }
  };
};
