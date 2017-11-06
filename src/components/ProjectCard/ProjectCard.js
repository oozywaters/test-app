import React, { Component } from 'react';
import T from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default class ProjectCard extends Component {
  static propTypes = {
    project: T.shape().isRequired,
  };

  get projectLink() {
    const { project } = this.props;
    return <Link to={`/projects/${project.id}`}>{project.name}</Link>;
  }

  render() {
    const { project } = this.props;
    return (
      <Card className="pcard">
        <CardHeader title={this.projectLink} />
        <CardText>
          {project.content}
        </CardText>
      </Card>
    );
  }
}
