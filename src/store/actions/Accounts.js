import {
  // FETCH_CUSTOMERS_START,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  // FETCH_CUSTOMERS_COMPANIES_START,
  FETCH_CUSTOMERS_COMPANIES_SUCCESS,
  FETCH_CUSTOMERS_COMPANIES_FAILURE,
  // FETCH_CUSTOMERS_PRIVATE_START,
  FETCH_CUSTOMERS_PRIVATE_SUCCESS,
  FETCH_CUSTOMERS_PRIVATE_FAILURE,
  // FETCH_EMPLOYEES_START,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  // FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  // UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  // CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  // DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from './actionTypes/Accounts';

// GET ONE USER
export const fetchUser = (id, token) => {
  return async dispatch => {
    const recieveUser = user => {
      dispatch({ type: FETCH_USER_SUCCESS, payload: user });
      return user;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_USER_FAILURE,
        message: 'Användaren kunde inte hämtas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/users/${id}`,
        { headers: { Authorization: token } }
      );
      // const requestUser = () => dispatch({ type: FETCH_USER_START  });
      const user = await res.json();
      return recieveUser(user);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// CREATE USER
export const CreateUser = (regUser, token) => {
  return async dispatch => {
    const saveUser = user => {
      dispatch({ type: CREATE_USER_SUCCESS, payload: user });
      return user;
    };
    const createError = error => {
      dispatch({
        type: CREATE_USER_FAILURE,
        message: 'Kunde inte skapa nya användare'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/users/create`,
        {
          method: 'POST',
          body: JSON.stringify(regUser),
          headers: { Authorization: token, 'Content-Type': 'application/json' }
        }
      );
      // const createUserStart = () => { dispatch({type: CREATE_USER_START })}
      const user = await res.json();
      return saveUser(user);
    } catch (error) {
      return createError(error);
    }
  };
};

// UPDATE USER
export const updateUser = (user, token) => {
  return async dispatch => {
    const updateSuccess = updatedUser => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: user });
      return updatedUser;
    };
    const requestFailure = error => {
      dispatch({
        type: UPDATE_USER_FAILURE,
        message: 'Användaren kunde inte uppdateras'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/users/update/${user.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(user),
          headers: { Authorization: token }
        }
      );
      // const startUpdate = () => { dispatch({ type: UPDATE_USER_START }) };
      const updatedUser = await res.json();
      return updateSuccess(updatedUser);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// DELETE USER
export const deleteUser = (token, id) => {
  return async dispatch => {
    const deleteUserSuccess = user => {
      dispatch({ type: DELETE_USER_SUCCESS, payload: user });
      return user;
    };
    const deleteFailure = error => {
      dispatch({
        type: DELETE_USER_FAILURE,
        message: 'Användaren kunde inte raderas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/users/${id}/delete`,
        {
          method: 'DELETE',
          headers: { Authorization: token, 'Content-Type': 'application/json' }
        }
      );
      // const deleteUserStart = () => { dispatch({ type: DELETE_USER_START  }) };
      const user = await res.json();
      return deleteUserSuccess(user);
    } catch (error) {
      return deleteFailure(error);
    }
  };
};

// TO GET CUSTOMERS
export const fetchCustomers = token => {
  return async dispatch => {
    const recieveCustomers = customers => {
      dispatch({ type: FETCH_CUSTOMERS_SUCCESS, payload: customers });
      return customers;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_CUSTOMERS_FAILURE,
        message: 'Kunder kunde inte hämtas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/users/customers`,
        { headers: { Authorization: token } }
      );
      // const requestCustomers = () => { dispatch(({ type: FETCH_CUSTOMERS_START })) };
      const customers = await res.json();
      return recieveCustomers(customers);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// TO GET EMPLOYEES CONNECTED TO ADMIN (NOT CUSTOMER)
export const fetchEmployees = (token, id) => {
  return async dispatch => {
    const recieveEmployees = users => {
      dispatch({ type: FETCH_EMPLOYEES_SUCCESS, payload: users });
      return users;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_EMPLOYEES_FAILURE,
        message: 'Anställda kunde inte hämtas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/users/admins/${id}/employees`,
        { headers: { Authorization: token } }
      );
      // const requestEmployees = () => { dispatch(({ type: FETCH_EMPLOYEES_START })) };
      const users = await res.json();
      return recieveEmployees(users);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// TO GET ALL PRIVATE CUSTOMERS
export const fetchPrivateCustomers = token => {
  return async dispatch => {
    const recievePrivateCustomers = users => {
      dispatch({ type: FETCH_CUSTOMERS_PRIVATE_SUCCESS, payload: users });
      return users;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_CUSTOMERS_PRIVATE_FAILURE,
        message: 'Privatkunder kunde inte hämtas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/users/customers/private`,
        { headers: { Authorization: token } }
      );
      // const requestPrivateCustomers = () => { dispatch(({ type: FETCH_CUSTOMERS_PRIVATE_START  })) };
      const users = await res.json();
      return recievePrivateCustomers(users);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// TO GET ALL COMPANIES/ CUSTOMER ADMINS
export const fetchCompanies = token => {
  return async dispatch => {
    const recieveCompanies = companies => {
      dispatch({ type: FETCH_CUSTOMERS_COMPANIES_SUCCESS, payload: companies });
      return companies;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_CUSTOMERS_COMPANIES_FAILURE,
        message: 'Företagskunder kunde inte hämtas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/users/customers/company`,
        { headers: { Authorization: token } }
      );
      // const requestCompanies = () => { dispatch({ type: FETCH_CUSTOMERS_COMPANIES_START })};
      const companies = await res.json();
      return recieveCompanies(companies);
    } catch (error) {
      return requestFailure(error);
    }
  };
};
