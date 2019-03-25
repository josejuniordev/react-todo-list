import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import '../App.css';

import { Button, Welcome } from '@storybook/react/demo';
import TodoListItem from '../components/todo-list/todo-list-item/TodoListItem';
import tasksMockedData from '../mock/TaskMock';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Task Card', module)
  .addDecorator(storyFn => <div style={{ margin: '15px' }}>{storyFn()}</div>)
  .add('with future pending status', () => <TodoListItem
                                              onToggleCheckItem={action('change Status')}
                                              onDeleteItem={action('delete item')}
                                              onEditItem={action('edit item')}
                                              task={tasksMockedData[0]}
                                            />)
  .add('with late pending status', () => <TodoListItem task={tasksMockedData[5]} />)
  .add('with done status', () => <TodoListItem task={tasksMockedData[2]} />);
