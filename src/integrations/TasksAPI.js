import { apiEndpoint, fetchTasksUrl } from './Defaults';

class TasksAPI {
  static fetchTasks() {
    return new Promise((resolve, reject) => {
      fetch(fetchTasksUrl)
        .then(data => data.json())
        .then(resolve)
        .catch(reject);
    })
  }
}

export default TasksAPI;
