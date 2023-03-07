import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from "react-router-dom"
import  profpic  from "./assets/Screen Shot 2023-03-01 at 6.29.49 PM.png"
import MyListings from './MyListings'
import ListingsIClaimed from './ListingsIClaimed'
import { Image, Card, CardHeader, CardBody, CardFooter, Button, Heading, Text, Divider, Badge, Stack  } from '@chakra-ui/react'
import logo from "./assets/SwapShopLogo.jpg"


const MyProfilePage = ({user, handleLogout, listings, setListings}) => {
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
        {user ? (
          <div >
          <NavBar />
          <div className='listing-container-div'>
          <Heading marginLeft="1rem">My Profile</Heading>
          <Card margin="1rem"className="profile-details" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
            <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={profpic}/>
            <Stack marginLeft="2rem" width="60%">
              <Text py="2">Name: {user.name}</Text>
              <Text py="2">Username: {user.username}</Text>
              <Text py="2">Email: {user.email}</Text>
              <Text py="2">Password: **********</Text>
            </Stack>
          <Button backgroundColor="#cdeafe" margin="1rem" onClick={handleLogoutBtn}>Log Out</Button>
          </Card>
          </div>
          <MyListings user={user} listings={listings}/>
          <ListingsIClaimed user={user}/>
        </div>
        ) : (
          <div>
          <Image className="logo" src={logo} style={{ height: 90 }} onClick={()=> navigate("/home")}/>
          <Heading margin="1rem"> Please Log In</Heading>
          <Button backgroundColor="#cdeafe" margin="1rem" onClick= {() => navigate("/")}>Log In</Button>
          </div>
        )
        }
    </div>
  )
}

export default MyProfilePage