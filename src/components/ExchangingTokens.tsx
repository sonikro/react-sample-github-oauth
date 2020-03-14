import { Card, CardContent, CardHeader, Grid, Typography, LinearProgress } from "@material-ui/core";
import { inject } from "mobx-react";
import * as React from "react";
import { RouteProps } from "react-router-dom";
import { AuthStore } from "../stores/AuthStore";

interface TokenExchangeProps extends RouteProps {
  auth?: AuthStore;
}
export const TokenExchange: React.FC<TokenExchangeProps> = inject("auth")(
  props => {
    const params = new URLSearchParams(window.location.search);
    React.useEffect(() => {
      props.auth!.exchangeToken(params.get("code")!);
    }, [params, props.auth]);
    return (
      <Grid 
      container 
      alignContent="center" 
      alignItems="center" 
      justify="center" 
      spacing={4} 
      style={{padding: 10}}>
        <Card style={{marginTop: 10}}>
          <CardHeader title="Authenticating" />
          <CardContent>
            <Grid item alignContent="center">
              <Typography>Exchanging tokens</Typography>
            </Grid>
            <Grid item alignContent="center">
              <LinearProgress/>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }
);
