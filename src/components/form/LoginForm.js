import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

import { loginUser } from './../../store/actions/Auth';
import BasicButton from './../common/BasicButton';
import InputField from './../common/InputField';
import Logo from './../../assets/logo_servicebyran.png';


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    passwordError: false,
    isFetching: false,
  };

  getEmail = email => {
    this.setState({ email });
  };

  getPassword = password => {
    this.setState({ password });
  };

  logIn = (email, password) => {
    const creds = { email, password };
    this.props.loginUser(creds).then(res => {
      if (res.token) {
        this.setState({ message: 'success' });
        console.log(res);
      } else {
        this.setState({ errorMessage: res.error });
      }
    });
  };


  render() {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={Logo} 
            />
            <InputField 
                placeholder={'Email'} 
                handleOnChange={this.getEmail} 
                value={this.state.email}
            />
            <InputField 
                placeholder={'Password'} 
                handleOnChange={this.getPassword} 
                value={this.state.password}
                password
            />
            {/* <TouchableOpacity>
              <Icon name="angle-down" size={30} />
            </TouchableOpacity>   */}
              <BasicButton 
                  text={'logga in'} 
                  action={() => this.logIn(this.state.email, this.state.password)}
              />
            <Text>{this.state.message}</Text>
            <Text>{this.state.errorMessage}</Text>

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
  },
  logo: {
    padding: 10,
    marginBottom: 30
  }
});


const mapDispatchToProps = dispatch => { 
  return { 
    loginUser: creds => dispatch(loginUser(creds))
  };
};


export default connect(null, mapDispatchToProps)(LoginForm);
