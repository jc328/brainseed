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
                    <Button type="link"
                    href="https://www.linkedin.com/in/johnchen328/"
                    target="_blank"><img
                    src={'https://user-images.githubusercontent.com/19940754/94235188-05a38580-fec0-11ea-8331-fc8033dd48b7.png'}
                    alt="LinkedIn"
                    style={{height:20, marginRight: 20, marginLeft: 30}}
                     /></Button>
                </div>
            <div>
                <Button type="link"
                 icon={<GithubOutlined />}
                 href="https://github.com/jc328"
                 style={{color: 'white'}}
                 target="_blank"
                 >
                     <img
                    src={'https://user-images.githubusercontent.com/19940754/94235284-279d0800-fec0-11ea-960f-228d02d66641.png'}
                    alt="Github"
                    style={{height:25}}
                     /></Button></div>
            </div>
        </>
    );
}
export default LandingFooter;
