import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const SET_CART = "SET_CART";
const ADD_CART = "ADD_CART";
const DELETE_CART = "DELETE_CART";
const UPDATE_CART = "UPDATE_CART";

const setCart = createAction(SET_CART, (cartList) => ({ cartList }));
const addCart = createAction(ADD_CART, (cart) => ({ cart }));
const deleteCart = createAction(DELETE_CART, (cart_id) => ({ cart_id }));

const initialState = {
  list:[],
}

const getCartAPI = (userId =null) => {
  return function (dispatch, getState, { history }) {
    if (!userId) {
      return false;
    }
  }
}

const addCartAPI = (userId =null,productId=null,count=null) => {
  return function (dispatch, getState, { history }) {
    
    if (!userId || !productId || !count) {
      return false;
    }

  }
}

const deleteCartAPI = (userId=null,productId=null) => {
  return function (dispatch, getState, { history }) {
    
    if (!userId || !productId) {
      return false;
    }
  }
}

export default handleActions(
  {
    [SET_CART]: (state, action) => produce(state, (draft)=>{
      draft.list = action.payload.cartList;
    }),
    [ADD_CART]: (state, action) => produce(state, (draft) => {
      draft.list.push(action.payload.cart);
    }),
    [DELETE_CART]: (state, action) => produce(state, (draft) => {
      draft.list.splice(idx, 1);
    }),
  },initialState
);

const actionCreators = {

};

export { actionCreators };