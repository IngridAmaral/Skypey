import React from 'react';
import SideBar from '../components/SideBar';
import Main from '../components/Main';
import '../css/App.css';
import store from '../store';
import _ from 'lodash';

class App extends React.Component {
    render() {

        const { contacts, user, activeUserId } = store.getState();
        return (
            <div className='App'>
                <SideBar contacts={ _.values(contacts) } />
                <Main user={user} activeUserId={activeUserId} />
            </div>
        )
    }
}

export default App;