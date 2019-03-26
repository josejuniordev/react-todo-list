import React, { Fragment } from "react";
import AppHeader from "../components/generics/AppHeader";
import { connect } from 'react-redux';
import TasksCharts from '../components/charts/TasksCharts';

function DashboardPage(
  {
    tasks
  }
) {
  return (
    <Fragment>
      <AppHeader title="Dashboard" />
      <TasksCharts tasks={tasks.data} />
    </Fragment>
  )
}

export default connect(
  ({ tasks }) => {
    return {
      tasks
    }
  }
)(DashboardPage);
