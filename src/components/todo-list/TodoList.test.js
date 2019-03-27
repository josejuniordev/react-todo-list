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

    test('should shallow correctly', () => {

      expect(
        shallow(
          <TodoList tasks={emptyTasks} loading={false} />
        )
      ).toMatchSnapshot();

      expect(
        shallow(
          <TodoList tasks={tasks} loading={false} />
        )
      ).toMatchSnapshot();

    });

    test('shoud mount correctly', () => {

      expect(
        mount(
          <TodoList tasks={emptyTasks} loading={false} />
        )
      ).toMatchSnapshot();
      
    });

    test('shoud render correctly', () => {

      expect(
        render(
          <TodoList tasks={emptyTasks} loading={false} />
        )
      ).toMatchSnapshot();

      expect(
        render(
          <TodoList tasks={tasks} loading={false} />
        )
      ).toMatchSnapshot();

    });

  });

});
