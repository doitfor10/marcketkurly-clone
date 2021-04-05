import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';


const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
};


const checkIdAPI = (id) => {
  return function (dispatch, getState, { history }) {
    
    const API = `http://dmsql5303.shop/api/v1/signup/username/${id}`;
    fetch(API).then((response) => response.json())
      .then((result) => {
        console.log(result); //중복시 false
      });
  }
};

const checkEmailAPI = (email) => {
  return function (dispatch, getState, { history }) {

    const API = `http://dmsql5303.shop/api/v1/signup/email/${email}`;
    fetch(API).then((response) => response.json())
      .then((result) => {
        console.log(result); //중복시 false
      });

    
  }
};


const signupAPI = (id,pw,userName,email,address) => {
  return function (dispatch, getState, { history }) {
    
  const API = 'http://dmsql5303.shop/api/v1/signup';
  fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: id,
        password: pw,
        name: userName,
        email: email,
        address:address
    })
  })
    .then((response) => response)
    .then((result) => {
    console.log(result.ok);
  });
  }
};

const loginAPI = (id, pw) => {
  return function (dispatch, getState, { history }) {
    

    // const API = 'api';
    // fetch(API, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     userId: id,
    //     password: pw,
    //   })
    // }).then((response) => response.json)
    //   .then((result) => {
    //     console.log(result);
    //   });

  }
};

const logout = () => {
  return function (dispatch, getState, { history }) {
    
  }
};

export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {
      draft.user = action.payload.user;
      draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
      draft.user = null;
      draft.is_login = false;
    }),

  }, initialState);
  
const actionCreators = {

  checkIdAPI,
  checkEmailAPI,
  signupAPI,
  loginAPI,
  logOut

};

export { actionCreators };