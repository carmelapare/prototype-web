import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.css';

const history = createBrowserHistory()

const onRedirectCallback = (appState) => {
  history.push(appState && appState.returnTo? appState.returnTo : window.location.pathname)
}

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <Auth0Provider
      domain = {process.env.REACT_APP_AUTH0_DOMAIN} 
      clientId = {process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      onRedirectCallback= {onRedirectCallback}
      audience="https://prototype-api.com"
    >
      <App />
    </Auth0Provider>
)
