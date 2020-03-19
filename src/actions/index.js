import { SEND_MESSAGE,SET_ACTIVE_USER_ID, SET_TYPING_VALUE, DELETE_MESSAGE } from "./action-types";

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

export const deleteMessage = (activeUserId, num) => ({
    type: DELETE_MESSAGE,
    payload: {
        activeUserId,
        num
    }
})