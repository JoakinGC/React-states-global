export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';



export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const toggleLogin = () => ({
  type: TOGGLE_LOGIN,
});