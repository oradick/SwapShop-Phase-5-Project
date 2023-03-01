import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from "react-router-dom"

const MyProfilePage = ({user, handleLogout}) => {
    const navigate = useNavigate()

    const handleLogoutBtn = () => {
      fetch("/logout",{
        method: "DELETE",
      })
      .then((response) => {
        if (response.ok)
          handleLogout()
          navigate("/")
          console.log("logged out")
        
      })
    }

  return (
    <div>
        <NavBar />
        <h1>My Profile</h1>
        {user ? (
        <div>

          <button onClick={handleLogoutBtn}>log out</button>
        </div>
        ) : (
          <div>
          <h2> Please login</h2>
          <button onClick= {() => navigate("/")}>login</button>
          </div>
        )

        }
    </div>
  )
}

export default MyProfilePage