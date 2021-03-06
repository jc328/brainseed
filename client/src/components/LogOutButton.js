import React from 'react';
import { Button, message } from 'antd';
import {useHistory} from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons';
import { useDispatch} from 'react-redux'
import * as AuthActions from '../actions/authentication';


function LogOutButton() {
  const dispatch = useDispatch();
  const history = useHistory();

  const clickHandler = async (e) => {
    e.preventDefault();
    message.loading('Logging Out', [1.5])
    dispatch(AuthActions.setValErrors(''));
    dispatch(AuthActions.logout());
    history.push('/')
  }

    return (
        <>
          <Button type="primary" onClick={clickHandler} shape="circle" icon={<LogoutOutlined />} size='medium' style={{marginTop: 8}}/>
        </>
    );
}
export default LogOutButton;
