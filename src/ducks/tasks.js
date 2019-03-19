// Action Types

export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILED = 'FETCH_TASKS_FAILED';

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
