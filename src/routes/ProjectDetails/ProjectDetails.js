import React, { Component } from 'react';
import T from 'prop-types';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Keywords from '../Keywords';
import Segments from '../Segments';
import Workflows from '../Workflows';

class ProjectDetails extends Component {
  static propTypes = {
    match: T.shape().isRequired,
    project: T.shape({
      id: T.number.isRequired,
    }).isRequired,
  };

  get projectContent() {
    const { project } = this.props;
    if (!project) {
      return null;
    }
    return (
      <div className="">
        <h1>{project.name}</h1>
        <p>{project.content}</p>
      </div>
    )
  }

  render() {
    const { project, match } = this.props;
    if (!project) {
      return null;
    }
    return (
      <div>
        <BreadcrumbsItem to={match.url}>
          <b>{project.id}</b>
        </BreadcrumbsItem>
        <Route exact path={match.url} component={() => this.projectContent} />
        <Route exact path="/projects/:projectId/keywords" component={Keywords} />
        <Route exact path="/projects/:projectId/segments" component={Segments} />
        <Route exact path="/projects/:projectId/workflows" component={Workflows} />
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  project: state.projects.data[match.params.projectId],
});

export default connect(mapStateToProps)(ProjectDetails);
