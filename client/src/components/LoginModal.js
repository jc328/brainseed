import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../styles/loginmodal.css'
import { Modal, Button } from 'antd';


function LoginModal() {
  const [visible, setVisible] = useState(false)



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
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>

            </div>
        </>
    );
}
export default LoginModal;
