import axios from 'axios';

import {
  REQUEST_ACTION_MODULES,
  REQUEST_SUCCESS_ACTION_MODULES,
  REQUEST_FAILED_ACTION_MODULES,
  GET_ALL_MODULES,
  GET_MODULE_BY_ID,
  CREATE_MODULE,
  UPDATE_MODULE,
  DELETE_MODULE
} from '../constants/lecturesConstants';


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


export const getAllLectures = () => {
  return async (dispatch) => {
    try {
      dispatch(requestActionLectures());
      const res = await axios.get('http://localhost:5000/lectures');
      dispatch(getAllLecturesAction(res.data));
      dispatch(requestSuccessActionLectures());

    } catch (error) {
      dispatch(requestFailedActionLectures(error));
    }
  };
};

export const getLectureById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionLectures());
      const res = await axios.get(`http://localhost:5000/lectures/${id}`);
      dispatch(getLectureByIdAction(res.data));
      dispatch(requestSuccessActionLectures());

    } catch (error) {
      dispatch(requestFailedActionLectures(error));
    }
  };
};

export const createLecture = (moduleId, lectureData) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionLectures());
      const res = await axios.post(`http://localhost:5000/lectures/${moduleId}`, { ...lectureData });
      dispatch(createLectureAction(res.data));
      dispatch(requestSuccessActionLectures());

    } catch (error) {
      dispatch(requestFailedActionLectures(error));
    }
  };
};

export const updateLecture = (id, lectureData) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionLectures());
      const res = await axios.patch(`http://localhost:5000/lectures/${id}`, { ...lectureData });
      dispatch(updatLectureAction(res.data));
      dispatch(requestSuccessActionLectures());

    } catch (error) {
      dispatch(requestFailedActionLectures(error));
    }
  };
};

export const deleteLecture = (id) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionLectures());
      const res = await axios.delete(`http://localhost:5000/lectures/${id}`);
      dispatch(deleteLectureAction(res.data));
      dispatch(requestSuccessActionLectures());

    } catch (error) {
      dispatch(requestFailedActionLectures(error));
    }
  };
};
