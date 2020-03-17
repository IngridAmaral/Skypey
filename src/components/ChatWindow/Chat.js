import React from 'react';
import './Chat.css';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.chatRef = React.createRef();
    }

    componentDidMount() {
        this.scrollBottom();
    }

    componentDidUpdate() {
        this.scrollBottom();
    }

    scrollBottom = () => {
        this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
    }
    
    render() {
        //const { text, is_user_msg } = this.props.messages
        //console.log(this.props.messages.message)
        return (
            <div className='Chats' ref={this.chatRef}>
                {this.props.messages.map(message => {
                    const { text, is_user_msg } = message
                    return <span key={message.number} className={`Chat ${is_user_msg? 'is_user_msg': ''}`}>{text}</span>
                })}
            </div>
        )
    }
}

export default Chat;