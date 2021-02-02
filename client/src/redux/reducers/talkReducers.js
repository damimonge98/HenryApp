import {
  GET_ALL_TALKS,
  GET_TALK,
  CREATE_TALK,
  UPDATE_TALK,
  DELETE_TALK,
} from '../constants/talkConstants';

const initialState = {
  talks: {}
};

const talkReducers = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_TALKS:
      return {
        ...state
      };

    case GET_TALK:
      return {
        ...state
      };

    case CREATE_TALK:
      return {
        ...state
      };

    case UPDATE_TALK:
      return {
        ...state,
        talks: action.payload
      };

    case DELETE_TALK:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default talkReducers;
