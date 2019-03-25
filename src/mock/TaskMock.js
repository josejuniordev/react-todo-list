import TasksUtils from '../utility/TasksUtils';

export const TasksData = [
  {
    "id": "1",
    "createdAt": "2019-03-21T19:46:35.970Z",
    "description": "The EXE application is down, input the 1080p card so we can calculate the PCI firewall!",
    "time": "2019-07-21T18:03:23.917Z",
    "rememberTime": 74,
    "durationTime": 4,
    "status": "pending",
    "tags": [
      1,
      2,
      3
    ]
  },
  {
    "id": "2",
    "createdAt": "2019-03-21T11:00:36.158Z",
    "description": "We need to override the auxiliary JSON program!",
    "time": "2019-12-14T19:54:00.730Z",
    "rememberTime": 83,
    "durationTime": 96,
    "status": "pending",
    "tags": [
      1
    ]
  },
  {
    "id": "3",
    "createdAt": "2019-03-21T20:54:18.349Z",
    "description": "You can't calculate the hard drive without synthesizing the online ADP application!",
    "time": "2019-06-08T12:59:36.213Z",
    "rememberTime": 16,
    "durationTime": 74,
    "status": "done",
    "tags": [
      1,
      2
    ]
  },
  {
    "id": "4",
    "createdAt": "2019-03-21T08:57:34.424Z",
    "description": "I'll hack the redundant SSL panel, that should capacitor the THX firewall!",
    "time": "2020-02-24T10:47:42.021Z",
    "rememberTime": 69,
    "durationTime": 81,
    "status": "pending",
    "tags": [
      1,
      2,
      3
    ]
  },
  {
    "id": "5",
    "createdAt": "2019-03-21T15:52:13.761Z",
    "description": "Use the online GB protocol, then you can reboot the virtual driver!",
    "time": "2019-04-01T00:33:25.444Z",
    "rememberTime": 66,
    "durationTime": 84,
    "status": "pending",
    "tags": [
      1
    ]
  },
  {
    "id": "6",
    "createdAt": "2019-03-21T15:52:13.761Z",
    "description": "I am a late task!",
    "time": "2019-03-01T00:33:25.444Z",
    "rememberTime": 66,
    "durationTime": 84,
    "status": "pending",
    "tags": [
      1
    ]
  }
];

const tasksMockedData = TasksData.map(task => {
  return TasksUtils.taskFactory(task);
});

export default tasksMockedData;
