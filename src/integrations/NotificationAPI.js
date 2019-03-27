import { delay } from '../utility/Utils';
import { aSecond } from '../shared/timeConstants';

class NotificationAPI {
  static Notification = window.Notification;

  static initialize() {
    if (this.Notification.permission !== 'granted') {
      this.requestPermission();
    }
  }

  static requestPermission() {
    this.Notification.requestPermission();
  };

  static notify(title = '', message = '', timeToClose = 4) {
    const notification = new this.Notification(title, {
      body: message
    });

    delay(aSecond * timeToClose)
      .then(notification.close.bind(notification));
  }
}

export default NotificationAPI;
