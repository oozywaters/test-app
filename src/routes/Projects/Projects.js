import _ from 'lodash';
import React, { Component } from 'react';
import T from 'prop-types';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionAdd from 'material-ui/svg-icons/content/add-circle';
// import
import ProjectCard from '../../components/ProjectCard';
import NewProjectDialog from '../../components/NewProjectDialog';
import ProjectDetails from '../ProjectDetails';

import { create, remove } from '../../redux/modules/projects';

class Projects extends Component {
  static propTypes = {
    projects: T.shape().isRequired,
    match: T.shape().isRequired,
    create: T.func.isRequired,
    remove: T.func.isRequired,
  };

  state = {
    isDialogOpen: false,
  };

  openDialog = () => {
    this.setState({ isDialogOpen: true });
  };

  closeDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  get projects() {
    const { projects, create, remove } = this.props;
    if (!projects) {
      return null;
    }
    return (
      <div className="">
        <RaisedButton
          style={{ float: 'right' }}
          label="Add Project"
          icon={<ActionAdd />}
          onClick={this.openDialog}
          primary
        />
        <h4 style={{ marginTop: 30, marginBottom: 30 }}>
          My Projects ({_.size(projects)})
        </h4>
        {_.map(projects, project => (
          <ProjectCard key={project.id} project={project} onRemove={remove} />
        ))}
        <NewProjectDialog
          isOpen={this.state.isDialogOpen}
          handleClose={this.closeDialog}
          onCreate={create}
        />
      </div>
    );
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <BreadcrumbsItem glyph="list" to="/projects">
          Projects
        </BreadcrumbsItem>
        <Route exact path={match.url} component={() => this.projects} />
        <Route path={`${match.url}/:projectId`} component={ProjectDetails} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.data,
});

export default connect(mapStateToProps, { create, remove })(Projects);
