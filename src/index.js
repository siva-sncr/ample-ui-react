import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AmpleApp from './AmpleApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AmpleApp />, document.getElementById('root'));
registerServiceWorker();
