import React from 'react';
import '../css/SideBar.css';
import User from '../containers/User'

class SideBar extends React.Component {
    render() {
        const { contacts } = this.props;
        return (
            <aside className='SideBar'>
                { contacts.map(contact => <User user={contact} key={contact.user_id} />) }
            </aside>
        )
    }
}

export default SideBar;