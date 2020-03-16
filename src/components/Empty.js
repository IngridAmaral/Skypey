import React from 'react';
import '../css/Empty.css';

class Empty extends React.Component {
    render() {
        const { name, profile_pic, status} = this.props.user;
        const first_name = name.split(' ')[0];
        return (
            <div className='Empty'>
                <h1 className='Empty_name'>Welcome, {first_name}</h1>
                <img className='Empty_img' src={profile_pic} alt={name} />
                <p className='Empty_status'>
                    <b>Status:</b> {status}
                </p>
                <button className='Empty_btn'>Start a conversation</button>
                <p className='Empty_info'>
                    Search for someone to start chatting with or go to contactsto see who is available
                </p>
            </div>
        )
    }
}

export default Empty;