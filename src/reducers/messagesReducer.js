import { getMessages } from "../static-data";
import { SEND_MESSAGE, DELETE_MESSAGE } from "../actions/action-types";
import _ from 'lodash';

export default function messages(state=getMessages(10), action) {
    switch (action.type) {
        case SEND_MESSAGE:
            const { message, userId } = action.payload;
            const allUserMsgs = state[userId];
            const number = +_.keys(allUserMsgs).pop()+1;
            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            };
        case DELETE_MESSAGE:
            const { activeUserId, num } = action.payload;  
            const userMsgs = state[activeUserId];
            const { [num]: abc, ...newUserMsgs } = userMsgs;            
        
            return { 
                ...state, 
                [activeUserId]: 
                    { ...newUserMsgs }
                }
        default:
            return state;
    }
}