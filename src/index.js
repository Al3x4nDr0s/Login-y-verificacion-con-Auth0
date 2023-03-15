import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Auth0Provider
        domain="ale-car.us.auth0.com"
        clientId="9l7jgnyq1l5R9KsBMek0r3epU9MYNNJ0"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>,
  </React.StrictMode>
);

reportWebVitals();
