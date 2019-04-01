import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Icon, Layout, Menu, Spin } from 'antd';
import { connect } from 'react-redux';
import { fetchTasksAction } from './ducks/tasks';
import { fetchTagsAction } from './ducks/tags';
import { Suspense, lazy } from 'react';

const DashboardPage =  lazy(() => import("./pages/DashboardPage"));
const TodoListPage = lazy(() => import("./pages/TodoListPage"));
const TagsPage = lazy(() => import("./pages/TagsPage"));

const { Sider, Content } = Layout;

function App(
  {
    callFetchTasks,
    callFetchTags
  }
) {
  const selectedLink = window.location.pathname.replace('/', '') || 'home';
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      initialize();
    }

    function initialize() {
      callFetchTasks();
      callFetchTags();
      setInitialized(true);
    }

  }, [initialized]);

  return (
    <BrowserRouter basename="/react-todo-list">
      <Layout>
        <Sider>
          <div className="logo"></div>

          <Menu theme="dark" defaultSelectedKeys={[selectedLink]} mode="inline">
            <Menu.Item key="home">
              <Icon type="pie-chart" />
              <Link to={`${process.env.PUBLIC_URL}/`}><span>Dashboard</span></Link>
            </Menu.Item>
            <Menu.Item key="todo-list">
              <Icon type="desktop" />
              <Link to={`${process.env.PUBLIC_URL}/todo-list`}><span>Todo list</span></Link>
            </Menu.Item>
            <Menu.Item key="tags">
              <Icon type="tags" />
              <Link to={`${process.env.PUBLIC_URL}/tags`}><span>Tags</span></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content className="content">
            <article className="content-body">
              <Suspense
                fallback={<Spin />}
              >
                <Switch>
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={() => <DashboardPage appInitialized={initialized} />} />
                  <Route path={`${process.env.PUBLIC_URL}/todo-list`} component={() => <TodoListPage appInitialized={initialized} />} />
                  <Route path={`${process.env.PUBLIC_URL}/tags`} component={() => <TagsPage appInitialized={initialized} />} />
                </Switch>
              </Suspense>
            </article>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>

  );
}

export default connect(
  (
    {
      tasks
    }
  ) => {
    return {
      tasks
    }
  },
  dispatch => {
    return {
      callFetchTasks() {
        dispatch(fetchTasksAction());
      },
      callFetchTags() {
        dispatch(fetchTagsAction());
      }
    }
  }
)(App);
