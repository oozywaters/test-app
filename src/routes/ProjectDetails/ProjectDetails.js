import React, { Component } from 'react';
import T from 'prop-types';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { connect } from 'react-redux';

class ProjectDetails extends Component {
  static propTypes = {
    match: T.shape().isRequired,
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
        <BreadcrumbsItem to={`projects/${project.id}`}>
          {project.id}
        </BreadcrumbsItem>
        <h1>{project.name}</h1>
        <p>{project.content}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  project: state.projects.data[match.params.projectId],
});

export default connect(mapStateToProps)(ProjectDetails);
