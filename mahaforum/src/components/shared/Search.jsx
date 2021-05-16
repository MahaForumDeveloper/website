import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const Search = ({initial,setData}) => {
    const [input, setInput] = useState("")
    useEffect(() => {
        setData(initial.filter(x=>{
            const xKey = Object.keys(x)
            let check = false
            for(let i=0;i<xKey.length;i++){
                const xValue = x[xKey[i]].toLowerCase()
                console.log(xValue)
                if(xValue.includes(input) && xKey[i]!=="contact" && xKey[i]!=="postType"){
                    check = true
                    break
                }
            }
            return check
    }))
}, [input,initial])

return (
<div  style={{position:"relative", margin:"1rem"}}>
    <input onChange={e=>setInput(e.target.value)} type="text" placeholder="Search" style={{width:"100%",outline: "none",padding:"0.5rem",paddingLeft:"1.75rem",backgroundColor:"rgba(0, 0, 0, 0.04)", borderRadius:"25px"}}/>    
    <div style={{position:"absolute",top:"0.5rem", left:"0.5rem"}}>
        <FontAwesomeIcon icon={faSearch}/>
    </div>
</div>
)
}

export default Search
