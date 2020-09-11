import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'antd'
import 'antd/dist/antd.css'
import '../styles/landingheader.css'
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

function LandingHeader() {
    return (
        <>
          <div className="landingheader_container">
            <Link to="/"><img className="landing_logo" src={process.env.PUBLIC_URL + '/landinglogo.png'} alt="" /></Link>
            <div>Find Flashcards</div>
            <div>About</div>
            <div><LoginModal /></div>
            <div><SignUpModal /></div>
          </div>
        </>
    );
}
export default LandingHeader;
