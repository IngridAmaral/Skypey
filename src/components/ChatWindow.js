import React from 'react';
import '../css/ChatWindow.css';

class ChatWindow extends React.Component {
    render() {
        const { activeUserId } = this.props
        return (
            <div className='ChatWindow'>
                Conversation for user id: {activeUserId}
            </div>
        )
    }
}

export default ChatWindow;