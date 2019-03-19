import React, { Fragment, useEffect } from 'react';
import AppHeader from "../components/generics/AppHeader";
import { connect } from "react-redux";
import { fetchTasksAction } from "../ducks/tasks";
import TodoList from '../components/todo-list/TodoList';

function TodoListPage(
  {
    tasks
  }
) {

  useEffect(() => {
   console.log('logou')
  });

  return (
    <Fragment>
      <AppHeader title="Todo list"/>
      <TodoList tasks={tasks.data} loading={tasks.loading.fetch} />
    </Fragment>
  )
}

export default connect(
  ({tasks}) => {
    return {tasks}
  }
)(TodoListPage);
