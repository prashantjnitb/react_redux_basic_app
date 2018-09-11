import {
  CREATE_USER_BEGIN,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  } from './SignupActions';

const initialState = {
  user: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
 switch (action.type) {
  case CREATE_USER_BEGIN:
    return {
      user: null,
      loading: true,
      error: null
    }
  case CREATE_USER_SUCCESS:
    return {
      user: action.user,
      loading: false,
      error: null,
      success: {message: "Signedup in Successfully"}
    }
  case CREATE_USER_FAILURE:
    return {
      user: null,
      loading: false,
      error: action.error
    }
  default:
   return state
 }
}