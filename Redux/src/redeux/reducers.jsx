

const initialState = {
    user: null,
    loginToggle: false,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_LOGIN':
        return { ...state, loginToggle: !state.loginToggle };
      case 'SET_USER':
        return { ...state, user: action.payload };
      // Otros casos para manejar diferentes acciones
      default:
        return state;
    }
  };
  
  export default rootReducer;
  