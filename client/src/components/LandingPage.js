import React, { useEffect } from 'react';
import 'antd/dist/antd.css'
import { message } from 'antd';
import LandingHeader from './LandingHeader'
import LandingBody from './LandingBody';
import LandingFooter from './LandingFooter';
import { useSelector } from 'react-redux'



function LandingPage() {
  const valErrors = useSelector(state=> state.authentication.valErrors)



  useEffect(() => {
    return valErrors ? message.warning(valErrors.msg): undefined
  })



  return (
  <>

      <LandingHeader />
      <LandingBody />
      <LandingFooter />
  </>
    );
}
export default LandingPage;
