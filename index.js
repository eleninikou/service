import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => ( // Function that returns JSX
    <Provider store={store}>
        <App />
    </Provider>
);

// String has to match name of map. Return first component to be rendered 
AppRegistry.registerComponent('service', () => RNRedux); // only the root component
