import React from 'react';

const Search = ({ valor, placeholder, onChange, onClick }) => (
    <div className="search flex horizontal">
        <input value={valor} placeholder={placeholder} onChange={onChange} />
        <button>
            <i className="fa fa-search" onClick={onClick} />
        </button>
    </div>
)

export default Search;
