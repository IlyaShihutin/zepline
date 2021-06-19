import React from 'react';
const Input = ({ handleChange, value, title, name }) => {

    return (
        <div className="add_item">
            <p>{title}</p>
            {/* <input className={error ? "error" : ""} onChange={e => onChange(e)} value={value} /> */}
            <input onChange={e => handleChange(e)} name={name} value={value} />

        </div>
    );
};


export default Input;