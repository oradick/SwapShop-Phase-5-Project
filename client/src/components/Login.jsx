import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import {
  FormControl,
  Button,
  Input,
  Heading,
  Stack
} from '@chakra-ui/react'

const Login = ({handleLogin}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    
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
            response.json().then((user) => 
          handleLogin(user))
          navigate("/home")
          console.log({username})
          }else {
            response.json().then(json => setErrors(json.errors))
        }
        })
      }
  

  return (
    <div>
        {/* <NavBar/> */}
        <Heading margin="1rem">Hi, welcome :)</Heading>
        <div className='login-form'>
        <FormControl>
            <Input 
              marginBottom=".5rem"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input 
              marginBottom=".5rem"
              type='password' placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <br/>
            <Stack width="200px" margin="auto">
            <Button onClick={handleSubmit}>Log In</Button>
            <Button onClick={()=>navigate("/signup")}>Create An Account</Button>

            </Stack>
            {errors ? <div>{errors}</div> : null}
        </FormControl>
        </div>
    </div>
  )
}

export default Login;