import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import '../styles/landingfooter.css'
// import { LinkedinOutlined } from '@ant-design/icons';

function LandingFooter() {
    return (
        <>
          <div className="landingfooter_container">
            <div>JOHN CHEN</div>
                <div>
                    <Button type="link" href="https://www.linkedin.com/in/john-chen-92714817/"><img
                    src={process.env.PUBLIC_URL + '/linkedin.png'}
                    alt=""
                    style={{height:20}}
                     /></Button>
                </div>
            <div>Github</div>
            <div>LinkedIn</div>
            </div>
        </>
    );
}
export default LandingFooter;
