import React from 'react';
import { mount, render } from 'enzyme';
import TodoListItem from './TodoListItem';
import TasksMock from '../../../mock/TasksMock';

describe('TodoListItem component', () => {
  const mockToggleCheckItem = jest.fn().mockReturnValue(TasksMock[1].id);
  const mockEditItem = jest.fn().mockReturnValue(TasksMock[1].id);
  const mockDeleteItem = jest.fn().mockReturnValue(TasksMock[1].id);

  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <TodoListItem
        task={TasksMock[0]}
        onToggleCheckItem={mockToggleCheckItem}
        onEditItem={mockEditItem}
        onDeleteItem={mockDeleteItem}
      />
    );
  });

  test('render component correctly', () => {
    const rendered = render(
      <TodoListItem
        task={TasksMock[0]}
        onToggleCheckItem={mockToggleCheckItem}
        onEditItem={mockEditItem}
        onDeleteItem={mockDeleteItem}
      />
    );

    expect(rendered).toMatchSnapshot();

  });

  test('component should call onToggleCheckItem method when clicked', () => {
    const button = wrapper.find('.icon-state').first();
    button.simulate('click');

    expect(mockToggleCheckItem.mock.calls.length).toBe(1);
    expect(mockToggleCheckItem.mock.results[0].value).toBe(TasksMock[1].id);
  });

  test('component should call onEditItem method when clicked', () => {
    const button = wrapper.find('.icon-edit').first();
    button.simulate('click');

    expect(mockToggleCheckItem.mock.calls.length).toBe(1);
    expect(mockToggleCheckItem.mock.results[0].value).toBe(TasksMock[1].id);
  });

  test('component should call onDeleteItem method when clicked', () => {
    const button = wrapper.find('.icon-delete').first();
    button.simulate('click');

    expect(mockToggleCheckItem.mock.calls.length).toBe(1);
    expect(mockToggleCheckItem.mock.results[0].value).toBe(TasksMock[1].id);
  });

});
