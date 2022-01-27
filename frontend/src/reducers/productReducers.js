const {
  PRODUCT_ITEM_REQUEST,
  PRODUCT_ITEM_SUCCESS,
  PRODUCT_ITEM_FAIL,
  PRODUCT_INFO_REQUEST,
  PRODUCT_INFO_SUCCESS,
  PRODUCT_INFO_FAIL,
} = require('../constants/productConstants');

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_ITEM_REQUEST:
      return { loading: true };
    case PRODUCT_ITEM_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: {}, loading: true },
  action
) => {
  switch (action.type) {
    case PRODUCT_INFO_REQUEST:
      return { loading: true };
    case PRODUCT_INFO_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_INFO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
