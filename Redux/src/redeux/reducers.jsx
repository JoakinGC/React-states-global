import { combineReducers } from 'redux';
import { SET_USERNAME, SET_PASSWORD, TOGGLE_LOGIN,SET_PASSWORD_ACTUAL,SET_USERNAME_ACTUAL } from './actions';

//Aqui NO se almacena en realidad el usuario, eso seria tonto en realidad se envirian los datos por POST y luego comrpobamos pero para el ejemplo ususaremos esto


//Estados iniciales:
const initialState = {
  username: '',
  password: '',
  isLoggedIn: false,
};

const initiUser1 = {
  
    name:"pepe",
    password2:"pepona"
  
};

const initiUser2 = {
  
    name:"sergio",
    password:"pepona2"
  
};
const initiUser3 = {
  
    name:"Antonio",
    password:"pepona3"
  
};

const userActual = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME_ACTUAL:
      return {
        ...state,
        username: action.payload,
      };
    case SET_PASSWORD_ACTUAL:
      return {
        ...state,
        password: action.payload,
      };
    case TOGGLE_LOGIN:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    default:
      return state;
  }
};

const reduceUser1 = (state = initiUser1, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

const reduceUser2 = (state = initiUser2, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

const reduceUser3 = (state = initiUser3, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  userActual,
  reduceUser1,
  reduceUser2,
  reduceUser3,
});



