import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import {
  FormControl,
  Button,
  Input,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from "./assets/SwapShopLogo.jpg"
import flowerLogo from "./assets/p5 SwapShopLogo flower only.png"


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
        <Image className="logo" src={logo} style={{ height: 90 }} onClick={()=> navigate("/home")}/>
        <div className='login-container-div'>
        <div className='login-form'>
        <Image src={flowerLogo} height="9rem" width="6rem" margin="auto"/>
        <Heading margin="auto" marginBottom="1rem">Log In</Heading>
        <Text fontSize="lg" margin="auto" marginBottom="1rem">Hi, welcome back :)</Text>

        <FormControl>
            <Input 
              marginBottom=".5rem"
              backgroundColor="white"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input 
              marginBottom=".5rem"
              backgroundColor="white"
              type='password' placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <br/>
            <Stack width="200px" margin="auto">
            <Button backgroundColor="#cdeafe" onClick={handleSubmit}>Log In</Button>
            <Button backgroundColor="#cdeafe" onClick={()=>navigate("/signup")}>Create An Account</Button>

            </Stack>
            {errors ? <div>{errors}</div> : null}
        </FormControl>
        </div>
        </div>
    </div>
  )
}

export default Login;