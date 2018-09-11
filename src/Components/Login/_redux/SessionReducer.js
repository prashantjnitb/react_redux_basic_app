import {
  CREATE_SESSION_BEGIN,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAILURE,
  } from './SessionActions'

const initialState = {
  current_user: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
 switch (action.type) {
  case CREATE_SESSION_BEGIN:
    return {
      current_user: null,
      loading: true,
      error: null
    }
  case CREATE_SESSION_SUCCESS:
    return {
      current_user: action.user,
      loading: true,
      error: null,
      success: {message: "Logged in Successfully"}
    }
  case CREATE_SESSION_FAILURE:
    return {
      current_user: null,
      loading: true,
      error: action.error
    }
  default:
   return state
 }
}