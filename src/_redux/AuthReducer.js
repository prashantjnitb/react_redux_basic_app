import {
  SESSION_CHECK_BEGIN,
  SESSION_CHECK_SUCCESS,
  SESSION_CHECK_FAILURE,
  CLEAR_SESSION_BEGIN,
  CLEAR_SESSION_SUCCESS,
  CLEAR_SESSION_FAILURE,
  } from './AuthActions'

const initialState = {
  current_user: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
 switch (action.type) {
  case SESSION_CHECK_BEGIN:
    return {
      current_user: null,
      loading: true,
      error: null
    }
  case SESSION_CHECK_SUCCESS:
    
    return {
      current_user: action.user,
      loading: false,
      error: null,
      success: {message: "Logged in Successfully"}
    }
  case SESSION_CHECK_FAILURE:
    return {
      current_user: null,
      loading: false,
      error: action.error
    }


  case CLEAR_SESSION_BEGIN:
    return {
      current_user: null,
      loading: true,
      error: null
    }
  case CLEAR_SESSION_SUCCESS:
    
    return {
      current_user: null,
      loading: false,
      error: null,
      success: {message: "Logged in Successfully"}
    }
  case CLEAR_SESSION_FAILURE:
    return {
      current_user: null,
      loading: false,
      error: action.error
    }


  default:
   return state
 }
}