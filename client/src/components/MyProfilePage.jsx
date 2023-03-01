import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from "react-router-dom"

const MyProfilePage = ({handleLogout}) => {
    const navigate = useNavigate()

    const handleLogoutBtn = () => {
      fetch("/logout",{
        methog: "DELETE",
      })
      .then(() => {
        handleLogout()
        navigate("/")
        console.log("logged out")
      })
    }

  return (
    <div>
        <NavBar />
        <div>MyProfilePage</div>
        <button onClick={handleLogoutBtn}>log out</button>
    </div>
  )
}

export default MyProfilePage