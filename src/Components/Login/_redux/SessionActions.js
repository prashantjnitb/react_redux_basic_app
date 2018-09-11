import * as api from '../../../api/apiCalls'

export const CREATE_SESSION_BEGIN   = 'CREATE_SESSION_BEGIN';
export const CREATE_SESSION_SUCCESS = 'CREATE_SESSION_SUCCESS';
export const CREATE_SESSION_FAILURE = 'CREATE_SESSION_FAILURE';

// Actions To create an Item skus
export const createSessionBegin = () => ({
  type: CREATE_SESSION_BEGIN
});

export const createSessionSuccess = user => ({
  type: CREATE_SESSION_SUCCESS,
  user
});

export const createSessionError = error => ({
  type: CREATE_SESSION_FAILURE,
  error: { message: error }
});

export const createSession = (params) => async (dispatch, getState) => {
  dispatch(createSessionBegin());
  let response = api.createSession(params)
  if(!response || response.error || response.message) {
      dispatch(createSessionError(response.error || response.message))
    } else {
      dispatch(createSessionSuccess(response))
    }
}
//=================================