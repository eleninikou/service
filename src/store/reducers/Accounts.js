import {
    FETCH_CUSTOMERS_START, 
    FETCH_CUSTOMERS_SUCCESS, 
    FETCH_CUSTOMERS_FAILURE,
    FETCH_CUSTOMERS_COMPANIES_START, 
    FETCH_CUSTOMERS_COMPANIES_SUCCESS, 
    FETCH_CUSTOMERS_COMPANIES_FAILURE,
    FETCH_CUSTOMERS_PRIVATE_START, 
    FETCH_CUSTOMERS_PRIVATE_SUCCESS, 
    FETCH_CUSTOMERS_PRIVATE_FAILURE,
    FETCH_EMPLOYEES_START, 
    FETCH_EMPLOYEES_SUCCESS, 
    FETCH_EMPLOYEES_FAILURE,
    FETCH_USER_START, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAILURE,
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
} from './../actions/actionTypes/Accounts';

const initialState = {
    isFetching: false,
    user: {},
    employees: [],
    customers: [],
    companies: [],
    privateCustomers: [],
    errorMessage: null
};

const accountsReducer = (state = initialState, action) => {
    switch (action.type) {
           case FETCH_USER_START:
           return {
               ...state,
               isFetching: true
            };
            case FETCH_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.payload
             };
            case FETCH_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
             };
           case FETCH_EMPLOYEES_START:
           return {
               ...state,
               isFetching: true
            };
            case FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                employees: action.payload
             };
            case FETCH_EMPLOYEES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
             };
            case FETCH_CUSTOMERS_START:
            return {
                ...state,
                isFetching: true
             };
             case FETCH_CUSTOMERS_SUCCESS:
             return {
                 ...state,
                 isFetching: false,
                 customers: action.payload
              };
             case FETCH_CUSTOMERS_FAILURE:
             return {
                 ...state,
                 isFetching: false,
                 errorMessage: action.message
              };
            case FETCH_CUSTOMERS_PRIVATE_START:
            return {
               ...state,
               isFetching: true
            };
            case FETCH_CUSTOMERS_PRIVATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                privateCustomers: action.payload
             };
            case FETCH_CUSTOMERS_PRIVATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
             };
             case FETCH_CUSTOMERS_COMPANIES_START:
             return {
                ...state,
                isFetching: true
             };
             case FETCH_CUSTOMERS_COMPANIES_SUCCESS:
             return {
                 ...state,
                 isFetching: false,
                 companies: action.payload
              };
             case FETCH_CUSTOMERS_COMPANIES_FAILURE:
             return {
                 ...state,
                 isFetching: false,
                 errorMessage: action.message
              };
              case CREATE_USER_START:
              return {
                 ...state,
                 isFetching: true
              };
              case CREATE_USER_SUCCESS:
              return {
                  ...state,
                  isFetching: false,
                  user: action.payload
               };
              case CREATE_USER_FAILURE:
              return {
                  ...state,
                  isFetching: false,
                  errorMessage: action.message
               };
            default:
            return state;
    }
}

export default accountsReducer;
