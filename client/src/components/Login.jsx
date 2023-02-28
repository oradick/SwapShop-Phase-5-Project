import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

  return (
    <div>
        {/* <NavBar/> */}
        <h1>Hi, welcome :)</h1>
        <form className='login-form'>
            <input placeholder='Username'/>
            <input type='password' placeholder='Password'/>
            <button onClick={()=>navigate("/home")}>login</button>
            <button onClick={()=>navigate("/signup")}>create an account</button>
        </form>
    </div>
  )
}

export default Login;