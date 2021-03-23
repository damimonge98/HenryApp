import axios from "../../configAxios";
import {
  REQUEST_ACTION_COMPANIES,
  REQUEST_SUCCESS_ACTION_COMPANIES,
  REQUEST_FAILED_ACTION_COMPANIES,
  GET_ALL_COMPANIES,
  GET_COMPANY,
  UPDATE_COMPANY,
  DELETE_COMPANY
} from '../constants/companiesConstants';


const requestActionCompanies = () => ({
  type: REQUEST_ACTION_COMPANIES
});

const requestSuccessActionCompanies = () => ({
  type: REQUEST_SUCCESS_ACTION_COMPANIES
});

const requestFailedActionCompanies = (error) => ({
  type: REQUEST_FAILED_ACTION_COMPANIES,
  error
});

const getAllCompaniesAction = (companies) => ({
  type: GET_ALL_COMPANIES,
  companies
});

const getCompanyAction = (company) => ({
  type: GET_COMPANY,
  company
});

const updateCompanyAction = (company) => ({
  type: UPDATE_COMPANY,
  company
});

const deleteCompanyAction = (id) => ({
  type: DELETE_COMPANY,
  id
});


export const getAllCompanies = () => {
  return async (dispatch) => {
    try {
      dispatch(requestActionCompanies());
      const res = await axios.get('/enterprise');
      dispatch(getAllCompaniesAction(res.data));
      dispatch(requestSuccessActionCompanies());

    } catch (error) {
      dispatch(requestFailedActionCompanies(error));
    }
  };
};

export const getCompany = (id) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionCompanies());
      const res = await axios.get(`/enterprise/${id}`);
      dispatch(getCompanyAction(res.data));
      dispatch(requestSuccessActionCompanies());

    } catch (error) {
      dispatch(requestFailedActionCompanies(error));
    }
  };
};

export const updateCompany = (id, companyData) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionCompanies());
      const res = await axios.patch(`/enterprise/${id}`, { ...companyData });
      dispatch(updateCompanyAction(res.data));
      dispatch(requestSuccessActionCompanies());

    } catch (error) {
      dispatch(requestFailedActionCompanies(error));
    }
  };
};

export const deleteCompany = (id) => {
  return async (dispatch) => {
    try {
      dispatch(requestActionCompanies());
      const res = await axios.delete(`/enterprise/${id}`);
      dispatch(deleteCompanyAction(res.data));
      dispatch(requestSuccessActionCompanies());

    } catch (error) {
      dispatch(requestFailedActionCompanies(error));
    }
  };
};
