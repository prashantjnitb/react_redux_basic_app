import * as api from '../../../api/apiCalls'

export const CREATE_USER_BEGIN   = 'CREATE_USER_BEGIN';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

// Actions To create an Item skus
export const createUserBegin = () => ({
  type: CREATE_USER_BEGIN
});

export const createUserSuccess = user => ({
  type: CREATE_USER_SUCCESS,
  user
});

export const createUserError = error => ({
  type: CREATE_USER_FAILURE,
  error: { message: error }
});

export const createUser = (params) => async (dispatch, getState) => {
  dispatch(createUserBegin());
  let response = api.createUser(params)
  if(!response || response.error || response.message) {
      dispatch(createUserError(response.error || response.message))
    } else {
      dispatch(createUserSuccess(response))
    }
}
//=================================