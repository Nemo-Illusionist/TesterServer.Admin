import React from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { ResponsiveDrawer } from "./modules/menu/ResponsiveDrawer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const NotFoundRedirect = () => <Redirect to='/' />

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <ResponsiveDrawer />
        </Route>
        <Route component={NotFoundRedirect} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
