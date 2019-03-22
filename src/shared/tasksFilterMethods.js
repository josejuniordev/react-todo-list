import { filterTasksMode, taskStatus } from './tasksConstantes';
import { aDay } from './timeConstants';
import moment from 'moment';

const methods = {};

methods[filterTasksMode.ALL] = (data) => {
  return data;
};

methods[filterTasksMode.DONE] = (data) => {
  return data.filter(item => item.status === taskStatus.DONE);
};

methods[filterTasksMode.PENDING] = (data) => {
  return data.filter(item => item.status === taskStatus.PENDING);
};

methods[filterTasksMode.TODAY] = (data) => {
  const now = new Date();
  return data.filter(item => {
    const itemTime = new Date(item.time);

    return now.getDate() === itemTime.getDate()
            && now.getMonth() === itemTime.getMonth()
            && now.getFullYear() === itemTime.getFullYear()
  });
};

methods[filterTasksMode.THIS_WEEK] = (data) => {
  const today = new Date();
  const currentWeekDay = today.getDay();
  const daysLimitBefore = currentWeekDay;
  const daysLimitAfter = 7 - currentWeekDay;

  const daysBeforeTime = moment().subtract(daysLimitBefore, 'days').valueOf();
  const daysAfterTime = moment().add(daysLimitAfter, 'days').valueOf();

  return data.filter(item => {
    const itemTime = +new Date(item.time);

    return itemTime >= daysBeforeTime && itemTime <= daysAfterTime;
  });
};

methods[filterTasksMode.THIS_MONTH] = (data) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  return data.filter(item => {
    const itemDate = new Date(item.time);

    return itemDate.getFullYear() === currentYear && itemDate.getMonth() === currentMonth;
  });
};

export default methods;
