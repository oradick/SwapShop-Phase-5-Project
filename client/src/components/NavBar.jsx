//NavBarComponent

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        console.log(searchTerm)
    }

  return (
    <div className='header-div'>
        <h1 onClick={()=> navigate("/home")}>Logo/Home Button</h1>
        <div className="nav-div">
            <input placeholder='Search' value={searchTerm} onChange={handleSearch}/>
            <button onClick={()=> navigate("/new-listing")}>New Listing</button>
            <button onClick={()=> navigate("/my-profile")}>My Profile</button>
        </div>

    </div>
  )
}

export default NavBar