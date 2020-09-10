import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Dashboard from './components/DashBoard.js'

function App() {

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/users" />
            <Route path="/" exact component={LandingPage} />
            <Route path="/dashboard" exact component={Dashboard} />

        </Switch>
    </BrowserRouter>
  );
}

export default App;
