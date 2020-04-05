import React from 'react';

const Search = ({value, placeholder, onchange,onclick}) => {
    return (
        <div className="search flex horizontal">
            <input value={value} placeholder={placeholder} onChange={onchange} />
            <button>
                <i class="fa fa-search" onClick={onclick}></i>
            </button>
        </div>
    );
}

export default Search;
