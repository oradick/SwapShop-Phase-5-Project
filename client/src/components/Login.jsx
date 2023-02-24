import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

  return (
    <div>
        <form className='login-form'>
            <input placeholder='Username'/>
            <input placeholder='Password'/>
            <button onClick={()=>navigate("/home")}>login</button>
        </form>
    </div>
  )
}

export default Login;