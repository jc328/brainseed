import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { removeAuth, signIn } from '../actions/authentication';
import 'antd/dist/antd.css';
import '../styles/loginmodal.css'
import {useHistory} from 'react-router-dom'
import { Form, Input, Button, Modal, Divider } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import DemoButton from './DemoButton.js'
import GoogleSignIn from './GoogleSignIn'


function LoginModal() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(removeAuth())
    const storeReady = await dispatch(signIn(email, password));
    if (storeReady) {
      history.push('/dashboard')
    }
  }

  return (
        <>
          <div className="loginmodal_container">
            <Button className="loginmodal_login" type="text" onClick={() => setVisible(true)}>
              Login
            </Button>

            <Modal
            title="Login"
            centered
            visible={visible}
            onOk={handleSubmit}
            onCancel={() => setVisible(false)}
            className="loginmodal"
            width={300}
            okText="Login"
            bodyStyle={{
              height:300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
             }}
            wrapClassName="loginmodal_wrapper"
          >
            <GoogleSignIn />
            <DemoButton email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
            <Divider style={{fontSize: '10px', fontWeight: 350}}>or</Divider>
          <Form>
            <Form.Item
              name="Email"
              rules={[{ required: true, message: 'Input your Email' }]}
              >
                <Input
                  placeholder="*Email"
                  value={email}
                  onPressEnter={handleSubmit}
                  onChange={e => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item
              name="Password"
              rules={[{ required: true, message: 'Input your Password' }]}
              >
                <Input.Password
                placeholder="*Password"
                value={password}
                onPressEnter={handleSubmit}
                onChange={e => setPassword(e.target.value)}
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>
            </Form>

          </Modal>

            </div>
        </>
    );
}
export default LoginModal;
