import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux'
import { removeAuth, signIn } from '../actions/authentication';
import {useHistory} from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';

export default function DemoButton () {
  const history = useHistory();
  const dispatch = useDispatch();

  const email = "demo@brainseed.com"
  const password = "private"


  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(removeAuth())
    const storeReady = await dispatch(signIn(email, password));
    if (storeReady) {
      history.push({
        pathname: '/dashboard',
        state: {'google': 'demologin'}
      })
    }
  }

  return (
    <Button
    style={{backgroundColor:"#3367D6", color:"white", width: 156, fontSize: 12, alignItems: "center"}}
    onClick={handleSubmit}
    icon={<UserOutlined />}
    >Demo User</Button>
    )
  }

  // let i=0, k=0, spd = 40;
  // let txt = 'demo@brainseed.com'
  // let pwd = 'private'

  // let handleClick = () => {
  //   setEmail('')
  //   setPassword('')
  //   email = ''
  //   password = ''
  //   typeEmail()
  //   setTimeout(typePassword, spd*txt.length)
  // }

  // function typeEmail() {
  //   if (i < txt.length) {
  //     setEmail(email += txt.charAt(i))
  //     i++
  //     setTimeout(typeEmail, spd);
  //   }
  // }

  // function typePassword() {
  //   if (k < pwd.length) {
  //     setPassword(password += pwd.charAt(k))
  //     k++;
  //     setTimeout(typePassword, spd);
  //   } else {
  //     // document.querySelector('.signIn').click()
  //   }
  // }
