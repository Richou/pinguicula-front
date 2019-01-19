import React from "react";
import {Route, Redirect} from "react-router-dom";
import {token} from "../../utils/SessionUtils";

export const AuthorizedRoute = ({component: Component, redirectTo, ...rest}) => {
  return (
    <Route {...rest} render={props => token() ? (<Component {...props} />) : (
      <Redirect to={{pathname: redirectTo, state: {from: props.location}}}/>
    )
    }
    />
  );
};
