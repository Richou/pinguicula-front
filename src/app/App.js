import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import './App.scss';
import {Login} from "./authentication/Login";
import {LOGIN_ROUTE, HOME_ROUTE} from "./PinguiculaRoutes";
import {AuthorizedRoute} from '../components';
import { Home } from "./home";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path={LOGIN_ROUTE.url} component={Login} />
            <AuthorizedRoute exact path={HOME_ROUTE.url} redirectTo={LOGIN_ROUTE.url} component={Home} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
