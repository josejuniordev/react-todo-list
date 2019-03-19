import React, { Fragment, useEffect } from 'react';
import AppHeader from "../components/generics/AppHeader";
import { connect } from "react-redux";
import { fetchTasksAction } from "../ducks/tasks";

function TodoListPage() {

  useEffect(() => {
   console.log('logou')
  });

  return (
    <Fragment>
      <AppHeader title="Todo list"/>
    </Fragment>
  )
}

export default TodoListPage;
