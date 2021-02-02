import { GET_BOOM_TWEETS } from "../constants/boomsContants";

const initialState = {
  booms: [],
  boom: [],
 };

const boomReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOM_TWEETS:
      return{
        ...state,
        booms: action.payload
      }

    default:
      return state;
  }
};

export default boomReducer;