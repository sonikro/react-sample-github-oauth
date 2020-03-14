import { inject, observer } from "mobx-react";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { NotFoundScene } from "./scenes/NotFoundScene";
import { AuthStore } from "./stores/AuthStore";
import { TokenExchange } from "./components/ExchangingTokens";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { DashboardScene } from "./scenes/DashboardScene";

interface LoggedInProps {
  auth?: AuthStore;
}

const LoggedIn: React.FC<LoggedInProps> = inject("auth")(
  observer(props => {
    return (
      <Route
        render={() => {
          return props.auth!.isAuthenticated ? props.children : <DoLogin />;
        }}
      />
    );
  })
);
interface DoLoginProps {
  auth?: AuthStore;
}
const DoLogin: React.FC<DoLoginProps> = inject("auth")(props => {
  props.auth!.login();
  return null;
});

export const Router: React.FC = inject("auth")(props => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Github App</Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/callback">
          <TokenExchange />
        </Route>

        <LoggedIn>
          <Route exact path="/">
            <DashboardScene />
          </Route>
        </LoggedIn>

        <Route component={NotFoundScene}/>
      </Switch>
    </React.Fragment>
  );
});
