import React, {Component} from 'react';
import './Login.css';
import {Link} from "react-router-dom";

class AppRegister extends Component {
  constructor(props){
    super(props);
    this.fnameEl= React.createRef();
    this.lnameEl= React.createRef();
    this.emailEl= React.createRef();
    this.passwordEl= React.createRef();
  }

  submitHandler = (e)=>{
    e.preventDefault();
    const fname = this.fnameEl.current.value;
    const lname = this.lnameEl.current.value;
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if(email.trim().length === 0 || password.trim().length === 0){
      return;
    }

    const requestBody ={
      query:`
        mutation{
          register(userInput:{fname: "${fname}", lname: "${lname}", email: "${email}", password: "${password}"}){
          _id
          email
        }
        }
      `
    };

    fetch('http://localhost:5000/graphql',{
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed!');
      }
      console.log('hi');
      return res.json();
      }).then(resData => {
      console.log(resData.data);
    }).catch(err=> console.log(err))
  };
  render() {
    return (
      <React.Fragment>
        <div className="login-container">
          <div className="d-flex justify-content-center h-100">
            <div className="card login-card">
              <div className="card-header">
                <h3 className='float-left'>Sign Up</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span><i className="fab fa-facebook-square"/></span>
                  <span><i className="fab fa-google-plus-square"/></span>
                  <span><i className="fab fa-twitter-square"/></span>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={this.submitHandler}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user"/></span>
                    </div>
                    <input type="text" className="form-control" placeholder="First Name" ref={this.fnameEl}/>
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-signature"/></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Last Name" ref={this.lnameEl}/>
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-at"/></span>
                    </div>
                    <input type="email" className="form-control" placeholder="email" ref={this.emailEl}/>
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-key"/></span>
                    </div>
                    <input type="password" className="form-control" placeholder="password" ref={this.passwordEl}/>
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
