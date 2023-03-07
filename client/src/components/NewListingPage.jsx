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
  Heading
} from '@chakra-ui/react'


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
        <NavBar />
        <Heading marginLeft="1rem">Create a Listing</Heading>
        {user ? (
          <div className='login-form'>
            <FormControl>
                <FormLabel>Listing Type</FormLabel>
                <Select value={listingType} onChange={(e)=> setListingType(e.target.value)}>
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
                  value={imageURL}
                  onChange={(e)=> setImageURL(e.target.value)}
                />
                
                <br/>
                
                <FormLabel>Description</FormLabel>
                <Input 
                  placeholder='description'
                  value={description}
                  onChange={(e)=> setDescription(e.target.value)}
                />
                
                <br/>
                
                <FormLabel>Size</FormLabel>
                <Input 
                  placeholder='size'
                  value={size}
                  onChange={(e)=> setSize(e.target.value)}
                />
                
                <br/>
                
                <FormLabel>Keywords</FormLabel>
                <Input 
                  placeholder='keywords'
                  value={keywords}
                  onChange={(e)=> setKeywords(e.target.value)}
                />
                
                <br/>
                <br/>
                
                <Button backgroundColor="#cdeafe" onClick={handleNewListing}>Submit</Button>
            </FormControl>
          </div>
          ) : (
            <div>
            <Heading> Please login</Heading>
            <Button onClick={()=>navigate("/")}>login</Button>
            </div>
          )
        }
    </div>
  )
}

export default NewListingPage