import React from 'react';
import './MessageInput.css';
import store from "../../store";
import { setTypingValue, sendMessage } from "../../actions";

class MessageInput extends React.Component {
    handleChange = (e) => {
        store.dispatch(setTypingValue(e.target.value))
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { typing, activeUserId } = store.getState();
        store.dispatch(sendMessage(typing, activeUserId));
    }

    render() {
        const { value } = this.props
        return (
            <form onSubmit={this.handleSubmit} className='MessageInput'>
                <input
                    className='MessageInput_input'
                    value={value}
                    onChange={this.handleChange}
                    placeholder='write a message' />
            </form>
        )
    }
}

export default MessageInput;