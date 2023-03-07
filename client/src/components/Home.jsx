import React from 'react'
import NavBar from './NavBar';
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ListingCard from './ListingCard';
import { Heading, Button, Image } from '@chakra-ui/react'
import logo from "./assets/SwapShopLogo.jpg"


const Home = ({user, listings, setListings}) => {
  // const [listings, setListings] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    fetch("/listings")
    .then(response => response.json())
    .then((data)=>{
      setListings(data);
    });
  }, []);
  
 

  if (listings.length === 0) return null
  // console.log(listings)
  

  return (
    <div>
      {user ? (
        <div>
          <NavBar />
          <Heading marginLeft="1rem">Welcome, {user.name}!</Heading>
        <div className='listing-container-div'>
          <div className='listing-container'>
            {listings.map((listing)=>(
            <ListingCard key={listing.id} listing={listing} setListings={setListings} user={user}/>
             ))}
          </div>
        </div>
        </div>
      ) : (
        <div>
          <Image className="logo" src={logo} style={{ height: 90 }} onClick={()=> navigate("/home")}/>
          <Heading margin="1rem">Please Log In</Heading>
          <Button backgroundColor="#cdeafe" margin="1rem" onClick= {() => navigate("/")}>Log In</Button>
        </div>
      )}
    </div>
  )
}

export default Home;