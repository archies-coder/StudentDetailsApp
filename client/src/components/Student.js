import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Student.css';

export default class Student extends Component {
  render() {
    const {
      name
    } = this.props.student;
    return (
      <React.Fragment>
        <div key={name} className="card">
          <div className="avatar-container">
          </div>
          {name}
            <button className='font-italic btn-primary border-0 bg-dark text-monospace text-white view-details-link'>
              View Details
            </button>
        </div>
      </React.Fragment>
    )
  }
}

