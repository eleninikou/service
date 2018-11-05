import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import BasicButton from './../common/BasicButton';
import InputField from './../common/InputField';

export default class SignUpForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  
    getEmail = email => {
      this.setState({ email });
    };
    
    getPassword = password => {
        this.setState({ password });
    };

    getfirstName = firstName => {
        this.setState({ firstName });
    };

    getLasttName = lastName => {
        this.setState({ lastName });
    };
    

  logIn = (email, password) => {
    console.log(email, password);
  };


  render() {
    return (
        <View style={styles.container}>
            <InputField 
              placeholder={'Förnamn'} 
              handleOnChange={this.getFirstName} 
              value={this.state.firstName}
            />
            <InputField 
              placeholder={'Efternamn'} 
              handleOnChange={this.getlastName} 
              value={this.state.LatsName}
            />
            <InputField 
              placeholder={'Email'} 
              handleOnChange={this.getEmail} 
              value={this.state.email}
            />
            <InputField 
              placeholder={'Lösenord'} 
              handleOnChange={this.getPassword} 
              value={this.state.password}
            />
            <BasicButton 
              text={'logga in'} 
              action={() => this.logIn(this.state.email, this.state.password)}
            />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});
