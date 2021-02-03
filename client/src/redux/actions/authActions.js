import axios from "axios";
import {
  REQUEST_ACTION,
  REQUEST_FAILED_ACTION,
  REGISTER_ACTION,
  LOGIN_ACTION,
  LOGOUT_ACTION
} from "../constants/authContants";

const requestAction = () => ({
  type: REQUEST_ACTION
});

const requestFailedAction = (error) => ({
  type: REQUEST_FAILED_ACTION,
  error
});

const loginAction = (user) => ({
  type: LOGIN_ACTION,
  user
});

const registerAction = () => ({
  type: REGISTER_ACTION
});

const logoutAction = () => ({
  type: LOGOUT_ACTION
});

export const registerUser = (registerData) => {
  return async (dispatch) => {
    try {
      // dispatch(requestAction());

      await axios.post('http://localhost:5000/auth/register', { ...registerData });

      dispatch(registerAction());

    } catch (error) {
      dispatch(requestFailedAction(error = {
        code: 409,
        errorMessage: 'Email address already in use'
      }));
    }
  };
};

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      // dispatch(requestAction());

      const res = await axios.post('http://localhost:5000/auth/login', { email, password });
      localStorage.setItem("HJWT", res.data.token);

      dispatch(loginAction(res.data.user));

    } catch (error) {
      dispatch(requestFailedAction(error = {
        code: 401,
        errorMessage: 'Incorrect username or password'
      }));
    }
  };
};

export const autoLoginUser = () => {
  return async (dispatch) => {
    try {
      // dispatch(requestAction());
      const token = localStorage.getItem("HJWT");
      const res = await axios.get('http://localhost:5000/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      dispatch(loginAction(res.data));

    } catch (error) {
      console.log(error);
      dispatch(requestFailedAction(error));
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      // dispatch(requestAction());

      // await axios.post('http://localhost:5000/auth/logout');
      localStorage.removeItem("HJWT");

      dispatch(logoutAction());

    } catch (error) {
      dispatch(requestFailedAction(error));
    }
  };
};
