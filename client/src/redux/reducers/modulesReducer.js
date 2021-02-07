import {
  REQUEST_ACTION_MODULES,
  REQUEST_SUCCESS_ACTION_MODULES,
  REQUEST_FAILED_ACTION_MODULES,
  GET_ALL_MODULES,
  GET_MODULE_BY_ID,
  CREATE_MODULE,
  UPDATE_MODULE,
  DELETE_MODULE
} from '../constants/modulesConstants';


const initialState = {
  modules: [],
  module: {},
  loading: false,
  error: null
};


const modulesReducer = (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_ACTION_MODULES:
      return {
        ...state,
        loading: true
      };

    case REQUEST_SUCCESS_ACTION_MODULES:
      return {
        ...state,
        loading: false,
        error: null
      };

    case REQUEST_FAILED_ACTION_MODULES:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case GET_ALL_MODULES:
      return {
        ...state,
        modules: action.modules
      };

    case GET_MODULE_BY_ID:
      return {
        ...state,
        module: action.module
      };

    case CREATE_MODULE:
      return {
        ...state,
        modules: [...state.modules, action.module]
      };

    case UPDATE_MODULE:
      return {
        ...state,
        modules: state.modules.map(m => {
          if (m._id === action.module._id)
            return action.module;
          return m;
        })
      };

    case DELETE_MODULE:
      return {
        ...state,
        modules: state.modules.filter(m => {
          if (m._id === action.id) {
            return false;
          }
          return true;
        })
      };

    default:
      return state;
  }
};

export default modulesReducer;
