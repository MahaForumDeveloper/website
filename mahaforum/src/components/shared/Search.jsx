import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons' 

const Search = () => {
    return (
        <div style={{position:"relative", margin:"1rem"}}>
            <input type="text" placeholder="Search" style={{width:"100%",outline: "none",padding:"0.5rem",paddingLeft:"1.75rem",backgroundColor:"rgba(0, 0, 0, 0.04)", borderRadius:"25px"}}/>    
            <div style={{position:"absolute",top:"0.5rem", left:"0.5rem"}}>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
    )
}

export default Search
