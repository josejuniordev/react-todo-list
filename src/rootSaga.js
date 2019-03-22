import { all, fork } from 'redux-saga/effects';
import tasksSaga from './sagas/tasksSaga';
import tagsSaga from './sagas/tagsSaga';

export default function* rootSaga() {
  yield all([
    fork(tasksSaga),
    fork(tagsSaga),
  ])
}
