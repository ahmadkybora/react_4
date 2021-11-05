import React from 'react'
import Form from '../../utils/form';

class Register extends Form {
    
    state = {};

    render () {
        return (
            <div className="container">
                <h1>Register Form</h1>
                <form>
                    {this.input("text", "username", "username", "UserName ...")}
                </form>
            </div>
        )
    }
}

export default Register;