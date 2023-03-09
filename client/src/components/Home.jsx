import React from 'react'
import NavBar from './NavBar';
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ListingCard from './ListingCard';
import { Heading, Button, Image, Input } from '@chakra-ui/react'
import logo from "./assets/SwapShopLogo.jpg"
import SearchFilter from './SearchFilter';


const Home = ({user, listings, setListings}) => {
  const navigate = useNavigate()
  const [homeListings, setHomeListings] = useState([])

  // states for search/filter
  const [searchTerm, setSearchTerm] = useState("")
  const [listingType, setListingType] = useState()


  
  useEffect(() => {
    fetch("/listings-home")
    .then(response => response.json())
    .then((data)=>{
      setHomeListings(data);
    });
  }, []);

  // attempt at filtering by offer or request
  // const listingFilter = homeListings.filter((listing)=>{
  //   if (listingType == "all") return true;
  //   return listing.offer === listingType
  // })
  // console.log("listingFilter", listingFilter)

  const filteredListings = homeListings.filter((listing)=>{
    return (listing.description.toLowerCase()).includes(searchTerm.toLowerCase())||(listing.keywords.toLowerCase()).includes(searchTerm.toLowerCase())
  })
  
  if (homeListings.length === 0) return null
  console.log(homeListings)
  

  return (
    <div>
      {user ? (
        <div>
          <NavBar />
          <Heading marginLeft="1rem">Welcome, {user.name}!</Heading>
          <div className='listing-container-div'>
            <SearchFilter 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm}
              listingType={listingType}
              setListingType={setListingType}/>
            <div className='listing-container'>
              {filteredListings.map((listing)=>(
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