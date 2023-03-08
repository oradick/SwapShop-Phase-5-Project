//NavBarComponent
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Image } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import logo from "./assets/SwapShopLogo.jpg"

const NavBar = () => {
    const navigate = useNavigate()
    
  return (
    <div className='header-div'>
        <Image className="logo" src={logo} style={{ height: 90 }} onClick={()=> navigate("/home")}/>
        <div className="nav-div">
          <Button className="button" backgroundColor="#cdeafe" alignSelf="center" width="200px"rightIcon={<AddIcon />} onClick={()=> navigate("/new-listing")}>New Listing</Button>
          <Button backgroundColor="#cdeafe" alignSelf="center" width="200px" onClick={()=> navigate("/my-profile")}>My Profile</Button>
        </div>

    </div>
  )
}

export default NavBar