import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import {
  FormControl,
  FormLabel,
  Select,
  Button,
  Input,
  Heading,
  Image
} from '@chakra-ui/react'
import logo from "./assets/SwapShopLogo.jpg"



const NewListingPage = ({user, listings, setListings}) => {
  const navigate = useNavigate()

  //states for New Listing form
  const [listingType, setListingType] = useState()
  const [imageURL, setImageURL] = useState("")
  const [description, setDescription] = useState("")
  const [size, setSize] = useState("")
  const [keywords, setKeywords] = useState("")


  const handleNewListing = (e) => {
    e.preventDefault();
    fetch("/listings", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify({
      "creator_id": user.id,
      "recipient_id": user.id, 
      "offer": listingType, 
      "image": imageURL, 
      "description": description, 
      "size": size, 
      "keywords": keywords
    }),
  })
    .then(response => response.json())
    .then((newListing)=> {
      setListings([...listings, newListing])
    })
    navigate("/home")
  }

  return (
    <div>
        {user ? (
          <div>
            <NavBar />
            <Heading marginLeft="1rem">Create a Listing</Heading>
          <div className='listing-container-div'>
          <div className='login-form'>
            <FormControl>
                <FormLabel>Listing Type</FormLabel>
                <Select backgroundColor="white" value={listingType} onChange={(e)=> setListingType(e.target.value)}>
                  <option value="null">Select a Type</option>
                  <option value="true">Offer</option>
                  <option value="false">Request</option>
                </Select>
                
                <br/>
              
                <FormLabel>Upload an Image</FormLabel>
                <Button backgroundColor="#cdeafe">Choose a File</Button>
                  <p>or</p>
                <FormLabel>Image URL</FormLabel>
                <Input 
                  placeholder='image url'
                  backgroundColor="white"
                  value={imageURL}
                  onChange={(e)=> setImageURL(e.target.value)}
                />
                
                <br/>
                
                <FormLabel>Description</FormLabel>
                <Input 
                  placeholder='description'
                  backgroundColor="white"
                  value={description}
                  onChange={(e)=> setDescription(e.target.value)}
                />
                
                <br/>
                
                <FormLabel>Size</FormLabel>
                <Input 
                  placeholder='size'
                  backgroundColor="white"
                  value={size}
                  onChange={(e)=> setSize(e.target.value)}
                />
                
                <br/>
                
                <FormLabel>Keywords</FormLabel>
                <Input 
                  placeholder='keywords'
                  backgroundColor="white"
                  value={keywords}
                  onChange={(e)=> setKeywords(e.target.value)}
                />
                
                <br/>
                <br/>
                
                <Button backgroundColor="#cdeafe" onClick={handleNewListing}>Submit</Button>
            </FormControl>
          </div>
          </div>
          </div>
          ) : (
            <div>
            <Image className="logo" src={logo} style={{ height: 90 }} onClick={()=> navigate("/home")}/>  
            <Heading margin="1rem"> Please Log In</Heading>
            <Button backgroundColor="#cdeafe" margin="1rem" onClick={()=>navigate("/")}>Log In</Button>
            </div>
          )
        }
    </div>
  )
}

export default NewListingPage