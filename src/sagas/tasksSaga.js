import { fork, takeLatest, all, call, put } from 'redux-saga/effects';
import { notification } from 'antd';
import {FETCH_TASKS, fetchTasksFailedAction, fetchTasksSuccessAction} from '../ducks/tasks';
import TasksAPI from '../integrations/TasksAPI';
import Task from '../classes/Task';
import {taskMessages} from "../shared/tasksConstantes";

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
    notification.warning(taskMessages.LOAD_TASK_ERROR);
    put(fetchTasksFailedAction(errors));
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
