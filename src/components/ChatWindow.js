import React from 'react';
import '../css/ChatWindow.css';
import store from "../store";
import Header from "./ChatWindow/Header";
import MessageInput from "./ChatWindow/MessageInput";
import Chat from "./ChatWindow/Chat";

class ChatWindow extends React.Component {
    render() {
        const { activeUserId } = this.props;
        const activeUser = store.getState().contacts[activeUserId];

        return (
            <div className='ChatWindow'>
                <Header user={activeUser} />
            </div>
        )
    }
}

export default ChatWindow;