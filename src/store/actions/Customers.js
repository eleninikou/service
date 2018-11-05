import {
  FETCH_SERVICES_START,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
//   FETCH_DONE_START,
  FETCH_DONE_SUCCESS,
  FETCH_DONE_FAILURE,
//   ORDER_CREATE_START,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAILURE,
//   COMPLAINT_CREATE_START,
  COMPLAINT_CREATE_SUCCESS,
  COMPLAINT_CREATE_FAILURE,
  SEND_CUSTOMER_NOTIFICATION,
  // FETCH_EMPLOYEES_START,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE
} from './actionTypes/Customers';

// GET ALL SERVICES FOR ONE CUSTOMER
export const fetchServices = (token, id) => {
  return async dispatch => {
    const recieveServices = services => {
      dispatch({ type: FETCH_SERVICES_SUCCESS, payload: services });
      return services;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_SERVICES_FAILURE,
        message: 'Ärenden kunde inte hämtas'
      });
      return error;
    };
    try {
      const res = await fetch(`http://localhost:7770/services/customer/${id}`,
        { headers: { Authorization: token } }
      );
      const requestServices = () => {
        dispatch({ type: FETCH_SERVICES_START });
      };
      const services = await res.json();
      return recieveServices(services);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// GET ALL COMPLETED SERVICES FOR ONE CUSTOMER
export const fetchDone = (token, userId, currentDone) => {
  return async dispatch => {
    const fetchDoneSuccess = services => {
      dispatch({ type: FETCH_DONE_SUCCESS, payload: services });
      return services;
    };
    const fetchDoneFailure = error => {
      dispatch({
        type: FETCH_DONE_FAILURE,
        message: 'Avslutade ärenden kunde inte hämtas'
      });
      return error;
    };
    const notificationSent = push => {
      dispatch({ type: SEND_CUSTOMER_NOTIFICATION, payload: push });
    };

    try {
      const res = await fetch(`http://localhost:7770/services/customer/${userId}/done`,
        { headers: { authorization: token } }
      );
      // const fetchDoneRequest = () => { dispatch({ type: FETCH_DONE_START }); }
      const services = await res.json();

      if (currentDone === undefined || []) {
        return fetchDoneSuccess(services);
      } else {
        if (services.length > currentDone.length) {
          const notification = await fetch(`http://localhost:7770/notify/customer`,
            {
              method: 'POST',
              body: JSON.stringify(services[services.length]),
              headers: { 'content-type': 'application/json' }
            }
          );
          const push = await notification.json();
          return notificationSent(push);
        }
      }

      return fetchDoneSuccess(services);
    } catch (error) {
      return fetchDoneFailure(error);
    }
  };
};

// GET ALL SERVICES FOR ONE EMPLOYEE
export const fetchEmpServices = (token, id) => {
  return async dispatch => {
    const recieveEmpServices = services => {
      dispatch({ type: FETCH_SERVICES_SUCCESS, payload: services });
      return services;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_SERVICES_FAILURE,
        message: 'Ärenden kunde inte hämtas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/services/user/${id}`,
        { headers: { Authorization: token } }
      );
      // const requestEmpServices = () => { dispatch(({ type: FETCH_SERVICES_START }))};
      const services = await res.json();
      return recieveEmpServices(services);
    } catch (error) {
      return requestFailure(error);
    }
  };
};
// CREATE SERVICE
export const createOrder = (token, form) => {
  return async dispatch => {
    const createOrderSuccess = order => {
      dispatch({ type: ORDER_CREATE_SUCCESS, payload: order });
      return order;
    };
    const requestFailure = error => {
      dispatch({
        type: ORDER_CREATE_FAILURE,
        message: 'Ärende kunde inte skapas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/services/create`,
        {
          method: 'POST',
          body: JSON.stringify(form),
          headers: { Authorization: token, 'Content-Type': 'application/json' }
        }
      );
      // const startCreateOrder = () => { dispatch({ type: ORDER_CREATE_START })};
      const order = await res.json();
      return createOrderSuccess(order);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// CREATE COMPLAINT
export const createComplaint = (form, id, token) => {
  return async dispatch => {
    const createComplaintSuccess = complaint => {
      dispatch({ type: COMPLAINT_CREATE_SUCCESS, payload: complaint });
      return complaint;
    };
    const requestFailure = error => {
      dispatch({
        type: COMPLAINT_CREATE_FAILURE,
        message: 'Reklamation kunde inte skapas'
      });
      return error;
    };

    try {
      const cookies = new Cookies();
      const token = cookies.get('token');
      const res = await fetch(`http://localhost:7770/services/${id}/complaint/create`,
        {
          method: 'PUT',
          body: JSON.stringify(form),
          headers: { Authorization: token, 'Content-Type': 'application/json' }
        }
      );
      // const startCreateComplaint = () => {dispatch(({ type: COMPLAINT_CREATE_START }))};
      const complaint = await res.json();
      return createComplaintSuccess(complaint);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

//GET EMPLOYEES    
export function fetchCustomerEmployees(token, id) {
    return async dispatch => {
        const recieveCustomerEmployees = employees => { dispatch({type: FETCH_EMPLOYEES_SUCCESS, payload: employees }); return employees;}
        const requestFailure = error => { dispatch({ type: FETCH_EMPLOYEES_FAILURE, message: 'Anställda kunde inte hämtas' }); return error; }
        
        try {
            const res = await fetch(`http://localhost:7770/users/customers/${id}/employees`, 
            { headers: { Authorization: token }});
            // const requestCustomerEmployees = () => { dispatch({ type: FETCH_EMPLOYEES_START });}
            const employees = await res.json();
            return recieveCustomerEmployees(employees);
        } catch (error) { return requestFailure(error);}
    }
}  
