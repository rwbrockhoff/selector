import React from "react";

const SearchBox = ({onSearchChange}) => {
    return (
        <input type="search" placeholder="Search Robots..." onChange={onSearchChange}/>
    )
}

export default SearchBox;