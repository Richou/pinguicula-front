import {FIND_CONTACTS_SUCCEED} from "../actions/ActionTypes";

const initialState = {
  contacts: []
};

export const contacts = (state = initialState, action) => {
  switch (action.type) {
    case FIND_CONTACTS_SUCCEED:
      return {
        ...state,
        contacts: action.payload.contacts
      };
    default:
      return state;
  }
};
