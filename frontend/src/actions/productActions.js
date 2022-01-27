import Axios from 'axios';
import {
  PRODUCT_INFO_FAIL,
  PRODUCT_INFO_REQUEST,
  PRODUCT_INFO_SUCCESS,
  PRODUCT_ITEM_FAIL,
  PRODUCT_ITEM_REQUEST,
  PRODUCT_ITEM_SUCCESS,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_ITEM_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/products');
    dispatch({ type: PRODUCT_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_ITEM_FAIL, payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_INFO_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({ type: PRODUCT_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
