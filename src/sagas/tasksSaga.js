import { fork, takeLatest, all, call, put } from 'redux-saga/effects';
import { FETCH_TASKS, fetchTasksSuccessAction } from '../ducks/tasks';
import TasksAPI from '../integrations/TasksAPI';
import Task from '../classes/Task';

function* fetchTasks(action) {
  try {
    let tasks = yield call(TasksAPI.fetchTasks);

    tasks = yield tasks.map(task => {
      return new Task(
        task.status,
        task.description,
        task.time,
        task.durationTime,
        task.rememberTime,
        task.createdAt,
        task.id
      );
    });

    yield put(fetchTasksSuccessAction(tasks));

    console.log('tasks', tasks);
  } catch (errors) {
    alert(errors)
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
