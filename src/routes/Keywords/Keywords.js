import _ from 'lodash';
import React, { Component } from 'react';
import T from 'prop-types';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAdd from 'material-ui/svg-icons/content/add-circle';
import { addKeyword } from '../../redux/modules/projects';

class Keywords extends Component {
  static propTypes = {
    match: T.shape().isRequired,
    project: T.shape({
      id: T.number.isRequired,
    }).isRequired,
    addKeyword: T.func.isRequired,
  };

  render() {
    const { project } = this.props;
    console.log(project.keywords);
    return (
      <div className="">
        <BreadcrumbsItem to={`/projects/${project.id}/keywords`}>
          Keywords
        </BreadcrumbsItem>
        <h4 style={{ marginTop: 30, marginBottom: 30 }}>
          Keywords ({_.size(project.keywords)})
        </h4>
        <RaisedButton
          style={{ float: 'right' }}
          label="Add Keyword(s)"
          icon={<ActionAdd />}
          onClick={() => this.props.addKeyword(project)}
          primary
        />
        <ul>
          {project.keywords && project.keywords.map(keyword => (
            <li>{keyword}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  project: state.projects.data[match.params.projectId],
});

export default connect(mapStateToProps, { addKeyword })(Keywords);
