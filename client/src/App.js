import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Components
import AppNav from "./components/AppNav";
import AppLogin from "./components/Login";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/Details";
import Home from "./components/Home";
import AddStudent from "./components/AddStudent";
import AppRegister from "./components/Register";
//Apollo


class App extends Component {
  state = {
    token: 'ahe token',
    userId: null
  };

  // componentDidMount = () => {
  //   if(localStorage.token){
  //     this.setState({token: localStorage.token})
  //   }
  //   console.log(this.state.token)
  // }


  render() {
    return (
      <React.Fragment>
          <AppNav />
          <Switch>
            {(this.state.token===null) && <Redirect from="/" to="/login" exact />}
            <Route exact path="/" component={Home} />
            {(this.state.token!==null) && (
              <Route exact path="/list"component={StudentList} />
            )}
            {(this.state.token!==null) && (
              <Route exact path="/add" component={AddStudent} />
            )}
              <Route exact path="/login"component={AppLogin} />
            {(this.state.token===null) && (
              <Route exact path="/register" component={AppRegister} />
            )}
            {(this.state.token!==null) && (
              <Route path="/details" component={StudentDetails} />
            )}
          </Switch>
      </React.Fragment>

    );
  }
}

export default App;
