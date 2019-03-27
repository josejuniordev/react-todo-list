import React, { Fragment } from "react";
import AppHeader from "../components/generics/AppHeader";
import { connect } from 'react-redux';
import TasksChart from '../components/charts/TasksChart';
import { Col, Row } from 'antd';
import TagsChart from '../components/charts/TagsChart';

function DashboardPage(
  {
    tasks,
    tags,
  }
) {
  return (
    <Fragment>
      <AppHeader title="Dashboard" />
      <Row gutter={60}>
        <Col md={12} sm={24}>
          <TasksChart tasks={tasks.data} />
        </Col>
        <Col md={12} sm={24}>
          <TagsChart tasks={tasks.data} tags={tags.data} />
        </Col>
      </Row>
    </Fragment>
  )
}

export default connect(
  ({ tasks, tags }) => {
    return {
      tasks,
      tags
    }
  }
)(DashboardPage);
