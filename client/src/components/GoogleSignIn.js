import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button } from 'antd';
import * as AuthActions from '../actions/authentication';
import '../styles/googlesignin.css'

function GoogleSignIn() {

  const [auth, setAuth] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1072199093070-t1qbjbvbtmmnaf76sp92nv80ga1puu0o.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        let authorized = window.gapi.auth2.getAuthInstance();
        setAuth(authorized)
      })
    });
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(AuthActions.removeAuth());
    try {
      const storeReady = await dispatch(AuthActions.signIn(auth.currentUser.le.rt.$t, auth.currentUser.le.rt.NT));
      if (storeReady) {
        history.push('/dashboard')
      }
    } catch {
      const storeReady = await dispatch(AuthActions.signIn('causeError', 'C4useError' ));
      if (storeReady) {
        history.push('/dashboard')
      }
    }
  }

  return (
        <>
          <Button type="link" style={{marginBottom: 20}}><img className="signin_button" onClick={handleSubmit} src={process.env.PUBLIC_URL + '/googlebutton.png'} alt="" /></Button>
        </>
    );
}
export default GoogleSignIn;
