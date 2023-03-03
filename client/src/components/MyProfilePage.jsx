import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from "react-router-dom"
import  profpic  from "./assets/Screen Shot 2023-03-01 at 6.29.49 PM.png"

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
          <div className="profile-details">
            <img style={{height: 300 + "px"}} src={profpic}/>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Password: **********</p>
          </div>
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