import { taskStatus } from '../shared/tasksConstantes';
import Task from '../classes/Task';
import filterMethods from '../shared/tasksFilterMethods';
import store from '../store';
import { aMinute } from '../shared/timeConstants';
import moment from 'moment';
import NotificationAPI from '../integrations/NotificationAPI';

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

  static initializeNotifier() {
    window.setInterval(() => {
      const { tasks } = store.getState();
      const nowTime = +new Date();

      tasks.data.forEach((task) => {
        const taskOriginalDate = moment(task.time);
        const taskDate = moment(task.time);
        const taskRememberTime = taskDate.subtract(task.rememberTime, 'hours').valueOf();

        if (nowTime - taskRememberTime >= 0) {
          NotificationAPI.notify(
            'Lembrete de tarefa',
            `A sua tarefa em ${taskOriginalDate.format('DD/MM/YYYY [às] hh:mm')} se aproxima`
          );
        }
      });

    }, aMinute);
  }
}

export default TasksUtils;
