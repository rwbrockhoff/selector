import React from "react";
import "./SearchBox.css";

const SearchBox = ({onSearchChange}) => {
    return (
        <input className="search-input" 
               type="search" 
               placeholder="Search Robots..." 
               onChange={onSearchChange}/>
    )
}

export default SearchBox;