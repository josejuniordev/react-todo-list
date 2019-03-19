import { fork, takeLatest, all, call, put } from 'redux-saga/effects';
import { FETCH_TASKS } from '../ducks/tasks';

function* fetchTasks(action) {
  try {
    alert('buscar dados')
  } catch (errors) {

  }
}

function* fetchTasksSaga() {
  yield takeLatest(FETCH_TASKS, fetchTasks);
}

export default function* () {
  yield all([
    fork(fetchTasksSaga)
  ])
}
