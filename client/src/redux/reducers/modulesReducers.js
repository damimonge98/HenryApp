import {
    GET_MODULE
  } from '../constants/moduleContants';

  const initialState = {
    modules: [],
    module: [],
    loading: false,
    error: null
  };
  
  
  const modulesReducers = (state = initialState, action) => {
    switch (action.type) {
  
      case GET_MODULE:
        return {
          ...state,
          module: action.payload
        };
  
     
      default:
        return state;
    }
  };
  
  export default modulesReducers;
  