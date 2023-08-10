// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter  as Router, Route, Switch } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import Characters from './components/Characters';
import Home from './components/Home';
import Search_Characters from './components/Search_Characters';
import Developer from './components/Developer';
import Login_page from './components/Login_Page';

const root = document.getElementById('root');



ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={__REACT_APP_AUTH0_DOMAIN__}
      clientId={__REACT_APP_AUTH0_CLIENT_ID__}
      redirectUri={window.location.origin}
    >
      <Router>
        <Switch>
          <Route path="/login" component={Login_page} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route path="/search" component={Search_Characters} />
          <Route path="/developer" component={Developer} />
          <Route path="/" component={Login_page} /> {/* Ruta por defecto (404) */}
        </Switch>
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  root
);
