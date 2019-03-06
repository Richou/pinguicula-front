import { findAllContactsByCriteria } from '../app/contacts/ContactsService';
import {FIND_CONTACTS_ERROR, FIND_CONTACTS_SUCCEED} from "./ActionTypes";

export const findContactsByCriteria = () => async dispatch => {
  try {
    const result = await findAllContactsByCriteria();
    dispatch({type: FIND_CONTACTS_SUCCEED, payload: {contacts: result}});
  } catch (error) {
    dispatch({type: FIND_CONTACTS_ERROR})
  }
};
