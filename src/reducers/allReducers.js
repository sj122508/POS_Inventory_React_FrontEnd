import {combineReducers} from 'redux';
import LoginReducer from './features/loginReducer';

const allReducers = combineReducers({
  Login: LoginReducer
});

export default allReducers;