import React from 'react';
import './Chat.css';
import { deleteMessage } from "../../actions";
import store from "../../store";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            togleDelete: false,
            messageNum: null,
            hide: false
        }
        this.chatRef = React.createRef();
    }

    componentDidMount() {
        this.scrollBottom();
    }

    componentDidUpdate() {
        this.scrollBottom();
    }

    scrollBottom = () => {
        if (!this.state.togleDelete) {
            this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
        }
    }

    handleClick = (number) => {
        if (!this.state.togleDelete) {
            this.setState(state => ({ togleDelete: !state.togleDelete, messageNum: number }))

        } else if (this.state.togleDelete && this.state.messageNum === number) {
            this.setState({ togleDelete: false, messageNum: number })

        } else {
            this.setState({ togleDelete: true, messageNum: number })
        }
    }

    handleDelete = (number, activeUserId) => {
        this.setState({ togleDelete: false, hide: true });

        setTimeout(() => {
            store.dispatch(deleteMessage(activeUserId, number));
            this.setState({ hide: false, messageNum: null });
        }, 400);   
    }

    render() {
        const { togleDelete, messageNum, hide } = this.state;
        return (
            <div className='Chats' ref={this.chatRef}>
                {this.props.messages.map(message => {

                    const { text, is_user_msg } = message;

                    const hideTransition = messageNum === message.number && hide ? 'hide' : '';

                    const isUserMsg = is_user_msg ? 'is_user_msg' : '';

                    return (
                        <div className={`Chat_div  ${hideTransition} ${is_user_msg ? 'delete_rigth' : ''}`}>
                            {togleDelete && messageNum === message.number && is_user_msg ?
                                <div>
                                    <div
                                        onClick={this.handleDelete.bind(null, message.number, this.props.activeUserId)}
                                        className='delete_user_msg'
                                        key={message.number + 'btn'}>
                                        x
                                    </div>
                                </div>

                                : ''
                            }

                            <span
                                key={message.number}
                                className={`Chat ${isUserMsg}`}
                                onClick={this.handleClick.bind(null, message.number, this.props.activeUserId)}>
                                {text}
                            </span>

                            {togleDelete && messageNum === message.number && !is_user_msg ?
                                <div
                                    onClick={this.handleDelete.bind(null, message.number, this.props.activeUserId)}
                                    className='delete_msg'
                                    key={message.number + 'btn'}>
                                    x
                                    </div>
                                : ''
                            }
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Chat;