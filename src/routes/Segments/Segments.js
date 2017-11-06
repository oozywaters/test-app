import React, { Component } from 'react';
import T from 'prop-types';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { connect } from 'react-redux';

class Segments extends Component {
  static propTypes = {
    match: T.shape().isRequired,
    project: T.shape({
      id: T.number.isRequired,
    }).isRequired,
  };

  render() {
    const { project } = this.props;
    console.log(this.props);
    return (
      <div className="">
        <BreadcrumbsItem to={`/projects/${project.id}/segments`}>
          Segments
        </BreadcrumbsItem>
        Segments Here
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  project: state.projects.data[match.params.projectId],
});

export default connect(mapStateToProps)(Segments);
