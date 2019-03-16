import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import AppNav from './components/AppNav'
import AppLogin from "./components/Login";
import StudentList from './components/StudentList';
import StudentDetails from './components/Details'
import Home from './components/Home';
import AddStudent from './components/AddStudent'
//Apollo
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";

// Apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

class App extends Component {
    render() {
    return (
        <ApolloProvider client={client}>
          <AppNav/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/list' component={StudentList}/>
                <Route exact path='/add' component={AddStudent}/>
                <Route path='/details' component={StudentDetails}/>
                <Route path='/login' component={AppLogin}/>
            </Switch>
        </ApolloProvider>
    );
  }
}

export default App;
