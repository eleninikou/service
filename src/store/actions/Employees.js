import {
  // FETCH_EMP_ASSIGNED_REQUEST,
  FETCH_EMP_ASSIGNED_SUCCESS,
  FETCH_EMP_ASSIGNED_FAILURE,
  // FETCH_EMP_DONE_REQUEST,
  FETCH_EMP_DONE_SUCCESS,
  FETCH_EMP_DONE_FAILURE,
  // FETCH_SERVICE_COMPLETE_START,
  FETCH_SERVICE_COMPLETE_SUCCESS,
  FETCH_SERVICE_COMPLETE_FAILURE,
  SEND_EMPLOYEE_NOTIFICATION,
  SAVE_PHOTOS_SUCCESS,
  SAVE_PHOTOS_FAILURE
} from './actionTypes/Employees';

// INCOMING/ASSIGNED SERVICES
export const fetchAssigned = (userId, token, currentAssigned) => {
  return async dispatch => {
    const fetchAssignedSuccess = user => {
      dispatch({ type: FETCH_EMP_ASSIGNED_SUCCESS, payload: user });
      return user;
    };
    const fetchAssignedFailure = error => {
      dispatch({
        type: FETCH_EMP_ASSIGNED_FAILURE,
        message: 'Dina ärenden kunde inte hämtas'
      });
      return error;
    };
    const notificationSent = push => {
      dispatch({ type: SEND_EMPLOYEE_NOTIFICATION, payload: push });
    };

    try {
      const res = await fetch(`http://localhost:7770/services/employee/${userId}/assigned`,
        { headers: { authorization: token } }
      );
      // const fetchAssignedRequest = () => { dispatch({ type: FETCH_EMP_ASSIGNED_REQUEST }); }
      const user = await res.json();

      if (currentAssigned === undefined) {
        return fetchAssignedSuccess(user);
      } else {
        if (user.services.length > currentAssigned.length) {
          const notification = await fetch(`http://localhost:7770/notify/employee`,
            {
              method: 'POST',
              body: JSON.stringify(user),
              headers: { 'content-type': 'application/json' }
            }
          );
          const push = await notification.json();
          return notificationSent(push);
        }
      }

      return fetchAssignedSuccess(user);
    } catch (error) {
      return fetchAssignedFailure(error);
    }
  };
};

// COMPLETED SERVICES
export const fetchDone = (userId, token) => {
  return async dispatch => {
    const fetchAssignedSuccess = services => {
      dispatch({ type: FETCH_EMP_DONE_SUCCESS, payload: services });
      return services;
    };
    const fetchAssignedFailure = error => {
      dispatch({
        type: FETCH_EMP_DONE_FAILURE,
        message: 'Avslutade ärenden kunde inte hämtas'
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/services/employee/${userId}/done`,
        { headers: { authorization: token } }
      );
      // const fetchDoneRequest = () => { dispatch({ type: FETCH_EMP_DONE_REQUEST }); }
      const services = await res.json();
      return fetchAssignedSuccess(services);
    } catch (error) {
      return fetchAssignedFailure(error);
    }
  };
};

// CLOSE SERVICE WHEN DONE
export const fetchServiceComplete = (token, id) => {
  return async dispatch => {
    const ServiceCompleteSuccess = serviceComplete => {
      dispatch({
        type: FETCH_SERVICE_COMPLETE_SUCCESS,
        payload: serviceComplete
      });
      return serviceComplete;
    };
    const requestFailure = error => {
      dispatch({
        type: FETCH_SERVICE_COMPLETE_FAILURE,
        message: `Ärende med id: ${id} kunde inte avslutas`
      });
      return error;
    };

    try {
      const res = await fetch(`http://localhost:7770/services/${id}/complete`,
        {
          method: 'PUT',
          body: JSON.stringify(),
          headers: { Authorization: token, 'Content-Type': 'application/json' }
        }
      );
      // const requestServiceComplete = () => { dispatch({ type: FETCH_SERVICE_COMPLETE_START }); }
      const serviceComplete = res.json();
      return ServiceCompleteSuccess(serviceComplete);
    } catch (error) {
      return requestFailure(error);
    }
  };
};

// SAVE PHOTOS
export const savePhotos = (token, id, photos) => {
  return async dispatch => {
    const savePhotosSuccess = savedPhotos => {
      dispatch({ type: SAVE_PHOTOS_SUCCESS, payload: savedPhotos });
      return savedPhotos;
    };
    const requestFailure = error => {
      dispatch({
        type: SAVE_PHOTOS_FAILURE,
        message: `Foton kunde inte sparas`
      });
      return error;
    };
    let body = JSON.stringify({ photos: photos });

    try {
      const res = await fetch(`http://localhost:7770/services/${id}/photos`,
        {
          method: 'POST',
          body: body,
          headers: {
            Authorization: token,
            'Content-Type': 'application/json'
          }
        }
      );
      const savedPhotos = res.json();
      return savePhotosSuccess(savedPhotos);
    } catch (error) {
      return requestFailure(error);
    }
  };
};
