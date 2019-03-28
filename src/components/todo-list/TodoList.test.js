import React from 'react';
import { shallow, mount, render } from 'enzyme';
import TodoList from './TodoList';
import tasksMockedData from '../../mock/TasksMock';

describe('TodoList component', () => {
  let emptyTasks;
  let tasks;

  beforeAll(() => {
    emptyTasks = [];
    tasks = tasksMockedData;
  });

  describe('with empty tasks list', () => {

    test('shoud mount correctly', () => {
      expect(
        mount(
          <TodoList tasks={emptyTasks} loading={false} />
        )
      ).toMatchSnapshot();
    });

  });

});
