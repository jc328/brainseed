import React from 'react';
import { Button } from 'antd';
import {useHistory} from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons';


function LogOutButton() {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/')
  }

    return (
        <>
          {/* <Button color="secondary" onClick={clickHandler}>Log Out</Button> */}
          <Button type="primary" onClick={clickHandler} shape="circle" icon={<LogoutOutlined />} size='medium' />
        </>
    );
}
export default LogOutButton;
