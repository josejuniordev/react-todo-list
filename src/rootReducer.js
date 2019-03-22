import { combineReducers } from 'redux';
import tasks from './ducks/tasks';
import tags from './ducks/tags';

const rootReducer = combineReducers({
  tasks,
  tags,
});

export default rootReducer;
