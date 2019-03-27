import tasksFilterMethods from './tasksFilterMethods';
import tasksMockedData from '../mock/TasksMock';
import { taskStatus } from './tasksConstantes';

describe('Tasks filter methods', () => {

  it('All method returns the same list', async () => {
    const filteredData = await tasksFilterMethods.all(tasksMockedData);

    expect(filteredData).toBe(tasksMockedData);
  });

  it('Done method returns the tasks that has DONE status', async () => {
    const filteredData = await tasksFilterMethods.done(tasksMockedData);
    let hasOnlyDone = true;

    filteredData.forEach(task => {
      if (task.status !== taskStatus.DONE) {
        hasOnlyDone = false;
      }
    });

    expect(filteredData.length).toBe(1);
    expect(hasOnlyDone).toBe(true);
  });

  it('Pending method returns the tasks that has PENDING status', async () => {
    const filteredData = await tasksFilterMethods.pending(tasksMockedData);
    let hasOnlyPending = true;

    filteredData.forEach(task => {
      if (task.status !== taskStatus.PENDING) {
        hasOnlyPending = false;
      }
    });

    expect(filteredData.length).toBe(5);
    expect(hasOnlyPending).toBe(true);
  });
});
