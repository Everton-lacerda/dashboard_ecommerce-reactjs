import React from 'react';

const InputSimple = ({ type, label, value, onChange }) =>  (
        <div className="Input-Simple">
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange}></input>
        </div>
    )

export default InputSimple;
