import { SET_USERNAME, SET_PASSWORD, TOGGLE_LOGIN } from './actions';

const initialState = {
  username: '',
  password: '',
  isLoggedIn: false,
  user1:{
    name:"pepe",
    password:"pepona"
  },
  user2:{
    name:"sergio",
    password:"pepona2"
  },
  user3:{
    name:"Antonio",
    password:"pepona3"
  },
};

const rootReducer = (state = initialState, action) => {
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
    case TOGGLE_LOGIN:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    default:
      return state;
  }
};

export default rootReducer;
