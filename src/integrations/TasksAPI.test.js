import TasksAPI from '../integrations/TasksAPI';
import { fetchTasksUrl } from './Defaults';

describe('TasksAPI class', () => {
  test('calls fetch api', () => {

    const spy = jest.spyOn(global, 'fetch');

    TasksAPI.fetchTasks();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(fetchTasksUrl);

    spy.mockRestore();
  });
});
