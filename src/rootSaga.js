import { all, fork } from 'redux-saga/effects';
import tasksSaga from './sagas/tasksSaga';

export default function* rootSaga() {
  yield all([
    fork(tasksSaga),
  ])
}
