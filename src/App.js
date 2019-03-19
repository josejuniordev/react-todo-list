import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import TodoListPage from "./pages/TodoListPage";
import { Icon, Layout, Menu } from "antd";

const { Sider, Content } = Layout;

function App() {
  const selectedLink = window.location.pathname.replace('/', '') || 'home';

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
                <Route exact path="/" component={DashboardPage} />
                <Route path="/todo-list" component={TodoListPage} />
              </Switch>
            </article>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
