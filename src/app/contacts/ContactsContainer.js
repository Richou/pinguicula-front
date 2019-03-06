import {connect} from "react-redux";
import Contacts from './Contacts';
import { findContactsByCriteria } from '../../actions/ContactsAction';

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  }
};

const mapActionsToProps = { findContactsByCriteria };

export default connect(mapStateToProps, mapActionsToProps)(Contacts);
