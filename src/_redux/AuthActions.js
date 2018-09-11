import * as api from '../api/apiCalls'

export const SESSION_CHECK_BEGIN   = 'SESSION_CHECK_BEGIN';
export const SESSION_CHECK_SUCCESS = 'SESSION_CHECK_SUCCESS';
export const SESSION_CHECK_FAILURE = 'SESSION_CHECK_FAILURE';

export const CLEAR_SESSION_BEGIN   = 'CLEAR_SESSION_BEGIN';
export const CLEAR_SESSION_SUCCESS = 'CLEAR_SESSION_SUCCESS';
export const CLEAR_SESSION_FAILURE = 'CLEAR_SESSION_FAILURE';

// Actions To create an Item skus
export const sessionCheckBegin = () => ({
  type: SESSION_CHECK_BEGIN
});

export const sessionCheckSuccess = user => ({
  type: SESSION_CHECK_SUCCESS,
  user
});

export const sessionCheckError = error => ({
  type: SESSION_CHECK_FAILURE,
  error: { message: error }
});

export const CheckUserLoggedIn = () => async (dispatch, getState) => {
  dispatch(sessionCheckBegin());
  let response = api.SessionCheck()
  
  if(!response || response.error || response.message) {
    if(response) {
      dispatch(sessionCheckError(response.error || response.message))
    }
  } else {
    dispatch(sessionCheckSuccess(response))
  }
}
//=================================

// Actions To create an Item skus
export const clearSessionBegin = () => ({
  type: CLEAR_SESSION_BEGIN
});

export const clearSessionSuccess = user => ({
  type: CLEAR_SESSION_SUCCESS,
  user
});

export const clearSessionError = error => ({
  type: CLEAR_SESSION_FAILURE,
  error: { message: error }
});

export const clearSession = () => async (dispatch, getState) => {
  dispatch(clearSessionBegin());
  let response = api.clearSession()
  
  if(!response || response.error || response.message) {
    if(response) {
      dispatch(clearSessionError(response.error || response.message))
    }
  } else {
    dispatch(clearSessionSuccess(response))
  }
}
//=================================