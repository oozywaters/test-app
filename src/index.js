import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { Provider } from 'react-redux';
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic';
import createHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './redux/create';

const history = createHistory();

const store = createStore(history);

const muiTheme = getMuiTheme(darkBaseTheme);

const rootComponent = (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider muiTheme={muiTheme}>
        <BreadcrumbsProvider>
          <App />
        </BreadcrumbsProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(rootComponent, document.getElementById('root'));
registerServiceWorker();
