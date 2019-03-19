import { apiEndpoint } from './Defaults';

class TasksAPI {
  static fetchTasks() {
    const url = `${apiEndpoint}/tasks`;

    return new Promise((resolve, reject) => {
      fetch(url)
        .then(data => data.json())
        .then(resolve)
        .catch(reject);
    })
  }
}

export default TasksAPI;
