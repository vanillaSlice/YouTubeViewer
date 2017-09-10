import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/normalize.css/normalize.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const AppElement = React.createElement(App, null);
const rootElement = document.getElementById('root');

ReactDOM.render(AppElement, rootElement);
registerServiceWorker();
