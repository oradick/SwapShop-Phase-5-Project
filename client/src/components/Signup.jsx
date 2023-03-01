import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = ({handleLogin}) => {
  const navigate = useNavigate()

  //states for form
  //name, username, email, password
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  const handleSignup = (e) => {
    e.preventDefault();
    //POST new user and
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"name": name, "username": username, "email": email, "password": password})
    })
    .then((response)=>{
      if (response.ok){
        response.json().then((user) =>
        handleLogin(user))
        //go to homepage
        navigate("/home")
      } else {
        response.json().then(json => setErrors(json.errors))
      }
    })
  }

  return (
    <div>
      <h1>create an account</h1>
      <form className='login-form'>
        <input 
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          placeholder='username'
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        />
        <input 
          placeholder='email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder='password'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>submit</button>
        <button onClick={() => navigate("/")}>back to login</button>
        {errors ? <div>{errors}</div> : null}
      </form>
    </div>
  )
}

export default Signup;