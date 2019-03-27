import tasksFilterMethods from './tasksFilterMethods';
import tasksMockedData from '../mock/TasksMock';

describe('Tasks filter methods', () => {

  it('Done method returns the tasks that has DONE status', async () => {
    const filteredData = await tasksFilterMethods.done(tasksMockedData);
    expect(filteredData.length).toBe(1);
  });
});
