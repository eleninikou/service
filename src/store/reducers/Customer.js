import {
    FETCH_SERVICES_START,
    FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_FAILURE,
    FETCH_DONE_START,
	FETCH_DONE_SUCCESS,
	FETCH_DONE_FAILURE,
    ORDER_CREATE_START,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAILURE,
    COMPLAINT_CREATE_START,
    COMPLAINT_CREATE_SUCCESS,
    COMPLAINT_CREATE_FAILURE,
    FETCH_EMPLOYEES_START,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_FAILURE
} from "./../actions/actionTypes/Customers"

const initialState = {
    services: [],
    service: {},
    order: {},
    complaint: {},
    done: [],
    user: {},
    employees: [],
    isFetching: false,
    errorMessage: null
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
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
            }
        case FETCH_DONE_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_DONE_SUCCESS:
        return {
            ...state,
            isFetching: false,
            done: action.payload
        };
        case FETCH_DONE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            }
        case ORDER_CREATE_START:
            return {
                ...state,
                isFetching: true,
            };
        case ORDER_CREATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                order: action.payload
            };
        case ORDER_CREATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        case COMPLAINT_CREATE_START:
            return {
                ...state,
                isFetching: true,
            };
        case COMPLAINT_CREATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                complaint: action.payload
            };
        case COMPLAINT_CREATE_FAILURE:
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
        default:
            return state;
    }
}

export default customerReducer;