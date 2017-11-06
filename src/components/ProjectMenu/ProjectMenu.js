import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { NavLink } from 'react-router-dom';
import './ProjectMenu.css';

class ProjectMenu extends Component {
  static propTypes = {
    project: T.shape({
      id: T.number.isRequired,
    }).isRequired,
  };

  render() {
    const { project } = this.props;
    if (!project) {
      return null;
    }
    return (
      <div>
        <h3 className="pmenu__title">{project.name}</h3>
        <Divider />
        <MenuItem
          primaryText="Keywords"
          containerElement={<NavLink to={`/projects/${project.id}/keywords`} activeClassName="menu-item_active" />}
        />
        <MenuItem
          primaryText="Segments"
          containerElement={<NavLink to={`/projects/${project.id}/segments`} activeClassName="menu-item_active" />}
        />
        <MenuItem
          primaryText="Workflows"
          containerElement={<NavLink to={`/projects/${project.id}/workflows`} activeClassName="menu-item_active" />}
        />
        <Divider />
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  project: state.projects.data[match.params.projectId],
});

export default connect(mapStateToProps)(ProjectMenu);
