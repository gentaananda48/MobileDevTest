import {userConstants} from '../constants';

const initialState = {
  user: {},
  signingUp: false,
  loggedIn: false,
  loginRequest: false,
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    // Login
    case userConstants.LOGIN_REQUEST:
      // console.log(JSON.stringify(action))
      return {
        ...state,
        loggedIn: false,
        loginRequest: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      // console.log(JSON.stringify(action))
      return {
        ...state,
        loggedIn: true,
        loginRequest: false,
        user: action.user.data.data,
      };
    case userConstants.LOGIN_FAILURE:
      // console.log(JSON.stringify(action))
      return {
        ...state,
        loginRequest: true,
        errorMessage: action.error.message,
      };

    // Register
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        signingUp: true,
        user: action.user,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        signingUp: false,
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        signingUp: false,
        errorMessage: action.error.message,
      };

    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
        user: {},
        codeReferal: [],
      };
  }
  return state;
}
