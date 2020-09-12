import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './utilities/authUtils'
import LandingPage from './components/LandingPage'
import Dashboard from './components/DashBoard.js'

function App() {
  const needSignIn = useSelector(state => !state.authentication.token);

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/users" />
            <Route path="/" exact component={LandingPage} />
            <PrivateRoute path="/dashboard" needSignIn={needSignIn} exact component={Dashboard} />

        </Switch>
    </BrowserRouter>
  );
}

export default App;
