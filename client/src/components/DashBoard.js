import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../styles/dashboard.css'
import { Layout, Menu, Breadcrumb, message } from 'antd';
import { ReadOutlined, LaptopOutlined, FireOutlined } from '@ant-design/icons';
import Profile from './Profile';
import { useSelector } from 'react-redux'
import Deck from './Deck';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function DashBoard({location}) {
  const username = useSelector((state) => state.authentication.user.username)
  const picture = useSelector((state) => state.authentication.user.picUrl)
  const firstName = useSelector((state) => state.authentication.user.first_name)
  const lastName = useSelector((state) => state.authentication.user.last_name)
  const createdDate = useSelector((state) => state.authentication.user.created_at)

  useEffect(() => {
    if (location.state) {
      if (location.state.google === "newAccount") {
        message.loading('Creating new Google Account.  Logging In...', [2], () => {message.success(`Logged In.  Welcome ${firstName}`)})
      } else if (location.state.google === "standard") {
        message.loading('Logging In...', [2], () => {message.success('Logged In')})
      } else if (location.state.google === "demologin") {
        message.loading('Demo Account Logging In...', [2], () => {message.success(`Logged In.  Welcome ${firstName}`)})
      } else if (location.state.google === "newstandard") {
        message.loading('New Account Created.  Logging In...', [2], () => {message.success(`Logged In.  Welcome ${firstName}`)})
      }
    }
  })

  return (
    <Layout>
      {/* <Header /> */}
    <Layout className="dashboard_container">
      <Sider width={200} className="dashboard_sidebar">
      <div><Profile
            username={username}
            picture={picture}
            firstName={firstName}
            lastName={lastName}
            createdDate={createdDate}
            /></div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<ReadOutlined />} title="Spanish">
            <Menu.Item key="1"><Deck /></Menu.Item>
            <Menu.Item key="2">Lesson 2</Menu.Item>
            <Menu.Item key="3">Lesson 3</Menu.Item>
            <Menu.Item key="4">Lesson 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Cooking">
            <Menu.Item key="5">Lesson 1</Menu.Item>
            <Menu.Item key="6">Lesson 2</Menu.Item>
            <Menu.Item key="7">Lesson 3</Menu.Item>
            <Menu.Item key="8">Lesson 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<FireOutlined />} title="Python">
            <Menu.Item key="9">Coming Soon</Menu.Item>
            {/* <Menu.Item key="10">Coming Soon</Menu.Item>
            <Menu.Item key="11">Coming Soon</Menu.Item>
            <Menu.Item key="12">Coming Soon</Menu.Item> */}
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
