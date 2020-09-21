import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp, signIn, setValErrors, createSample } from '../actions/authentication'
import { Button } from 'antd';
import '../styles/googlesignin.css'

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
      dispatch(setValErrors(''));
      auth.signIn().then(() => {
      const storeReady = dispatch(signUp(auth.currentUser.le.rt.tV, auth.currentUser.le.rt.uT, auth.currentUser.le.rt.$t, auth.currentUser.le.rt.NT, auth.currentUser.le.rt.TJ))

        storeReady.then((result) => {
          console.log(result)
          if (result.ok===true) {
            const storeReady = dispatch(signIn(auth.currentUser.le.rt.$t, auth.currentUser.le.rt.NT)).then((res) => {
              dispatch(createSample(res.id))
            })

              if (storeReady) {
                history.push({
                  pathname: '/dashboard',
                  state: {'google': 'newAccount'}
                })
            }
          } else if (result===false) {
            dispatch(signIn(auth.currentUser.le.rt.$t, auth.currentUser.le.rt.NT)).then((res) => {
              if (res.ok) {
                history.push({
                  pathname: '/dashboard',
                  state: {'google': 'previousAccount'}
                })
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
