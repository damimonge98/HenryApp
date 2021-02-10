import {
  REQUEST_ACTION_JOBS,
  REQUEST_SUCCESS_ACTION_JOBS,
  REQUEST_FAILED_ACTION_JOBS,
  GET_ALL_JOBS,
  GET_JOB,
  CREATE_JOB,
  UPDATE_JOB,
  DELETE_JOB
} from '../constants/jobsConstants';

const initialState = {
  job: {},
  jobs: [],
  loadingJobs: false,
  error: null
};

const jobsReducers = (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_ACTION_JOBS:
      return {
        ...state,
        loadingJobs: true
      };

    case REQUEST_SUCCESS_ACTION_JOBS:
      return {
        ...state,
        loadingJobs: false,
        error: null
      };

    case REQUEST_FAILED_ACTION_JOBS:
      return {
        ...state,
        loadingJobs: false,
        error: action.error
      };

    case GET_ALL_JOBS:
      return {
        ...state,
        jobs: action.jobs
      };

    case GET_JOB:
      return {
        ...state,
        job: action.job
      };

    case CREATE_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.job]
      };

    case UPDATE_JOB:
      return {
        ...state,
        jobs: state.jobs.map(j => {
          if (j._id === action.job._id)
            return action.job;
          return j;
        })
      };

    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter(j => {
          if (j._id === action.id)
            return false;
          return true;
        })
      };

    default:
      return state;
  }
};

export default jobsReducers;
