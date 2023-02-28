import React from 'react'
import NavBar from './NavBar';
import { useState, useEffect } from "react"
import ListingCard from './ListingCard';

const Home = () => {
  const [listings, setListings] = useState([])

  
  useEffect(() => {
    fetch("/listings")
    .then(response => response.json())
    .then((data)=>{
      setListings(data);
    });
  }, []);
  
  if (listings.length === 0) return null
  console.log(listings)
  

  return (
    <div>
      <NavBar />
      <div className='listing-container'>{listings.map((listing)=>(
        <ListingCard key={listing.id} listing={listing}/>
        ))}
      </div>
    </div>
  )
}

export default Home;