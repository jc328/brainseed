import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp, signIn } from '../actions/authentication'
import { Button } from 'antd';

function GoogleSignUp() {

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

    const handleSubmit = (e) => {
    e.preventDefault();
    try {
      auth.signIn().then(() => {
      const storeReady = dispatch(signUp(auth.currentUser.le.rt.tV, auth.currentUser.le.rt.uT, auth.currentUser.le.rt.$t, auth.currentUser.le.rt.NT, auth.currentUser.le.rt.TJ))

        storeReady.then((result) => {

          if (result===true) {
            const storeReady = dispatch(signIn(auth.currentUser.le.rt.$t, auth.currentUser.le.rt.NT));
              if (storeReady) {
                history.push('/dashboard')
            }
          } else if (result===false) {
            dispatch(signIn(auth.currentUser.le.rt.$t, auth.currentUser.le.rt.NT)).then((res) => {
              if (res) {
                history.push('/dashboard')
            }
      })
          }
        })
      })
    }
   catch {}
  }

  return (
        <>
          <Button type="link" style={{marginBottom: 20}}><img className="signin_button" onClick={handleSubmit} src={process.env.PUBLIC_URL + '/googlebutton.png'} alt="" /></Button>
        </>
    );
}
export default GoogleSignUp;
