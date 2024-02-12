export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const SET_PASSWORD_ACTUAL = 'SET_PASSWORD_ACTUAL';
export const SET_USERNAME_ACTUAL = 'SET_USERNAME_ACTUAL';



export const setUsernameActual = (username) => ({
  type: SET_USERNAME_ACTUAL,
  payload: username,
});

export const setPasswordActual = (password) => ({
  type: SET_PASSWORD_ACTUAL,
  payload: password,
});

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