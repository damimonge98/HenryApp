import axios from "axios";
import {
  GET_ALL_TALKS,
  GET_TALK,
  CREATE_TALK,
  UPDATE_TALK,
  DELETE_TALK,
} from '../constants/talkConstants';


const getAllTalksAction = (talks) => ({
  type: GET_ALL_TALKS,
  talks
});

const getTalkAction = (talk) => ({
  type: GET_TALK,
  talk
});

const createTalkAction = (talk) => ({
  type: CREATE_TALK,
  talk
});

const updateTalkAction = (talk) => ({
  type: UPDATE_TALK,
  talk
});

const deleteTalkAction = (id) => ({
  type: DELETE_TALK,
  id
});


export const getAllTalks = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('http://localhost:5000/talk');

      dispatch(getAllTalksAction(res.data));

    } catch (error) {
      console.log(error);
    }
  };
};

export const getTalk = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:5000/talk/${id}`);

      dispatch(getTalkAction(res.data));

    } catch (error) {
      console.log(error);
    }
  };
};

export const createTalk = (talkData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:5000/talk', { ...talkData });

      dispatch(createTalkAction(res.data));

    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTalk = (id, talkData) => {
  return async (dispatch) => {
    try {
      const res = await axios.patch(`http://localhost:5000/talk/${id}`, { ...talkData });

      dispatch(updateTalkAction(res.data));

    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTalk = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:5000/talk/${id}`);

      dispatch(deleteTalkAction(res.data));

    } catch (error) {
      console.log(error);
    }
  };
};
