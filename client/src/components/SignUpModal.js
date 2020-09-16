import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Form, Input, Button, Modal } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { removeAuth, signUp } from '../actions/authentication';
import {useHistory} from 'react-router-dom'
import '../styles/signupmodal.css'
import GoogleSignUp from './GoogleSignUp';

function SignUpModal() {

  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(removeAuth())
    const storeReady = await dispatch(signUp(firstName, lastName, email, password));
    if (storeReady) {
      history.push({
        pathname: '/dashboard',
        state: {'google': 'newstandard'}
      })
    }
  }

  return (
    <>
      <div className="signupmodal_container"></div>

        <Button className="signupmodal_button" type="text" onClick={() => setVisible(true)}>
          Get Started
        </Button>
        <Modal
        title="Lets Get Started"
        centered
        visible={visible}
        onOk={handleSubmit}
        onCancel={() => setVisible(false)}
        className="signupmodal"
        style={{borderRadius:10}}
        width={350}
        bodyStyle={{
          height:300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly'
          }}
        wrapClassName="signupmodal_wrapper"
      >
        <GoogleSignUp />
        {/* <Button>Sign Up with Facebook</Button> */}
        <Form onSubmit={handleSubmit}>
          <div className="signup_names">
          <Form.Item
          name="First Name"
          style={{marginRight: 20}}
          rules={[{ required: true, message: 'Input your First Name' }]}
          ><Input
            placeholder="*First Name"
            value={firstName}
            onPressEnter={handleSubmit}
            onChange={e => setFirstName(e.target.value)}
            />
            </Form.Item>
          <Form.Item
          name="Last Name"
          rules={[{ required: true, message: 'Input your Last Name' }]}
          ><Input
          placeholder="*Last Name"
          value={lastName}
          onPressEnter={handleSubmit}
          onChange={e => setLastName(e.target.value)}
          /></Form.Item>
          </div>
          <Form.Item
          name="Email"
          rules={[{ required: true, message: 'Input your Email' }]}
          ><Input
          placeholder="*Email"
          value={email}
          onPressEnter={handleSubmit}
          onChange={e => setEmail(e.target.value)}
          /></Form.Item>
          <Form.Item
          name="Password"
          rules={[{ required: true, message: 'Input your Password' }]}
          ><Input.Password
            placeholder="*Password"
            value={password}
            onPressEnter={handleSubmit}
            onChange={e => setPassword(e.target.value)}
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

        </Form>

      </Modal>
    </>
  );
}
export default SignUpModal;
