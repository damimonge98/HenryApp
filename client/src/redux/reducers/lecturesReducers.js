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


const initialState = {
  lectures: [],
  lecture: {},
  loadingLectures: false,
  error: null
};


const lecturesReducers = (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_ACTION_LECTURES:
      return {
        ...state,
        loadingLectures: true
      };

    case REQUEST_SUCCESS_ACTION_LECTURES:
      return {
        ...state,
        loadingLectures: false,
        error: null
      };

    case REQUEST_FAILED_ACTION_LECTURES:
      return {
        ...state,
        loadingLectures: false,
        error: action.error
      };

    case GET_ALL_LECTURES:
      return {
        ...state,
        lectures: action.lectures
      };

    case GET_LECTURE_BY_ID:
      return {
        ...state,
        lecture: action.lecture
      };

    case CREATE_LECTURE:
      return {
        ...state,
        lectures: [...state.lectures, action.lecture]
      };

    case UPDATE_LECTURE:
      return {
        ...state,
        lectures: state.lectures.map(l => {
          if (l._id === action.lecture._id)
            return action.lecture;
          return l;
        })
      };

    case DELETE_LECTURE:
      return {
        ...state,
        lectures: state.lectures.filter(l => {
          if (l._id === action.id) {
            return false;
          }
          return true;
        })
      };

    default:
      return state;
  }
};

export default lecturesReducers;
