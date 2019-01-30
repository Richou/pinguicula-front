import React from 'react';
import './Home.scss';
import {withRouter} from "react-router";
import PinguiculaContainer from "../../components/pinguicula-container/PinguiculaContainer";

class Home extends React.Component {

  render() {
    return (
      <PinguiculaContainer>
        <p>Coucou</p>
      </PinguiculaContainer>
    )
  }
}

export default withRouter(Home);
