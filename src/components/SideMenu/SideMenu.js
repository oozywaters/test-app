import React, { Component } from 'react';
import T from 'prop-types';
import emptyFunction from 'fbjs/lib/emptyFunction';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ActionExit from 'material-ui/svg-icons/action/exit-to-app';
import FolderOpen from 'material-ui/svg-icons/file/folder-open';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class SideMenu extends Component {
  static propTypes = {
    open: T.bool,
    onRequestChange: T.func,
  };

  static defaultProps = {
    open: false,
    onRequestChange: emptyFunction,
  };

  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.open}
        onRequestChange={this.props.onRequestChange}
      >
        <AppBar title="Menu" showMenuIconButton={false} />
        <Menu>
          <MenuItem
            primaryText="Projects"
            leftIcon={<FolderOpen />}
            containerElement={<Link to="/projects" />}
          />
          <MenuItem
            primaryText="Logout"
            leftIcon={<ActionExit />}
            containerElement={<Link to="/logout" />}
          />
        </Menu>
      </Drawer>
    );
  }
}
