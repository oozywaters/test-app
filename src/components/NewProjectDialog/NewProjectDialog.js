import React, { Component } from 'react';
import T from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class NewProjectDialog extends Component {
  static propTypes = {
    isOpen: T.bool.isRequired,
    handleClose: T.func.isRequired,
    onCreate: T.func.isRequired,
  };

  state = {
    projectName: '',
  };

  get actions() {
    const { projectName } = this.state;
    return [
      <FlatButton
        label="Cancel"
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Create"
        onClick={this.onSubmit}
        keyboardFocused
        disabled={projectName === ''}
        primary
      />
    ];
  }

  onChange = (e, value) => {
    this.setState({ projectName: value });
  };

  onSubmit = (e) => {
    const { projectName } = this.state;
    e.preventDefault();
    this.props.handleClose();
    this.props.onCreate(projectName);
  };

  render() {
    const { isOpen, handleClose } = this.props;
    return (
      <Dialog
        open={isOpen}
        onRequestClose={handleClose}
        title="Create a new project"
        actions={this.actions}
      >
        Enter a project name
        <form onSubmit={this.onSubmit}>
          <TextField
            fullWidth
            floatingLabelText="Name"
            onChange={this.onChange}
          />
        </form>
      </Dialog>
    );
  }
}