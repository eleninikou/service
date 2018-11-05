import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import servicesReducer from './reducers/Services';
import accountsReducer from './reducers/Accounts';
import customerReducer from './reducers/Customer';
import employeeReducer from './reducers/Employee';
import authReducer from './reducers/Auth';
import photoReducer from './reducers/Photo';

const middleware = [thunk];
let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const rootReducer = combineReducers({
    services: servicesReducer,
    accounts: accountsReducer,
    customer: customerReducer,
    employee: employeeReducer,
    auth: authReducer,
    photo: photoReducer,
});

const configureStore = () => {
    return createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(...middleware) 
        )
        
        ); 
};

export default configureStore;
