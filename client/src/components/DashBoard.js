import React from 'react';
import 'antd/dist/antd.css';
import '../styles/dashboard.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import { ReadOutlined, LaptopOutlined, FireOutlined } from '@ant-design/icons';
import Profile from './Profile';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function DashBoard() {
  return (
    <Layout>
      {/* <Header /> */}
    <Layout className="dashboard_container">
      <Sider width={200} className="dashboard_sidebar">
        <Profile />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<ReadOutlined />} title="Spanish">
            <Menu.Item key="1">Lesson 1</Menu.Item>
            <Menu.Item key="2">Lesson 2</Menu.Item>
            <Menu.Item key="3">Lesson 3</Menu.Item>
            <Menu.Item key="4">Lesson 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Python">
            <Menu.Item key="5">Lesson 1</Menu.Item>
            <Menu.Item key="6">Lesson 2</Menu.Item>
            <Menu.Item key="7">Lesson 3</Menu.Item>
            <Menu.Item key="8">Lesson 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<FireOutlined />} title="Cooking">
            <Menu.Item key="9">Lesson 1</Menu.Item>
            <Menu.Item key="10">Lesson 2</Menu.Item>
            <Menu.Item key="11">Lesson 3</Menu.Item>
            <Menu.Item key="12">Lesson 4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="dashboard_sidebar"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}
export default DashBoard;
