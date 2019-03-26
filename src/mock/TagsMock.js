import TagsUtils from '../utility/TagsUtils';

export const TasksData = [
  {
    "id": "1",
    "createdAt": "2019-03-22T01:45:05.731Z",
    "name": "Estudo"
  },
  {
    "id": "2",
    "createdAt": "2019-03-21T03:55:15.599Z",
    "name": "Trabalho"
  },
  {
    "id": "3",
    "createdAt": "2019-03-21T18:49:02.309Z",
    "name": "Teste"
  }
];

const tagsMockedData = TasksData.map(tag => {
  return TagsUtils.tagFactory(tag);
});

export default tagsMockedData;
