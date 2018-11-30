import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Template extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/dashboard/template/create" className="btn btn-primary">
            Create Template
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Template;
