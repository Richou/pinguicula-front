import { combineReducers } from 'redux';
import { authentication } from './AuthenticationReducer';
import { contacts } from "./ContactsReducer";

const rootReducer = combineReducers({
  authentication,
  contacts,
});

export default rootReducer
