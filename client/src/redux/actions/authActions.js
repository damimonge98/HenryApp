import axios from "../../configAxios";
import {
  REQUEST_ACTION_AUTH,
  REQUEST_SUCCESS_ACTION_AUTH,
  REQUEST_FAILED_ACTION_AUTH,
  REGISTER_ACTION,
  LOGIN_ACTION,
  LOGOUT_ACTION
} from "../constants/authContants";

const requestActionAuth = () => ({
  type: REQUEST_ACTION_AUTH
});

const requestSuccessActionAuth = () => ({
  type: REQUEST_SUCCESS_ACTION_AUTH
});

const requestFailedActionAuth = (error) => ({
  type: REQUEST_FAILED_ACTION_AUTH,
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
      dispatch(requestActionAuth());
      await axios.post('https://henry-app21.herokuapp.com/auth/register', { ...registerData });
      dispatch(registerAction());
      dispatch(requestSuccessActionAuth());

    } catch (error) {
      dispatch(requestFailedActionAuth(error = {
        code: 409,
        errorMessage: 'Dirección de email no disponible.'
      }));
    }
  };
};

export const registerCompany = (companyData) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionAuth());
      const res = await axios.post('/auth/register-company', { ...companyData });
      dispatch(registerAction(res.data));
      dispatch(requestSuccessActionAuth());

    } catch (error) {
      dispatch(requestFailedActionAuth(error));
    }
  };
};

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionAuth());
      const res = await axios.post('/auth/login', { email, password });
      localStorage.setItem("HJWT", res.data.token);
      dispatch(loginAction(res.data.user));
      dispatch(requestSuccessActionAuth());

    } catch (error) {
      dispatch(requestFailedActionAuth(error = {
        code: 401,
        errorMessage: 'Email o contraseña incorrectos.'
      }));
    }
  };
};

export const autoLoginUser = () => {
  return async (dispatch) => {
    try {
      dispatch(requestActionAuth());
      const token = localStorage.getItem("HJWT");
      const res = await axios.get('/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      dispatch(loginAction(res.data));
      dispatch(requestSuccessActionAuth());

    } catch (error) {
      dispatch(requestFailedActionAuth(error));
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      dispatch(requestActionAuth());

      // await axios.post('/auth/logout');
      localStorage.removeItem("HJWT");

      dispatch(logoutAction());
      dispatch(requestSuccessActionAuth());

    } catch (error) {
      dispatch(requestFailedActionAuth(error));
    }
  };
};
