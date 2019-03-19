import { combineReducers } from 'redux';
import tasks from './ducks/tasks';

const rootReducer = combineReducers({
  tasks
});

export default rootReducer;
