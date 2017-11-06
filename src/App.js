import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isSidebarOpen: false,
  };

  openSideMenu = () => {
    this.setState({ isSidebarOpen: true });
  };

  render() {
    return (
      <div className="App">
        <AppBar
          title="App Bar"
          onLeftIconButtonTouchTap={this.openSideMenu}
        />
        <Drawer
          docked={false}
          width={400}
          open={this.state.isSidebarOpen}
          onRequestChange={isSidebarOpen => this.setState({ isSidebarOpen })}
        >
          Side Menu
        </Drawer>
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
      </div>
    );
  }
}

export default App;
