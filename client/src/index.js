import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div style={{margin:20}}>
    <App />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
