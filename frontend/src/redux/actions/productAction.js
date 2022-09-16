import axios from "axios";

import {
  ALL_PROJECT_FAIL,
  ALL_PROJECT_REQUEST,
  ALL_PROJECT_SUCCESS,
  NEW_PROJECT_REQUEST,
  NEW_PROJECT_SUCCESS,
  NEW_PROJECT_FAIL,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../actionTypes/productType";

export const getProduct = (keyword = "", currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PROJECT_REQUEST });

      let link = `/api/v1/admin/projects`;
                
      if (keyword) {
          link = `/api/v1/admin/projects?keyword=${keyword}`;
      } 
      
      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (error) {

      dispatch({
        
        type: ALL_PROJECT_FAIL,
        payload: error.response.data.message,
      });
    }
};

export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PROJECT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/project/new`,
      productData,
      config
    );

    console.log("projelerdir",productData,config)

    dispatch({
      type: NEW_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROJECT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/project/${id}`,
      productData,
      config,
       "infinity"
    );

    dispatch({
      type: UPDATE_PROJECT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PROJECT_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/project/${id}`);

    dispatch({
      type: DELETE_PROJECT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/project/${id}`);
console.log("data",data)
    dispatch({
      type: PROJECT_DETAILS_SUCCESS,
      payload: data.project,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
