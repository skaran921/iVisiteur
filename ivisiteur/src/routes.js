import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./app";
import PageNotFound from "./components/error/PageNotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
