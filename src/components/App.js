import React from 'react';
import SideBar from './SideBar';
import Main from './Main';
import '../css/App.css';
import store from '../store';
import _ from 'lodash';

class App extends React.Component {
    render() {
        const { contacts } = store.getState();
        return (
            <div className='App'>
                <SideBar contacts={ _.values(contacts) } />
                <Main />
            </div>
        )
    }
}

export default App;