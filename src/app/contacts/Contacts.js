import React from "react";
import PinguiculaContainer from "../../components/pinguicula-container/PinguiculaContainer";

export default class Contacts extends React.Component {

  componentDidMount() {
    this.props.findContactsByCriteria();
  }

  render() {
    return (
      <PinguiculaContainer>
        <h1>Contacts</h1>
        {JSON.stringify(this.props.contacts)}
      </PinguiculaContainer>
    )
  }
}
