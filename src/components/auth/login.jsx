import React from 'react'
import Form from '../../utils/form';

class Login extends Form {
    
    state = {};

    render () {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Login Form</h1>
                    <form>
                        {/* {this.input("text", "username", "username", "UserName ...")}
                        {this.button("Login")} */}
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;