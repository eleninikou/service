import React, { Component } from 'react';
import { View } from 'react-native';
import LoginForm from './src/components/form/LoginForm';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoginForm />
      </View>  
    );
  }
}

export default App;
