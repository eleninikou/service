import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from './../actions/actionTypes/Auth';

const initialState = {
  user: {},
  isFetching: false,
  errorMessage: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    default:
      return state;
  }
};

export default authReducer;
