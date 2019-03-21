import { fork, takeLatest, all, call, put } from 'redux-saga/effects';
import { notification } from 'antd';
import {
  DELETE_TASK,
  FETCH_TASKS,
  fetchTasksFailedAction,
  fetchTasksSuccessAction,
  TOGGLE_TASK_STATUS,
  updateTasksOnListAction
} from '../ducks/tasks';
import TasksAPI from '../integrations/TasksAPI';
import Task from '../classes/Task';
import { taskMessages } from "../shared/tasksConstantes";
import TasksUtils from "../utility/TasksUtils";
import store from "../store";

function* fetchTasks() {
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
    put(fetchTasksFailedAction(errors));
  }
}

function* toggleTaskStatus({taskId}) {
  try {
    const state = store.getState();
    const updatedTasks = state.tasks.data.map(task => {
      if (task.id === taskId) {
        task.status = TasksUtils.toggleStatus(task.status);
      }

      return task;
    });

    yield put(updateTasksOnListAction(updatedTasks));

    notification.success({
      message: taskMessages.UPDATE_TASK_SUCCESSFULLY
    });

  } catch (errors) {
    notification.warning({
      message: taskMessages.ERROR_ON_TOGGLE_STATUS
    });
  }
}

function* deleteTask({taskId}) {
  try {
    const state = store.getState();
    const filteredTasks = state.tasks.data.filter(task => {
      return task.id !== taskId;
    });

    yield put(updateTasksOnListAction(filteredTasks));

    notification.success({
      message: taskMessages.UPDATE_TASK_SUCCESSFULLY
    });

  } catch (errors) {
    notification.warning({
      message: taskMessages.ERROR_ON_DELETE_TASK
    });
  }
}

function* fetchTasksSaga() {
  yield takeLatest(FETCH_TASKS, fetchTasks);
}

function* toggleTaskStatusSaga() {
  yield takeLatest(TOGGLE_TASK_STATUS, toggleTaskStatus);
}

function* deleteTaskSaga() {
  yield takeLatest(DELETE_TASK, deleteTask);
}

export default function* () {
  yield all([
    fork(fetchTasksSaga),
    fork(toggleTaskStatusSaga),
    fork(deleteTaskSaga),
  ])
}
