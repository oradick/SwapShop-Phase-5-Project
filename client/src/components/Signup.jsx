import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  const handleSignup = () => {
    //POST new user &&
    navigate("/home")
  }

  return (
    <div>
      <h1>create an account</h1>
      <form className='login-form'>
        <input placeholder='name'/>
        <input placeholder='username'/>
        <input placeholder='email'/>
        <input type="password" placeholder='password'/>
        <button onClick={handleSignup}>submit</button>
        <button onClick={() => navigate("/")}>back to login</button>
      </form>
    </div>
  )
}

export default Signup;