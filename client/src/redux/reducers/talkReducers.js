import {
  GET_ALL_TALKS,
  GET_TALK,
  CREATE_TALK,
  UPDATE_TALK,
  DELETE_TALK,
} from "../constants/talkContants";

const initialState = {
  talks: [],
};

const talkReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TALKS:
      return {
        ...state,
        talks: action.payload,
      };
    case GET_TALK:
      return {
        ...state,
        talks: action.payload,
      };
    case CREATE_TALK:
      return {
        ...state,
        talks: action.payload,
      };
    case UPDATE_TALK:
      return {
        ...state,
        talks: action.payload,
      };
    case DELETE_TALK:
      return {
        ...state,
        talks: action.payload,
      };

    default:
      return state;
  }
};

export default talkReducers;
