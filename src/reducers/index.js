import { combineReducers } from 'redux';
import contacts from './contactsReducer';
import user from './userReducer';
import messages from './messagesReducer';
import activeUserId from './activeUserIdReducer';
import typing from "./typingReducer";

export default combineReducers({
    user,
    contacts,
    activeUserId,
    messages,
    typing,
    
})