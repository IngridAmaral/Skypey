import React from 'react';
import '../css/Main.css';
import Empty from "./Empty";
import ChatWindow from "./ChatWindow";

class Main extends React.Component {
    render() {
        const { user, activeUserId } = this.props
        
        if (!activeUserId) {
            return (
                <Empty user={user} activeUserId={activeUserId} />
            )
        } else {
            return (
                <ChatWindow activeUserId={activeUserId} />
            )
        }        
    }
}

export default Main;