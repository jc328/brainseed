import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux'
import { removeAuth, signIn } from '../actions/authentication';
import {useHistory} from 'react-router-dom'

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
      history.push('/dashboard')
    }
  }

  return (
    <Button
    style={{backgroundColor:"#3D95CE", color:"white"}}
    onClick={handleSubmit}
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
