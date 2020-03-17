import { SEND_MESSAGE } from "../actions/action-types";
export default function sendMessage(state={}, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return state
        default:
            return state
    }
}