import song from './songReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  song,
});

export default rootReducer;
