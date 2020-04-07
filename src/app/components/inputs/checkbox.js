import React from 'react';

const checkbox = ({ label, value, onChange }) => (
        <div className="checkbox">
            <input type="checkbox" checked={value} onChange={onChange}></input>
            <span>{label}</span>
        </div>
    )

export default checkbox;
