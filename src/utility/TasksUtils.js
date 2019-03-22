import { taskStatus } from '../shared/tasksConstantes';
import Task from '../classes/Task';
import filterMethods from '../shared/tasksFilterMethods';

class TasksUtils {
  static toggleStatus(status) {
    return status === taskStatus.DONE ? taskStatus.PENDING : taskStatus.DONE;
  }

  static taskFactory(values) {
    return new Task(
      values.status || taskStatus.PENDING,
      values.description,
      values.time,
      values.durationTime,
      values.rememberTime,
      values.tags,
      values.createdAt,
      values.id
    );
  }

  static filterBy(data, method) {
    const filteredData = filterMethods[method]
                          ? filterMethods[method](data)
                          : data;

    return new Promise((resolve) => {
      resolve(filteredData);
    });
  }
}

export default TasksUtils;
