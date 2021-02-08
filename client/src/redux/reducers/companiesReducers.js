import {
  REQUEST_ACTION_COMPANIES,
  REQUEST_SUCCESS_ACTION_COMPANIES,
  REQUEST_FAILED_ACTION_COMPANIES,
  GET_ALL_COMPANIES,
  GET_COMPANY,
  CREATE_COMPANY,
  UPDATE_COMPANY,
  DELETE_COMPANY
} from '../constants/companiesConstants';

const initialState = {
  company: {},
  companies: [],
  loadingCompanies: false,
  error: null
};

const companiesReducers = (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_ACTION_COMPANIES:
      return {
        ...state,
        loadingCompanies: true
      };

    case REQUEST_SUCCESS_ACTION_COMPANIES:
      return {
        ...state,
        loadingCompanies: false,
        error: null
      };

    case REQUEST_FAILED_ACTION_COMPANIES:
      return {
        ...state,
        loadingCompanies: false,
        error: action.error
      };

    case GET_ALL_COMPANIES:
      return {
        ...state,
        companies: action.companies
      };

    case GET_COMPANY:
      return {
        ...state,
        company: action.company
      };

    case CREATE_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.company]
      };

    case UPDATE_COMPANY:
      return {
        ...state,
        companies: state.companies.map(c => {
          if (c._id === action.company._id)
            return action.company;
          return c;
        })
      };

    case DELETE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter(c => {
          if (c._id === action.id)
            return false;
          return true;
        })
      };

    default:
      return state;
  }
};

export default companiesReducers;
