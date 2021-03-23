import axios from '../../configAxios';

import {
  REQUEST_ACTION_LECTURES,
  REQUEST_SUCCESS_ACTION_LECTURES,
  REQUEST_FAILED_ACTION_LECTURES,
  GET_ALL_LECTURES,
  GET_LECTURE_BY_ID,
  CREATE_LECTURE,
  UPDATE_LECTURE,
  DELETE_LECTURE
} from '../constants/lecturesConstants';


const requestActionLectures = () => ({
  type: REQUEST_ACTION_LECTURES
});

const requestSuccessActionLectures = () => ({
  type: REQUEST_SUCCESS_ACTION_LECTURES
});

const requestFailedActionLectures = (error) => ({
  type: REQUEST_FAILED_ACTION_LECTURES,
  error
});

const getAllLecturesAction = (lectures) => ({
  type: GET_ALL_LECTURES,
  lectures
});

const getLectureByIdAction = (lecture) => ({
  type: GET_LECTURE_BY_ID,
  lecture
});

const createLectureAction = (lecture) => ({
  type: CREATE_LECTURE,
  lecture
});

const updatLectureAction = (lecture) => ({
  type: UPDATE_LECTURE,
  lecture
});

const deleteLectureAction = (id) => ({
  type: DELETE_LECTURE,
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
