import {taskStatus} from "../shared/tasksConstantes";
import Task from '../classes/Task';

class TasksUtils {
  static toggleStatus(status) {
    return status === taskStatus.DONE ? taskStatus.PENDING : taskStatus.DONE;
  }

  static taskFactory(values) {
    return new Task(
      taskStatus.PENDING,
      values.description,
      values.time,
      values.durationTime,
      values.rememberTime
    );
  }
}

export default TasksUtils;
