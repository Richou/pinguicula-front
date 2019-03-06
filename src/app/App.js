import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import './App.scss';
import Login from "./authentication/Login";
import {CONTACTS_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "./PinguiculaRoutes";
import {AuthorizedRoute} from '../components';
import Home from "./home/Home";
import ContactsContainer from "./contacts/ContactsContainer";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path={LOGIN_ROUTE.url} component={Login}/>
          <AuthorizedRoute exact path={HOME_ROUTE.url} redirectTo={LOGIN_ROUTE.url} component={Home}/>
          <AuthorizedRoute exact path={CONTACTS_ROUTE.url} redirectTo={LOGIN_ROUTE.url} component={ContactsContainer}/>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
