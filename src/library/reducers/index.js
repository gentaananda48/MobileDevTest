import {combineReducers} from 'redux';
import {authentication} from './authentication.reducers';
import {user} from './user.reducers';
const rootReducer = combineReducers({
  authentication,
  user,
});

export default rootReducer;
