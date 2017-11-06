import React, { Component } from 'react';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
// import T from 'prop-types';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <BreadcrumbsItem to="/projects">
          Projects
        </BreadcrumbsItem>
        Projects
      </div>
    );
  }
}