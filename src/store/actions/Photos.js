// import {
//   UPLOAD_PHOTO_SUCCESS,
// //   UPLOAD_PHOTO_FAILURE
// } from './../actions/actionTypes/Photos';

// import axios from 'axios';

// // const uploadPhotosFailure = error => { dispatch({ type: UPLOAD_PHOTO_FAILURE, message: 'Fotot kunde inte laddas upp' }); return error; }

// // GET PHOTOS URL
// export const uploadPhotos = files => dispatch => {
//   const cloudSrc = [];

//   // const uploaders = files.map(file => {
//   const formData = new FormData();
//   formData.append('file', files);
//   formData.append('upload_preset', 'hfxe0nuq');
//   formData.append('api_key', '722468586217469');
//   formData.append('timestamp', (Date.now() / 1000) | 0);

//   return axios
//     .post(
//       'https://api.cloudinary.com/v1_1/servicebyran/image/upload',
//       formData,
//       { headers: { 'X-Requested-With': 'XMLHttpRequest' } }
//     )
//     .then(response => {
//       const data = response.data;
//       const fileURL = data.secure_url;
//       cloudSrc.push(fileURL);
//     });
//   // });

// //   return dispatch({
// //     type: UPLOAD_PHOTO_SUCCESS,
// //     payload: cloudSrc
// //   });

//   // Once all the files are uploaded
//   // axios.all(uploaders).then(() => {
//   // });
// };
