import React from 'react';
import '../css/ChatWindow.css';
import store from "../store";
import Header from "./ChatWindow/Header";
import MessageInput from "./ChatWindow/MessageInput";
import Chat from "./ChatWindow/Chat";
import _ from "lodash";

class ChatWindow extends React.Component {
    render() {
        const { activeUserId } = this.props;
        const state = store.getState();
        const activeUser = state.contacts[activeUserId];
        const activeMessages = state.messages[activeUserId];
        const { typing } = state;
        return (
            <div className='ChatWindow'>
                <Header user={activeUser} />
                <Chat messages={_.values(activeMessages)} activeUserId={activeUserId} />
                <MessageInput value={typing} />
            </div>
        )
    }
}

export default ChatWindow;