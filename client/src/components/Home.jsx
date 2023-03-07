import React from 'react'
import NavBar from './NavBar';
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ListingCard from './ListingCard';
import { Heading} from '@chakra-ui/react'

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
      <NavBar />
      {user ? (
        <div>
          <Heading marginLeft="1rem">Welcome, {user.name}!</Heading>
          <div className='listing-container'>
            {listings.map((listing)=>(
            <ListingCard key={listing.id} listing={listing} setListings={setListings} user={user}/>
             ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
          <button onClick= {() => navigate("/")}>login</button>
        </div>
      )}
    </div>
  )
}

export default Home;