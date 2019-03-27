import { fork, takeLatest, all, call, put } from 'redux-saga/effects';
import { notification } from 'antd';
import {
  DELETE_TASK,
  FETCH_TASKS,
  fetchTasksFailedAction,
  fetchTasksSuccessAction, INSERT_NEW_TASK,
  TOGGLE_TASK_STATUS, UPDATE_TASK,
  updateTasksOnListAction
} from '../ducks/tasks';
import TasksAPI from '../integrations/TasksAPI';
import { taskMessages } from "../shared/tasksConstantes";
import TasksUtils from "../utility/TasksUtils";
import store from "../store";

export function* fetchTasks() {
  try {
    let tasks = yield call(TasksAPI.fetchTasks);

    tasks = yield tasks.map(task => {
      return TasksUtils.taskFactory(task);
    });

    yield put(fetchTasksSuccessAction(tasks));

  } catch (errors) {
    put(fetchTasksFailedAction(errors));
    notification.error({
      message: taskMessages.FETCH_TASKS_FAILED
    })
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

function* insertNewTask({values}) {
  try {
    const state = store.getState();

    let taskToSave = TasksUtils.taskFactory(values);

    let modifiedTasks = [...state.tasks.data];

    modifiedTasks.push(taskToSave);

    yield put(updateTasksOnListAction(modifiedTasks));

    notification.success({
      message: taskMessages.INSERT_NEW_TASK_SUCCESSFULLY
    });

  } catch (errors) {
    notification.warning({
      message: taskMessages.INSERT_NEW_TASK_ERROR
    });
  }
}

function* updateTask({values}) {
  try {
    const state = store.getState();

    let taskToSave = TasksUtils.taskFactory(values);
    let modifiedTasks = [...state.tasks.data];

    modifiedTasks = modifiedTasks.map(task => {
      if (task.id === values.id) {
        return taskToSave;
      }

      return task;
    });

    yield put(updateTasksOnListAction(modifiedTasks));

    notification.success({
      message: taskMessages.UPDATE_TASK_SUCCESSFULLY
    });

  } catch (errors) {
    notification.warning({
      message: taskMessages.UPDATE_TASK_ERROR
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

function* insertNewTaskSaga() {
  yield takeLatest(INSERT_NEW_TASK, insertNewTask);
}

function* updateTaskSaga() {
  yield takeLatest(UPDATE_TASK, updateTask);
}

export default function* () {
  yield all([
    fork(fetchTasksSaga),
    fork(toggleTaskStatusSaga),
    fork(deleteTaskSaga),
    fork(insertNewTaskSaga),
    fork(updateTaskSaga),
  ])
}
