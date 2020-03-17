import { SEND_MESSAGE,SET_ACTIVE_USER_ID, SET_TYPING_VALUE } from "./action-types";
import typing from "../reducers/typingReducer";
import activeUserId from "../reducers/activeUserIdReducer";

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
})

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
})

export const sendMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
})