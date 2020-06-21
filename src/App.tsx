import React from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { ResponsiveDrawer } from "./modules/menu/ResponsiveDrawer";
import { BrowserRouter, Switch, Route, Redirect, Router } from "react-router-dom";
import { SignIn } from "./modules/auth/Signin"
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const NotFoundRedirect = () => <Redirect to='/' />

function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth/">
            <SignIn />
          </Route>
          <Route path="/">
            <ResponsiveDrawer />
          </Route>
          <Route component={NotFoundRedirect} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
