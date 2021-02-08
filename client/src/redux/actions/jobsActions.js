import axios from "axios";
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


const requestActionJobs = () => ({
  type: REQUEST_ACTION_JOBS
});

const requestSuccessActionJobs = () => ({
  type: REQUEST_SUCCESS_ACTION_JOBS
});

const requestFailedActionJobs = (error) => ({
  type: REQUEST_FAILED_ACTION_JOBS,
  error
});

const getAllJobsAction = (jobs) => ({
  type: GET_ALL_JOBS,
  jobs
});

const getJobAction = (job) => ({
  type: GET_JOB,
  job
});

const createJobAction = (job) => ({
  type: CREATE_JOB,
  job
});

const updateJobAction = (job) => ({
  type: UPDATE_JOB,
  job
});

const deleteJobAction = (id) => ({
  type: DELETE_JOB,
  id
});


export const getAllJobs = () => {
  return async (dispatch) => {
    try {
      dispatch(requestActionJobs());
      const res = await axios.get('http://localhost:5000/empleos');
      dispatch(getAllJobsAction(res.data));
      dispatch(requestSuccessActionJobs());

    } catch (error) {
      dispatch(requestFailedActionJobs(error));
    }
  };
};

export const getJob = (id) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionJobs());
      const res = await axios.get(`http://localhost:5000/empleos/${id}`);
      dispatch(getJobAction(res.data));
      dispatch(requestSuccessActionJobs());

    } catch (error) {
      dispatch(requestFailedActionJobs(error));
    }
  };
};

export const createJob = (id, jobData) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionJobs());
      const res = await axios.post(`http://localhost:5000/empleos/${id}`, { ...jobData });
      dispatch(createJobAction(res.data));
      dispatch(requestSuccessActionJobs());

    } catch (error) {
      dispatch(requestFailedActionJobs(error));
    }
  };
};

export const updateJob = (id, jobData) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionJobs());
      const res = await axios.patch(`http://localhost:5000/empleos/${id}`, { ...jobData });
      dispatch(updateJobAction(res.data));
      dispatch(requestSuccessActionJobs());

    } catch (error) {
      dispatch(requestFailedActionJobs(error));
    }
  };
};

export const deleteJob = (id) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionJobs());
      const res = await axios.delete(`http://localhost:5000/empleos/${id}`);
      dispatch(deleteJobAction(res.data));
      dispatch(requestSuccessActionJobs());

    } catch (error) {
      dispatch(requestFailedActionJobs(error));
    }
  };
};
