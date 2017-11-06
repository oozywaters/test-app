import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './redux/create';

const history = createHistory();

const store = createStore(history);

const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootComponent, document.getElementById('root'));
registerServiceWorker();
