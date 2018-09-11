import { combineReducers } from 'redux';
import session from '../Components/Login/_redux/SessionReducer';
import signup from '../Components/Signup/_redux/SignupReducer';
import auth from './AuthReducer';
export default combineReducers({
 session,
 signup,
 auth
});