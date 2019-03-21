import React, { Fragment, useEffect } from 'react';
import AppHeader from "../components/generics/AppHeader";
import { connect } from "react-redux";
import { deleteTaskAction, toggleTaskStatusAction } from '../ducks/tasks';
import TodoList from '../components/todo-list/TodoList';
import { Button } from 'antd';

function TodoListPage(
  {
    tasks,
    callToggleTaskStatus,
    callDeleteTask,
  }
) {

  function toggleCheckItemHandler(itemId) {
    callToggleTaskStatus(itemId);
  }

  function deleteItemHandler(itemId) {
    callDeleteTask(itemId);
  }

  function editItemHandler() {
    console.log('editar')
  }

  return (
    <Fragment>
      <AppHeader title="Todo list"/>
      <div className="toolbar-area text-align-right">
        <Button type="primary" icon="plus">Nova task</Button>
      </div>
      <TodoList
        tasks={tasks.data}
        loading={tasks.loading.fetch}
        onToggleCheckItemHandler={toggleCheckItemHandler}
        onDeleteItemHandler={deleteItemHandler}
        onEditItemHandler={editItemHandler}
      />
    </Fragment>
  )
}

export default connect(
  ({tasks}) => {
    return {tasks}
  },
  (dispatch => {
    return {
      callToggleTaskStatus(taskId) {
        dispatch(toggleTaskStatusAction(taskId));
      },
      callDeleteTask(taskId) {
        dispatch(deleteTaskAction(taskId));
      }
    }
  })
)(TodoListPage);
