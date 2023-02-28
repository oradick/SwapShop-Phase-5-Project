import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from "react-router-dom"

const MyProfilePage = () => {
    const navigate = useNavigate()

  return (
    <div>
        <NavBar />
        <div>MyProfilePage</div>
        <button onClick={()=>navigate("/")}>log out</button>
    </div>
  )
}

export default MyProfilePage