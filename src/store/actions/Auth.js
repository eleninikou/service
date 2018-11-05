
import {
  // LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from './actionTypes/Auth';

// Log in user
export const loginUser = creds => {
  return async dispatch => {
    const recieveLogin = token => {
      dispatch({ type: LOGIN_SUCCESS, payload: token });
      // const cookies = new Cookies();
      // cookies.set('token', token.token, { path: '/', maxAge: 86399 });
      return token;
    };

    const loginError = error => {
      dispatch({ type: LOGIN_FAILURE, message: 'Kunde inte logga in' });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/login`, {
        method: 'POST',
        body: JSON.stringify(creds),
        headers: { 'Content-Type': 'application/json' }
      });
      const token = await res.json();
      return recieveLogin(token);
    } catch (error) {
      return loginError(error);
    }
  };
};

// Register customer
export const registerUser = regUser => {
  return async dispatch => {
    const recieveRegister = user => {
      dispatch({ type: REGISTER_SUCCESS, payload: user });
      return user;
    };
    const RegisterError = error => {
      dispatch({
        type: REGISTER_FAILURE,
        message: 'Kunde inte skapa nya användare'
      });
      return error;
    };

    try {
      const res = await fetch(
        `http://localhost:7770/register`,
        {
          method: 'POST',
          body: JSON.stringify(regUser),
          headers: { 'Content-Type': 'application/json' }
        }
      );

      const requestRegister = () => ({ type: REGISTER_REQUEST });
      const user = await res.json();
      return recieveRegister(user);
      // const cookies = new Cookies();
      // cookies.set('token', res.token, { path: '/', maxAge: 86399 });
    } catch (error) {
      return RegisterError(error);
    }
  };
};
