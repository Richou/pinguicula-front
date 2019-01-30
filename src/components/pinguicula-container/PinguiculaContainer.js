import React from 'react';
import {withRouter} from "react-router";
import {ToastContainer} from "react-toastify";
import {clearSession} from "../../utils/SessionUtils";
import {LOGIN_ROUTE} from "../../app/PinguiculaRoutes";

class PinguiculaContainer extends React.Component {

  onClickHandler = () => {
    clearSession();
    this.props.history.push(LOGIN_ROUTE.url);
  };

  render() {
    return (
      <div className="main-container">
        <header onClick={this.onClickHandler}>The Header !</header>
        {this.props.children}
        <ToastContainer />
      </div>
    )
  }

}

export default withRouter(PinguiculaContainer)
