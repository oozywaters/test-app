import _ from 'lodash';
import React, { Component } from 'react';
import T from 'prop-types';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import ProjectCard from '../../components/ProjectCard';
import ProjectDetails from '../ProjectDetails';

class Projects extends Component {
  static propTypes = {
    projects: T.shape().isRequired,
    match: T.shape().isRequired,
  };

  get projects() {
    const { projects } = this.props;
    if (!projects) {
      return null;
    }
    return _.map(projects, project => (
      <ProjectCard key={project.id} project={project} />
    ));
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

export default connect(mapStateToProps)(Projects);
