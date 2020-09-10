import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../styles/loginmodal.css'
import { Modal, Button } from 'antd';
import {useHistory} from 'react-router-dom'


function LoginModal() {
  const [visible, setVisible] = useState(false)
  const history = useHistory();

  const onSubmit = () => {
    setVisible(false)
    history.push('/dashboard')
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
            onOk={onSubmit}
            onCancel={() => setVisible(false)}
            className="loginmodal"
            style={{borderRadius:10}}
            width={300}
            bodyStyle={{
              height:300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly'


             }}
            wrapClassName="loginmodal_wrapper"
          >
            <Button>Continue with Google</Button>
            <Button>Continue with Facebook</Button>
            <p>-----or----- </p>
            <p>Email</p>
            <p>Password</p>
          </Modal>

            </div>
        </>
    );
}
export default LoginModal;
