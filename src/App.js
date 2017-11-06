import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SideMenu from './components/SideMenu';
import { BreadcrumbsWithIcon } from './components/Breadcrumbs';
import './App.css';
import getRoutes from './routes';

class App extends Component {
  state = {
    isSidebarOpen: false,
  };

  toggleSideMenu = isSidebarOpen => {
    this.setState({ isSidebarOpen });
  };

  render() {
    return (
      <div className="App">
        <AppBar
          title="The Test App"
          onLeftIconButtonTouchTap={() => this.toggleSideMenu(true)}
        />
        <SideMenu
          open={this.state.isSidebarOpen}
          onRequestChange={this.toggleSideMenu}
        />
        <div className="container App__content">
          <div className="row">
            <div className="col s12">
              <BreadcrumbsWithIcon />
              {getRoutes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
