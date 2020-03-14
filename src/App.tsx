import React from "react";
import { Router } from "./Router";
import { Provider as MobxProvider } from "mobx-react";
import { stores } from "./stores";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import theme from './theme';


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <MobxProvider {...stores}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MobxProvider>
    </MuiThemeProvider>
  );
}

export default App;
