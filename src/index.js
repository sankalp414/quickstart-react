import React from "react";
import {createRoot} from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const root = createRoot(document.getElementById("root"));
root.render(
<Auth0Provider
    domain="dev-8ehj7hegcl34oskl.us.auth0.com"
    clientId="5LpnnJJipoafChkU2YpqZ0up88YbFuZe"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
