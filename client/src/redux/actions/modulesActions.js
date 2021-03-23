import axios from "../../configAxios";

import {
  REQUEST_ACTION_MODULES,
  REQUEST_SUCCESS_ACTION_MODULES,
  REQUEST_FAILED_ACTION_MODULES,
  GET_ALL_MODULES,
  GET_MODULE_BY_ID,
  CREATE_MODULE,
  UPDATE_MODULE,
  DELETE_MODULE
} from '../constants/modulesConstants';


const requestActionModules = () => ({
  type: REQUEST_ACTION_MODULES
});

const requestSuccessActionModules = () => ({
  type: REQUEST_SUCCESS_ACTION_MODULES
});

const requestFailedActionModules = (error) => ({
  type: REQUEST_FAILED_ACTION_MODULES,
  error
});

const getAllModulesAction = (modules) => ({
  type: GET_ALL_MODULES,
  modules
});

const getModuleByIdAction = (module) => ({
  type: GET_MODULE_BY_ID,
  module
});

const createModuleAction = (module) => ({
  type: CREATE_MODULE,
  module
});

const updateModuleAction = (module) => ({
  type: UPDATE_MODULE,
  module
});

const deleteModuleAction = (id) => ({
  type: DELETE_MODULE,
  id
});


export const getAllModules = () => {
  return async (dispatch) => {
    try {
      dispatch(requestActionModules());
      const res = await axios.get('/modules');
      dispatch(getAllModulesAction(res.data));
      dispatch(requestSuccessActionModules());

    } catch (error) {
      dispatch(requestFailedActionModules(error));
    }
  };
};

export const getModuleById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionModules());
      const res = await axios.get(`/modules/${id}`);
      dispatch(getModuleByIdAction(res.data));
      dispatch(requestSuccessActionModules());

    } catch (error) {
      dispatch(requestFailedActionModules(error));
    }
  };
};

export const createModule = (moduleData) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionModules());
      const res = await axios.post(`/modules`, { ...moduleData });
      dispatch(createModuleAction(res.data));
      dispatch(requestSuccessActionModules());

    } catch (error) {
      dispatch(requestFailedActionModules(error));
    }
  };
};

export const updateModule = (id, moduleData) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionModules());
      const res = await axios.patch(`/lectures/${id}`, { ...moduleData });
      dispatch(updateModuleAction(res.data));
      dispatch(requestSuccessActionModules());

    } catch (error) {
      dispatch(requestFailedActionModules(error));
    }
  };
};

export const deleteModule = (id) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionModules());
      const res = await axios.delete(`/modules/${id}`);
      dispatch(deleteModuleAction(res.data));
      dispatch(requestSuccessActionModules());

    } catch (error) {
      dispatch(requestFailedActionModules(error));
    }
  };
};
