import React, { Component } from 'react';
import T from 'prop-types';
import emptyFunction from 'fbjs/lib/emptyFunction';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default class ProjectCard extends Component {
  static propTypes = {
    project: T.shape().isRequired,
    onRemove: T.func,
  };

  static defaultProps = {
    onRemove: emptyFunction,
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
        <CardActions>
          <RaisedButton
            label="Remove"
            onClick={() => this.props.onRemove(project)}
            primary
          />
        </CardActions>
      </Card>
    );
  }
}
