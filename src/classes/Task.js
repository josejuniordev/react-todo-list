import { taskStatus } from '../shared/tasksConstantes';

export default class Task {
  constructor(status = taskStatus.PENDING, description, time, durationTime, rememberTime, createdAt = false, id = false) {
    const date = createdAt ? new Date(createdAt) : new Date();
    const now = date.toISOString();

    this.status = status;
    this.description = description;
    this.time = time;
    this.durationTime = durationTime;
    this.rememberTime = rememberTime;
    this.createdAt = now;
    this.id = id ? id : now.getTime();
  }
}
