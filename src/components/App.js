import React from 'react';
import SideBar from './SideBar';
import Main from './Main';
import '../css/App.css'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <SideBar />
                <Main />
            </div>
        )
    }
}

export default App;