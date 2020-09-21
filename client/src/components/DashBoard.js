import React, { useEffect, useState } from 'react';
import { baseUrl } from '../config';
import 'antd/dist/antd.css';
import '../styles/dashboard.css'
import { Layout, Menu, Breadcrumb, message } from 'antd';
import { ReadOutlined, } from '@ant-design/icons';
// LaptopOutlined, FireOutlined
import Profile from './Profile';
import { useSelector } from 'react-redux'
// import FlashCard from './FlashCard';
import Card from './Card';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function DashBoard({location}) {
  const username = useSelector((state) => state.authentication.user.username)
  const picture = useSelector((state) => state.authentication.user.picUrl)
  const firstName = useSelector((state) => state.authentication.user.first_name)
  const lastName = useSelector((state) => state.authentication.user.last_name)
  const createdDate = useSelector((state) => state.authentication.user.created_at)
  const [data, setData] = useState([]);
  const userId = useSelector((state) => state.authentication.user.id)

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userId),
    }
    async function test() {
    const response = await fetch(`${baseUrl}/deck/cards`, requestOptions)
    const newData = await response.json()
    setData(newData)
    }
    test()
  }, [userId])

  function welcome () {
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
  }

  useEffect(welcome, [])

  return (
    <Layout>
      {console.log(data)}
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
          {data.deckData ? data.deckData.map((x, idx) => <SubMenu key={idx} icon={<ReadOutlined />} title={x.deck} >
          {data.cards.map((c, index) =>  {
            if (index % 50 === 0 && (idx+1) === c.deck_id) {
              return <Menu.Item key={index}>Lesson {(index/50) + 1}</Menu.Item>
            }
            if (idx+1 !== c.deck_id && index < 1) {
              return <Menu.Item key={index}>No Cards Listed</Menu.Item>
            }
            return ''
            }
          )}
          {/* {data.cards.map((c, index) => <Menu.Item key={index}>{c.card}</Menu.Item>)} */}
          </SubMenu>) : ''}

        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>Card</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="dashboard_sidebar"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 380,
          }}
        >
          {/* <FlashCard /> */}
          <Card data={data.cards}/>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}
export default DashBoard;
