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

  static notify(title = '', message = '') {
    new this.Notification(title, {
      body: message
    })
  }
}

export default NotificationAPI;
