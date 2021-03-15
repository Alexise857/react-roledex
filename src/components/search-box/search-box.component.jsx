import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({placeholder, handleChange}) => (
    <input
        className='search'
        type="search"
        placeholder={placeholder}
        onChange={handleChange}/>
);

// Functional component is just a component that gets some props and returns some HTML

// Si no necesitamos el internal state o algun life cycle, usar functional component
