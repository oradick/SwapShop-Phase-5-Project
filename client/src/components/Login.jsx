import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react"

const Login = ({handleLogin}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    
    //handles setting who the logged in user is finding if there is a user name 
    //and password that match on the user array
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"username": username, "password": password})
      })
        .then((response) => {
          if (response.ok) {
            response.json()
        .then((user) => {
          handleLogin(user)
          navigate("/home")
          console.log({username})
        })
        }
      })
    }

  return (
    <div>
        {/* <NavBar/> */}
        <h1>Hi, welcome :)</h1>
        <form className='login-form'>
            <input 
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input 
              type='password' placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>login</button>
            <button onClick={()=>navigate("/signup")}>create an account</button>
        </form>
    </div>
  )
}

export default Login;