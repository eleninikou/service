// import {
//     CLOSE_MODAL,
//     OPEN_DANGER,
//     CLOSE_DANGER,
//     MESSAGE_SUCCESS,
//     MESSAGE_ERROR,
//     MESSAGE_DONE,
//     CLOSE_DONE
//   } from './../actions/actionTypes/'

// const initialState = {
//     modalIsOpen: false,
//     danger: false,
//     dangerMessage: "",
//     success: false,
//     successMessage: "",
//     errorMessage: "",
//     done: false,
//     doneMessage: ''
// };

// const ModalReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case CLOSE_MODAL:
//             return {
//                 modalIsOpen: false,
//                 danger: false,
//                 dangerMessage: "",
//                 success: false,
//                 successMessage: "",
//                 errorMessage: ""
//             } 
//         case CLOSE_DANGER:
//             return {
//                 modalIsOpen: false,
//                 danger: false,
//                 dangerMessage: null
//             } 
//         case OPEN_DANGER:
//             return {
//                 modalIsOpen: true,
//                 danger: true,
//                 dangerMessage: action.payload.dangerMessage
//         } 
//         case MESSAGE_DONE:
//         return {
//             modalIsOpen: true,
//             done: true,
//             doneMessage: action.payload.doneMessage
//         } 
//         case CLOSE_DONE:
//         return {
//             modalIsOpen: false,
//             done: true,
//             doneMessage: null
//         } 
//         case MESSAGE_SUCCESS:
//             return {
//                 modalIsOpen: true,
//                 success: true,
//                 successMessage: action.payload.successMessage,
//                 danger: false,
//                 dangerMessage: null,
//                 errorMessage: null,
//         } 
//         case MESSAGE_ERROR:
//             return {
//                 modalIsOpen: true,
//                 errorMessage: action.payload.errorMessage,
//                 success: false
//             } 
//         default:
//             return state;
//         }
//     }

// export default ModalReducer;            