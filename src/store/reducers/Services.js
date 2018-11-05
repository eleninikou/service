import {
  FETCH_SERVICE_START,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_FAILURE,
  FETCH_SERVICES_START,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_NEW_SERVICES_START,
  FETCH_NEW_SERVICES_SUCCESS,
  FETCH_NEW_SERVICES_FAILURE,
  FETCH_SERVICES_ASSIGNED_START,
  FETCH_SERVICES_ASSIGNED_SUCCESS,
  FETCH_SERVICES_ASSIGNED_FAILURE,
  FETCH_SERVICES_DONE_START,
  FETCH_SERVICES_DONE_SUCCESS,
  FETCH_SERVICES_DONE_FAILURE,
  SERVICE_HANDLE_START,
  SERVICE_HANDLE_SUCCESS,
  SERVICE_HANDLE_FAILURE,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  FETCH_INTERNAL_ORDERS_START,
  FETCH_INTERNAL_ORDERS_SUCCESS,
  FETCH_INTERNAL_ORDERS_FAILURE,
  FETCH_COMPLAINTS_START,
  FETCH_COMPLAINTS_SUCCESS,
  FETCH_COMPLAINTS_FAILURE,
  DELETE_SERVICE_START,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAILURE,
  SEND_ADMIN_NOTIFICATION
} from './../actions/actionTypes/Services';

const initialState = {
  isFetching: false,
  service: {},
  services: [],
  servicesNew: [],
  servicesAssigned: [],
  servicesDone: [],
  order: {},
  orders: [],
  internalOrder: {},
  internalOrders: [],
  complaints: [],
  form: {},
  successMessage: null,
  errorMessage: null,
  notification: ''
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICE_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SERVICE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        service: action.payload
      };
    case FETCH_SERVICE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case FETCH_SERVICES_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        services: action.payload
      };
    case FETCH_SERVICES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case FETCH_NEW_SERVICES_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_NEW_SERVICES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        servicesNew: action.payload
      };
    case FETCH_NEW_SERVICES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case FETCH_SERVICES_ASSIGNED_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SERVICES_ASSIGNED_SUCCESS:
      return {
        ...state,
        isFetching: false,
        servicesAssigned: action.payload
      };
    case FETCH_SERVICES_ASSIGNED_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case FETCH_SERVICES_DONE_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SERVICES_DONE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        servicesDone: action.payload
      };
    case FETCH_SERVICES_DONE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case FETCH_ORDERS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        orders: action.payload
      };
    case FETCH_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case FETCH_INTERNAL_ORDERS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_INTERNAL_ORDERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        internalOrders: action.payload
      };
    case FETCH_INTERNAL_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case FETCH_COMPLAINTS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_COMPLAINTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        complaints: action.payload
      };
    case FETCH_COMPLAINTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case SERVICE_HANDLE_START:
      return {
        ...state,
        isFetching: true
      };
    case SERVICE_HANDLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        successMessage: action.payload
      };
    case SERVICE_HANDLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case DELETE_SERVICE_START:
      return {
        ...state,
        isFetching: true
      };
    case DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        services: state.services.filter(
          service => service.id !== action.payload.id
        )
      };
    case DELETE_SERVICE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case SEND_ADMIN_NOTIFICATION:
      return {
        ...state,
        notification: action.payload
      };
    default:
      return state;
  }
};

export default servicesReducer;
