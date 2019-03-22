import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import TodoListPage from "./pages/TodoListPage";
import { Icon, Layout, Menu } from "antd";
import connect from 'react-redux/es/connect/connect';
import { fetchTasksAction } from './ducks/tasks';
import { fetchTagsAction } from './ducks/tags';

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
    <BrowserRouter>
      <Layout>
        <Sider>
          <div className="logo"></div>

          <Menu theme="dark" defaultSelectedKeys={[selectedLink]} mode="inline">
            <Menu.Item key="home">
              <Icon type="pie-chart" />
              <Link to="/"><span>Dashboard</span></Link>
            </Menu.Item>
            <Menu.Item key="todo-list">
              <Icon type="desktop" />
              <Link to="/todo-list"><span>Todo list</span></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content className="content">
            <article className="content-body">
              <Switch>
                <Route exact path="/" component={() => <DashboardPage appInitialized={initialized} />} />
                <Route path="/todo-list" component={() => <TodoListPage appInitialized={initialized} />} />
              </Switch>
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
