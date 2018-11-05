import {
  FETCH_EMP_ASSIGNED_REQUEST,
  FETCH_EMP_ASSIGNED_SUCCESS,
  FETCH_EMP_ASSIGNED_FAILURE,
  FETCH_EMP_DONE_REQUEST,
  FETCH_EMP_DONE_SUCCESS,
  FETCH_EMP_DONE_FAILURE,
  SEND_EMPLOYEE_NOTIFICATION
} from './../actions/actionTypes/Employees';

const initialState = {
  Assigned: [],
  Done: [],
  service: {},
  isFetching: false,
  errorMessage: null,
  notification: ''
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMP_ASSIGNED_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_EMP_ASSIGNED_SUCCESS:
      return {
        ...state,
        isFetching: false,
        Assigned: action.payload.services
      };
    case FETCH_EMP_ASSIGNED_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case FETCH_EMP_DONE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_EMP_DONE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case FETCH_EMP_DONE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        Done: action.payload.services
      };
    case SEND_EMPLOYEE_NOTIFICATION:
    return {
      ...state,
      notification: action.payload
    };     
    default:
      return state;
  }
};

export default employeeReducer;
