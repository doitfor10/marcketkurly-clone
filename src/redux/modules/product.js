import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const SET_PRODUCT = "SET_PRODUCT";
const LOADING = "LOADING";

const setProduct = createAction(SET_PRODUCT, (product_list) => ({ product_list }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  is_loading: false,
};

//기본값 등록순
const getProductAPI = () => {
  return function (dispatch, getState, { history }) {
    
    dispatch(loading(true));

    const API = 'http://dmsql5303.shop/api/v1/products/default';
    fetch(API).then((response) => response.json())
      .then((result) => {
        
        let product_list = [];
        result.forEach((p) => {
          
          let product = {
            pid: p.pid,
            title: p.title,
            price: p.price,
            subtext: p.subtext,
            img:p.img,
          }
        product_list.push(product);
        });
        dispatch(setProduct(product_list));
      })
  }
};

//가격 오름차순
const getProductPriceAscAPI = () => {
  return function (dispatch, getState, { history }) {

    const API = 'http://dmsql5303.shop/api/v1/products/asc';
    fetch(API).then((response) => response.json())
      .then((result) => {
        
        let product_list = [];
        result.forEach((p) => {
          
          let product = {
            pid: p.pid,
            title: p.title,
            price: p.price,
            subtext: p.subtext,
            img: p.img,
          }
          product_list.push(product);
        });
        dispatch(setProduct(product_list));
      })
  }
};

//가격 내림차순
const getProductPriceDescAPI = () => {
  return function (dispatch, getState, { history }) {

    const API = 'http://dmsql5303.shop/api/v1/products/desc';
    fetch(API).then((response) => response.json())
      .then((result) => {
        
        let product_list = [];
        result.forEach((p) => {
          
          let product = {
            pid: p.pid,
            title: p.title,
            price: p.price,
            subtext: p.subtext,
            img: p.img,
          }
          product_list.push(product);
        });
        dispatch(setProduct(product_list));
      })
  }
}

export default handleActions({

  [SET_PRODUCT]: (state, action) => produce(state, (draft) => {
    draft.list = action.payload.product_list;
    draft.is_loading = false;
  }),
  [LOADING]: (state, action) => produce(state, (draft) => {
    draft.is_loading = action.payload.is_loading;
  }),
}, initialState);

const actionCreators = {

  getProductAPI,
  getProductPriceAscAPI,
  getProductPriceDescAPI,

};

export { actionCreators };