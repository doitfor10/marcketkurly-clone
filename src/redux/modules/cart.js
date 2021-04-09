import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const SET_CART = "SET_CART";
const ADD_CART = "ADD_CART";
const DELETE_CART = "DELETE_CART";
const UPDATE_CART = "UPDATE_CART";

const setCart = createAction(SET_CART, (cartList) => ({ cartList }));
const addCart = createAction(ADD_CART, (cart) => ({ cart }));
const deleteCart = createAction(DELETE_CART, (cartId) => ({ cartId }));
const updateCart = createAction(UPDATE_CART, (cart_id, cart) => ({ cart_id, cart}));
const initialState = {
  list:[],
}

const getCartAPI = (userId =null) => {
  return function (dispatch, getState, { history }) {
    if (!userId) {
      return false;
    }
    const token = localStorage.getItem('token');
    const API = `http://dmsql5303.shop/api/v1/cart/${userId}`;
    fetch(API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`${token}`,
      }}).then((response) => response.json()).then((result) => {
      
        let cart_list = [];
        result.forEach((r) => {
          let cart = {
            cid: r.cid,
            productCount: r.count,
            productTitle: r.product.title,
            productPrice: r.product.price,
            productImg: r.product.img,
          }
          cart_list.push(cart);
        });
        dispatch(setCart(cart_list));
  });

  }
}

const addCartAPI = (userId =null,productId=null,count=null) => {
  return function (dispatch, getState, { history }) {
    
    const token = localStorage.getItem('token');
    if (!userId || !productId || !count || !token) {
      return false;
    }
    const API = `http://dmsql5303.shop/api/v1/cart/${userId}/${productId}`;
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`${token}`,
      },
      body: JSON.stringify({
        count: count,
      })
    }).then((response) => response.json())
      .then((result) => {
        console.log('잘 담겼다!');
      });
  }
}

const deleteCartAPI = (cid=null) => {
  return function (dispatch, getState, { history }) {
    
    const token = localStorage.getItem('token');

    if (!cid || !token) {
      return false;
    }

    const API = `http://dmsql5303.shop/api/v1/cart/${cid}`;
    fetch(API, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      }
    }).then((response) => {
      dispatch(deleteCart(cid))
    });
    

  }
}

const updateCartAPI = (cid=null,count=null) => {
  
  return function (dispacth, getState, { history }) {
    const token = localStorage.getItem('token');

    if (!cid || !token || !count) {
      return false;
    }
    
    const API = `http://dmsql5303.shop/api/v1/cart/${cid}`;
    fetch(API, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      },
      body: JSON.stringify({
        count:count
      })
    }).then((response) => response.json())
      .then((result) => {
        
        const cartList = getState().cart.list;
        let idx = cartList.findIndex((c) => c.cid === cid);
        let cart = cartList[idx];
        cart = { ...cart, productCount: count };
        dispacth(updateCart(cid, cart));
        
      });
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
      let idx = draft.list.findIndex((c)=>c.cid === action.payload.cartId)
      draft.list.splice(idx, 1);
    }),
    [UPDATE_CART]: (state, action) => produce(state, (draft) => {
      let idx = draft.list.findIndex((c) => c.cid === action.payload.cart_id);
      draft.list[idx] = { ...draft.list[idx], ...action.payload.cart };
    }),
  },initialState
);

const actionCreators = {
  addCartAPI,
  getCartAPI,
  deleteCartAPI,
  updateCartAPI
};

export { actionCreators };