import React from 'react'

const MyInput = props => {
    return (
            <div>
                <label>{props.label}</label>
                <input
                    type={props.type} 
                    name={props.name} 
                    placeholder={props.placeholder}
                    onChange={props.handleChange}
                />
            </div>
        )
}

export default MyInput;