import {
  FETCH_SERVICE_START,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_FAILURE,
  FETCH_SERVICES_START,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_NEW_SERVICES_START,
  FETCH_NEW_SERVICES_SUCCESS,
  FETCH_NEW_SERVICES_FAILURE,
  FETCH_SERVICES_ASSIGNED_START,
  FETCH_SERVICES_ASSIGNED_SUCCESS,
  FETCH_SERVICES_ASSIGNED_FAILURE,
  FETCH_SERVICES_DONE_START,
  FETCH_SERVICES_DONE_SUCCESS,
  FETCH_SERVICES_DONE_FAILURE,
  SERVICE_HANDLE_START,
  SERVICE_HANDLE_SUCCESS,
  SERVICE_HANDLE_FAILURE,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  FETCH_INTERNAL_ORDERS_START,
  FETCH_INTERNAL_ORDERS_SUCCESS,
  FETCH_INTERNAL_ORDERS_FAILURE,
  FETCH_COMPLAINTS_START,
  FETCH_COMPLAINTS_SUCCESS,
  FETCH_COMPLAINTS_FAILURE,
  DELETE_SERVICE_START,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAILURE,
  SEND_ADMIN_NOTIFICATION
} from './actionTypes/Services';

// GET ONE SERVICE
export const fetchService = (token, id) => {
  return async dispatch => {
    const recieveService = service => {
      dispatch({ type: FETCH_SERVICE_SUCCESS, payload: service });
      return service;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_SERVICE_FAILURE,
        message: 'Ärende kunde inte hämtas'
      });
      return error;
    };

    try {
      const res = await fetch(
        `http://localhost:7770/services/${id}`,
        { headers: { Authorization: token } }
      );
      const requestService = () => {
        dispatch({ type: FETCH_SERVICE_START });
      };
      const service = await res.json();
      return recieveService(service);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// GET ALL SERVICES
export const fetchServices = token => {
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
      const res = await fetch(
        `http://localhost:7770/services`,
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

// GET ALL NEW SERVICES
export const fetchNewServices = (token, currentNewServices) => {
  return async dispatch => {
    const recieveNewServices = servicesNew => {
      dispatch({ type: FETCH_NEW_SERVICES_SUCCESS, payload: servicesNew });
      return servicesNew;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_NEW_SERVICES_FAILURE,
        message: 'Nya ärenden kunde inte hämtas'
      });
      return error;
    };
    const notificationSent = push => {
      dispatch({ type: SEND_ADMIN_NOTIFICATION, payload: push });
    };

    try {
      const res = await fetch(
        `http://localhost:7770/services/new`,
        { headers: { Authorization: token } }
      );
      const requestServicesNew = () => {
        dispatch({ type: FETCH_NEW_SERVICES_START });
      };
      const servicesNew = await res.json();

      if (
        servicesNew.length > currentNewServices.length &&
        currentNewServices !== undefined
      ) {
        const notification = await fetch(`http://localhost:7770/notify/admin`,
          {
            method: 'POST',
            body: JSON.stringify(servicesNew[servicesNew.length]),
            headers: { 'content-type': 'application/json' }
          }
        );
        const push = await notification.json();
        return notificationSent(push);
      }

      return recieveNewServices(servicesNew);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// GET ALL ASSIGNED SERVICES
export const fetchServicesAssigned = token => {
  return async dispatch => {
    const recieveServicesAssigned = servicesAssigned => {
      dispatch({
        type: FETCH_SERVICES_ASSIGNED_SUCCESS,
        payload: servicesAssigned
      });
      return servicesAssigned;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_SERVICES_ASSIGNED_FAILURE,
        message: 'Hanterade ärenden kunde inte hämtas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/services/assigned`,
        { headers: { Authorization: token } }
      );
      const requestServiceAssigned = () => {
        dispatch({ type: FETCH_SERVICES_ASSIGNED_START });
      };
      const servicesAssigned = await res.json();
      return recieveServicesAssigned(servicesAssigned);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// GET ALL COMPLETED SERVICES
export const fetchServicesDone = token => {
  return async dispatch => {
    const recieveServicesDone = servicesDone => {
      dispatch({ type: FETCH_SERVICES_DONE_SUCCESS, payload: servicesDone });
      return servicesDone;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_SERVICES_DONE_FAILURE,
        message: 'Avslutade ärenden kunde inte hämtas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/services/done`,
        {
          headers: { Authorization: token }
        }
      );
      const requestServicesDone = () => {
        dispatch({ type: FETCH_SERVICES_DONE_START });
      };
      const servicesDone = await res.json();
      return recieveServicesDone(servicesDone);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// HANDLE SERVICE
export const serviceHandle = (token, id, form) => {
  return async dispatch => {
    const serviceHandleSuccess = service => {
      dispatch({ type: SERVICE_HANDLE_SUCCESS, payload: service });
      return service;
    };
    const handleFailure = error => {
      dispatch({
        type: SERVICE_HANDLE_FAILURE,
        message: 'Ärende kunde inte uppdateras'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/services/${id}/handle`,
        {
          method: 'PUT',
          body: JSON.stringify(form),
          headers: { Authorization: token, 'Content-Type': 'application/json' }
        }
      );
      const requestServicesHandle = () => {
        dispatch({ type: SERVICE_HANDLE_START });
      };
      const service = await res.json();
      return serviceHandleSuccess(service);
    } catch (error) {
      return handleFailure(error);
    }
  };
};

// DELETE SERVICE
export const deleteService = (token, id) => {
  return async dispatch => {
    const deleteServiceSuccess = service => {
      dispatch({ type: DELETE_SERVICE_SUCCESS, payload: service });
      return service;
    };
    const deleteFailure = error => {
      dispatch({
        type: DELETE_SERVICE_FAILURE,
        message: 'Ärende kunde inte raderas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/services/${id}/delete`,
        {
          method: 'DELETE',
          headers: { Authorization: token, 'Content-Type': 'application/json' }
        }
      );
      const requestDeleteService = () => {
        dispatch({ type: DELETE_SERVICE_START });
      };
      const service = await res.json();
      return deleteServiceSuccess(service);
    } catch (error) {
      return deleteFailure(error);
    }
  };
};

// GET ALL ORDERS
export const fetchOrders = token => {
  return async dispatch => {
    const recieveOrders = orders => {
      dispatch({ type: FETCH_ORDERS_SUCCESS, payload: orders });
      return orders;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_ORDERS_FAILURE,
        message: 'Beställningar kunde inte hämtas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/orders`, {
        headers: { Authorization: token }
      });
      const requestOrders = () => {
        dispatch({ type: FETCH_ORDERS_START });
      };
      const orders = await res.json();
      return recieveOrders(orders);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// GET ALL INTERNAL ORDERS
export const fetchInternalOrders = token => {
  return async dispatch => {
    const recieveInternalOrders = internalOrders => {
      dispatch({
        type: FETCH_INTERNAL_ORDERS_SUCCESS,
        payload: internalOrders
      });
      return internalOrders;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_INTERNAL_ORDERS_FAILURE,
        message: 'Interna ärenden kunde inte hämtas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/int_orders`,
        { headers: { Authorization: token } }
      );
      const fetchInternalOrders = () => {
        dispatch({ type: FETCH_INTERNAL_ORDERS_START });
      };
      const internalOrders = await res.json();
      return recieveInternalOrders(internalOrders);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// GET ALL COMPLAINTS
export const fetchComplaints = token => {
  return async dispatch => {
    const recieveComplaints = complaints => {
      dispatch({ type: FETCH_COMPLAINTS_SUCCESS, payload: complaints });
      return complaints;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_COMPLAINTS_FAILURE,
        message: 'Reklamationer kunde inte hämtas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/complaints`,
        { headers: { Authorization: token } }
      );
      const requestComplaints = () => {
        dispatch({ type: FETCH_COMPLAINTS_START });
      };
      const complaints = await res.json();
      return recieveComplaints(complaints);
    } catch (error) {
      return requestFailure(error);
    }
  };
};
