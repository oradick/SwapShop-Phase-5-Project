import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Heading,
  Stack,
  Image,
  Text
} from '@chakra-ui/react'
import logo from "./assets/SwapShopLogo.jpg"
import flowerLogo from "./assets/p5 SwapShopLogo flower only.png"




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
        navigate("/home")
      } else {
        response.json().then(json => setErrors(json.errors))
      }
    })
  }

  return (
    <div>
        <Image className="logo" src={logo} style={{ height: 90 }} onClick={()=> navigate("/home")}/>
      <div className='login-container-div'>
      <div className='login-form'>
      <Image src={flowerLogo} height="9rem" width="6rem" margin="auto"/>

        <Heading margin="auto" marginBottom="1rem">Create an Account</Heading>
        <Text fontSize="lg" margin="auto" >Please fill out the form below</Text>
        <br/>
        <FormControl>
          <FormLabel>Name</FormLabel>  
          <Input 
            marginBottom=".5rem"
            backgroundColor="white"
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          <FormLabel>Username</FormLabel>  
          <Input 
            marginBottom=".5rem"
            backgroundColor="white"
            placeholder='username'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
          />
          <FormLabel>Email</FormLabel>
          <Input 
            marginBottom=".5rem"
            backgroundColor="white"
            placeholder='email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <FormLabel>Password</FormLabel>
          <Input 
            marginBottom=".5rem"
            backgroundColor="white"
            type="password" 
            placeholder='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <br/>
          <br/>
          <Stack width="200px" margin="auto">
          <Button backgroundColor="#cdeafe" onClick={handleSignup}>Submit</Button>
          <Button backgroundColor="#cdeafe" onClick={() => navigate("/")}>Back to Log In</Button>
          </Stack>

        </FormControl>
        {errors ? <h1>{errors}</h1> : null}
      </div>

      </div>
    </div>
  )
}

export default Signup;