import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SideMenu from './components/SideMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './routes'

class App extends Component {
  state = {
    isSidebarOpen: false,
  };

  toggleSideMenu = isSidebarOpen => {
    this.setState({ isSidebarOpen });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <AppBar
            title="App Bar"
            onLeftIconButtonTouchTap={() => this.toggleSideMenu(true)}
          />
          <SideMenu
            open={this.state.isSidebarOpen}
            onRequestChange={this.toggleSideMenu}
          />
          <Switch>
            {routes.map(route => (
              <Route
                key={route.key}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        </div>
      </Router>
    );
  }
}

export default App;
