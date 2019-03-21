import {taskStatus} from "../shared/tasksConstantes";

class TasksUtils {
  static toggleStatus(status) {
    return status === taskStatus.DONE ? taskStatus.PENDING : taskStatus.DONE;
  }
}

export default TasksUtils;
