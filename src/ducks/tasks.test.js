import taskReducer, {
  FETCH_TASKS, fetchTasksAction,
  FETCH_TASKS_FAILED, fetchTasksFailedAction,
  FETCH_TASKS_SUCCESS, fetchTasksSuccessAction,
  DELETE_TASK, deleteTaskAction,
  UPDATE_TASK, updateTaskAction,
  UPDATE_TASKS_ON_LIST, updateTasksOnListAction,
  TOGGLE_TASK_STATUS, toggleTaskStatusAction,
  INSERT_NEW_TASK, insertNewTaskAction
} from './tasks';

import TasksMockedData from '../mock/TasksMock';

describe('(Ducks) Tasks', () => {

  describe('Action Creators', () => {

    it('fetchTasksAction returns an action of type FETCH_TASKS', () => {
      expect(fetchTasksAction().type)
        .toBe(FETCH_TASKS);
    });

    it('fetchTasksFailedAction returns an action of type FETCH_TASKS_FAILED', () => {
      expect(fetchTasksFailedAction().type)
        .toBe(FETCH_TASKS_FAILED);
    });

    it('fetchTasksSuccessAction returns an action of type FETCH_TASKS_SUCCESS', () => {
      expect(fetchTasksSuccessAction().type)
        .toBe(FETCH_TASKS_SUCCESS);
    });

    it('deleteTaskAction returns an action of type DELETE_TASK', () => {
      expect(deleteTaskAction().type)
        .toBe(DELETE_TASK);
    });

    it('updateTaskAction returns an action of type UPDATE_TASK', () => {
      expect(updateTaskAction().type)
        .toBe(UPDATE_TASK);
    });

    it('updateTasksOnListAction returns an action of type UPDATE_TASKS_ON_LIST', () => {
      expect(updateTasksOnListAction().type)
        .toBe(UPDATE_TASKS_ON_LIST);
    });

    it('toggleTaskStatusAction returns an action of type TOGGLE_TASK_STATUS', () => {
      expect(toggleTaskStatusAction().type)
        .toBe(TOGGLE_TASK_STATUS);
    });

    it('insertNewTaskAction returns an action of type INSERT_NEW_TASK', () => {
      expect(insertNewTaskAction().type)
        .toBe(INSERT_NEW_TASK);
    });

  });

  describe('Reducer', () => {

    it('returns the current state ever the action is unknown', () => {
      const state = {
        data: []
      };
      expect(taskReducer(state, { type: 'UNKNOWN_ACTION' }))
        .toBe(state);
    });

    it('FETCH_TASKS_SUCCESS sets parsed tasks in data property', () => {
      const state = {
        data: []
      };
      expect(
        taskReducer(state, fetchTasksSuccessAction(TasksMockedData))
          .data
      ).toMatchObject(TasksMockedData)
    });
  });
});
