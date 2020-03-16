import React from 'react';
import '../css/User.css';

class User extends React.Component {
    render() {
        const { name, profile_pic, status } = this.props.user;
        return (
            <div className='User'>
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