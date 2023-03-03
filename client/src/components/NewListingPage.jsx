import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from "react-router-dom"
import { useState } from "react"


const NewListingPage = ({user}) => {
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
    navigate("/home")
  }

  return (
    <div>
        <NavBar />
        <h1>Create a Listing</h1>
        {user ? (
          <div>
            <form>
                <label>Listing Type</label>
                <select value={listingType} onChange={(e)=> setListingType(e.target.value)}>
                  <option value="null">Select a Type</option>
                  <option value="true">Offer</option>
                  <option value="false">Request</option>
                </select>
                
                <br/>
              
                <label>Upload an Image</label>
                <button>Choose a File</button>
                  <p>or</p>
                <label>Image URL</label>
                <input 
                  placeholder='image url'
                  value={imageURL}
                  onChange={(e)=> setImageURL(e.target.value)}
                />
                
                <br/>
                
                <label>Description</label>
                <input 
                  placeholder='description'
                  value={description}
                  onChange={(e)=> setDescription(e.target.value)}
                />
                
                <br/>
                
                <label>Size</label>
                <input 
                  placeholder='size'
                  value={size}
                  onChange={(e)=> setSize(e.target.value)}
                />
                
                <br/>
                
                <label>Keywords</label>
                <input 
                  placeholder='keywords'
                  value={keywords}
                  onChange={(e)=> setKeywords(e.target.value)}
                />
                
                <br/>
                
                <button onClick={handleNewListing}>Submit</button>
                //handle new listing here
            </form>
          </div>
          ) : (
            <div>
            <h2> Please login</h2>
            <button onClick={()=>navigate("/")}>login</button>
            </div>
          )
        }
    </div>
  )
}

export default NewListingPage