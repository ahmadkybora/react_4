import React, { Component } from 'react'

class Form extends Component
{
    state = {};

    input = ({ type, name, id, placeholder }) => {
        return (
            <div className="form-group">
                <input 
                    className="form-control"
                    type={type}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                />
            </div>
        )
    }

    button = ({ name }) => {
        return (
            <div className="form-group">
                <button 
                    className="form-control"
                >
                    {name}
                </button>
            </div>
        )
    }

    select = () => {}
}

export default Form;