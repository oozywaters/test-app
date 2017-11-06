import _ from 'lodash';
import React, { Component } from 'react';
import T from 'prop-types';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { connect } from 'react-redux'
import ProjectCard from '../../components/ProjectCard';

class Projects extends Component {
  static propTypes = {
    projects: T.shape().isRequired,
  };

  get projects() {
    const { projects } = this.props;
    if (!projects) {
      return null;
    }
    return _.map(projects, project => (
      <ProjectCard project={project} />
    ));
  }

  render() {
    console.log(this.props.projects);
    return (
      <div>
        <BreadcrumbsItem to="/projects">
          Projects
        </BreadcrumbsItem>
        {this.projects}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.data,
});

export default connect(mapStateToProps)(Projects);
