import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./app";
import PageNotFound from "./components/error/PageNotFound";
import VisitorType from "./views/visitors/VisitorTypes";
import Step1 from "./views/visitors/Step1";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/visitorType" component={VisitorType} />
        <Route path="/step1/:visitorTypeId" component={Step1} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
