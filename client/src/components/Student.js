import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to='/details' className="view-details-link">
            <button className='font-italic' >
              View Details
            </button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

