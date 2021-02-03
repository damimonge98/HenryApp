import axios from "axios";
import {
  GET_ALL_TALKS,
  GET_TALK,
  CREATE_TALK,
  UPDATE_TALK,
  DELETE_TALK,
} from '../constants/talkConstants';


const getAllTalksAction = () => ({
  type: GET_ALL_TALKS
});

const getTalkAction = () => ({
  type: GET_TALK
});

const createTalkAction = () => ({
  type: CREATE_TALK
});

const updateTalkAction = () => ({
  type: UPDATE_TALK
});

const deleteTalkAction = () => ({
  type: DELETE_TALK
});


export const getAllTalks = () => {
  return async (dispatch) => {
    try {
      await axios.get('http://localhost:5000/talk');

      dispatch(getAllTalksAction());

    } catch (error) {
      console.log(error);
    }
  };
};

export const getTalk = (id) => {
  return async (dispatch) => {
    try {
      await axios.get(`http://localhost:5000/talk/${id}`);

      dispatch(getTalkAction());

    } catch (error) {
      console.log(error);
    }
  };
};

export const createTalk = (talkData) => {
  return async (dispatch) => {
    try {
      await axios.post('http://localhost:5000/talk', { ...talkData });

      dispatch(createTalkAction());

    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTalk = (id, { title, imagen, description, url }) => {
  return async (dispatch) => {
    try {
      await axios.patch(`http://localhost:5000/talk/${id}`, { title, imagen, description, url });

      dispatch(updateTalkAction());

    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTalk = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:5000/talk/${id}`);

      dispatch(deleteTalkAction());

    } catch (error) {
      console.log(error);
    }
  };
};
