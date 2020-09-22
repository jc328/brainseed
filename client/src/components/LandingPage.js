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
    if (valErrors) {
      if (valErrors.msg.search('Google') === 7) {
        return
      } else {
        message.warning(valErrors.msg)
      }
    }
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
