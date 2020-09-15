import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import '../styles/landingfooter.css'
import { GithubOutlined } from '@ant-design/icons';

function LandingFooter() {
    return (
        <>
          <div className="landingfooter_container">
            <div className="landingfooter_name">JOHN CHEN</div>
                <div>
                    <Button type="link" href="https://www.linkedin.com/in/john-chen-92714817/"><img
                    src={process.env.PUBLIC_URL + '/linkedin.png'}
                    alt=""
                    style={{height:20, marginRight: 20, marginLeft: 20}}
                     /></Button>
                </div>
            <div>
                <Button type="link"
                 icon={<GithubOutlined />}
                 href="https://github.com/jc328"
                 style={{color: 'white'}}
                 >
                     <img
                    src={process.env.PUBLIC_URL + '/github.png'}
                    alt=""
                    style={{height:25}}
                     /></Button></div>
            </div>
        </>
    );
}
export default LandingFooter;
