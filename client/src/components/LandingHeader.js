import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd'
import 'antd/dist/antd.css'
import '../styles/landingheader.css'
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

function LandingHeader() {
    return (
        <>
          <div className="landingheader_container">
            <Link to="/"><img className="landing_logo" src={'https://user-images.githubusercontent.com/19940754/94236398-ffaea400-fec1-11ea-8bb7-cbe1b8af02e8.png'} alt="" /></Link>
            <div> <Button type="text" disabled className="disable" style={{color:'white'}}>Find Flashcards</Button></div>
            <div> <Button type="text" disabled className="disable" style={{color:'white'}}>About</Button></div>
            <div><LoginModal /></div>
            <div><SignUpModal /></div>
          </div>
        </>
    );
}
export default LandingHeader;
