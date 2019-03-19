import React, {Component} from 'react';
import './Login.css';
import {Link} from "react-router-dom";

class AppRegister extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="login-container">
          <div className="d-flex justify-content-center h-100">
            <div className="card login-card">
              <div className="card-header">
                <h3 className='float-left'>Sign Up</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span><i className="fab fa-facebook-square"></i></span>
                  <span><i className="fab fa-google-plus-square"></i></span>
                  <span><i className="fab fa-twitter-square"></i></span>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-signature"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Name"/>
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="username"/>
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" className="form-control" placeholder="password"/>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Register" className="btn float-right login_btn bg-dark text-white"/>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Already have an account?<Link to='/login'>Sign In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AppRegister;
