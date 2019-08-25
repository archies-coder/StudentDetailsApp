import React, { Component } from 'react'

const AuthContext = React.createContext();
export default class AuthProvider extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        return (
            <AuthContext.Provider value = {{state: this.state}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };