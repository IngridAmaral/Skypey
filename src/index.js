import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './css/index.css';
import store from './store';

const render = () => { 
    //console.log(store.getState())
    ReactDOM.render(<App />, document.querySelector('#root'));
}
render();


store.subscribe(render)

