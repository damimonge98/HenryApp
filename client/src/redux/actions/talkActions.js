import axios from "axios";
import {
  GET_ALL_TALKS,
  GET_TALK,
  CREATE_TALK,
  UPDATE_TALK,
  DELETE_TALK,
} from "../constants/talkContants";

export const getTalks = () => {
  return function (dispatch) {
    axios.get("http://localhost:5000/talk").then((res) => {
      dispatch({
        type: GET_ALL_TALKS,
        payload: res,
      });
    });
  };
};
