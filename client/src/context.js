import React, { Component } from 'react'

const AuthContext = React.createContext();
export default class AuthProvider extends Component {
    constructor(){
        super();
        this.state = {
            isAuth: false,
            userId: ''
        }
    }

    handleAuthSuccess = (id) => {
        if(localStorage.token){
            this.setState({isAuth: true, useId: id})
        }
    }
    render() {
        return (
            <AuthContext.Provider value = {{
                state: this.state,
                handleLogin: this.handleAuthSuccess
                }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };