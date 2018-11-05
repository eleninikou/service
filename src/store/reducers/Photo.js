import {
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAILURE
} from './../actions/actionTypes/Photos';

const initialState = {
  cloudSrc: [],
  uploaded: false
};

const PhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PHOTO_SUCCESS:
      return {
        cloudSrc: action.payload.cloudSrc,
        uploaded: true
      };
    case UPLOAD_PHOTO_FAILURE:
      return {
        cloudSrc: null,
        uploaded: false
      };
    default:
      return state;
  }
};

export default PhotoReducer;
