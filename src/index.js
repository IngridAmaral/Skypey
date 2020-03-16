import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css';
import store from './store';

const fancyLog = () => {
    console.log(store.getState())
}

const render = () => { 
    fancyLog();
    ReactDOM.render(<App />, document.querySelector('#root'));
}
render();

store.subscribe(render)

