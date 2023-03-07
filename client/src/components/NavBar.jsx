//NavBarComponent

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button, ButtonGroup, Stack, Input } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

const NavBar = () => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        console.log(searchTerm)
    }

  return (
    <div className='header-div'>
        <div className="nav-div">
          <Stack direction='row'>
        <h1 onClick={()=> navigate("/home")}>Logo/Home Button</h1>
            <Input placeholder="Search Listings" value={searchTerm} onChange={handleSearch}/>
            <Button width="200px"rightIcon={<AddIcon />} onClick={()=> navigate("/new-listing")}>New Listing</Button>
            <Button width="200px" onClick={()=> navigate("/my-profile")}>My Profile</Button>
          </Stack>
        </div>

    </div>
  )
}

export default NavBar