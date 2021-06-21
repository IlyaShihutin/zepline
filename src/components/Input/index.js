import React from 'react';
const Input = ({ handleChange, value, title, name }) => {

    return (
        <div className="add_item">
            <p>{title}</p>
            <input onChange={e => handleChange(e)} name={name} value={value} />
        </div>
    );
};


export default Input;