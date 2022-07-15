import React from "react";
import './SearchBox.css'

const SearchBox = ({onInputChange})=>{
    return ( 
    <div className="search-container">
        <input onChange={(event)=> onInputChange(event.target.value)} className="search-input" placeholder="Type keywords..." />
    </div>
    )
        
}
export default SearchBox;