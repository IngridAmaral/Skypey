import React from 'react';
import '../css/User.css';
import store from "../store";
import { setActiveUserId } from "../actions";

class User extends React.Component {
    handleClick = (id) => {
        console.log(id)
        store.dispatch(setActiveUserId(id));
    }
    
    render() {
        const { name, profile_pic, status, user_id } = this.props.user;
        return (
            <div className='User' onClick={this.handleClick.bind(null, user_id)}>
                <img src={profile_pic} alt={name} className='User_pic' />
                <div className='User_details'>
                    <p className='User_details_name'>{ name }</p>
                    <p className='User_details_status'>{ status }</p>
                </div>
            </div>
        )
    }
}

export default User;