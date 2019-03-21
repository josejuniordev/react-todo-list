// Action Types

export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILED = 'FETCH_TASKS_FAILED';
export const UPDATE_TASKS_ON_LIST = 'UPDATE_TASKS_ON_LIST';
export const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS';
export const DELETE_TASK = 'DELETE_TASK';
export const INSERT_NEW_TASK = 'INSERT_NEW_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

// Initial state

const INITIAL_STATE = {
  data: [],
  errors: {
    fetch: []
  },
  loading: {
    fetch: false
  }
};

// reducer
export default function (state = INITIAL_STATE, action) {
  const { type, tasks, errors } = action;

  switch (type) {
    case FETCH_TASKS:
      return {
        ...state,
        loading: {
          ...state.loading,
          fetch: true
        }
      };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        data: tasks,
        loading: {
          ...state.loading,
          fetch: false
        }
      };
    case FETCH_TASKS_FAILED:
      return {
        ...state,
        loading: {
          ...state.loading,
          fetch: false
        },
        errors: {
          ...state.errors,
          fetch: errors
        }
      };
    case UPDATE_TASKS_ON_LIST:
      return {
        ...state,
        data: tasks
      };
    default:
      return state;
  }
}

// Action Creators

export function fetchTasksAction() {
  return { type: FETCH_TASKS };
}

export function fetchTasksSuccessAction(tasks) {
  return { type: FETCH_TASKS_SUCCESS, tasks };
}

export function fetchTasksFailedAction(errors) {
  return { type: FETCH_TASKS_FAILED, errors };
}

export function updateTasksOnListAction(tasks) {
  return { type: UPDATE_TASKS_ON_LIST, tasks };
}

export function toggleTaskStatusAction(taskId) {
  return { type: TOGGLE_TASK_STATUS, taskId };
}

export function deleteTaskAction(taskId) {
  return { type: DELETE_TASK, taskId };
}

export function updateTaskAction(values, taskId) {
  return { type: UPDATE_TASK, values, taskId };
}

export function insertNewTaskAction(values) {
  return { type: INSERT_NEW_TASK, values };
}
