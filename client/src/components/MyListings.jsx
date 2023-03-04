import React from 'react'
import { useState, useEffect } from "react"


const MyListings = ({user, listings, setListings}) => {
    const [myListings, setMyListings] = useState([])
  
    useEffect(() => {
      fetch("/my-listings")
      .then(response => response.json())
      .then((data)=>{
        setMyListings(data);
        console.log("all listings:", listings)
      });
    }, []);

    if (myListings.length === 0) return null
    console.log("my listings:", myListings)

    const handleDelete = (id) => {
        fetch(`/listings/${id}`, {
            method: "DELETE",
        })
        .then((resp)=> resp.json())
        .then((data)=> console.log(data))
        .then(
            fetch("/my-listings")
            .then((response) => response.json())
            .then((data)=> {
                setMyListings(data)
                console.log("my updated listings:", myListings)
            })
        )
    }


    // my delete works! seb helped with the  string interpolation of the fetch url- defining id within the map below. I now need to setUpdatedListings within the delete, and plug that into the og my-listings fetch so that the page rerenders correctly upon a deletion 


  return (
    <div>
        <h1>My Listings {user.name}</h1>
        <div className='listing-container'>
        {myListings.map((myListing)=>(
            <div className="listing-card" key={myListing.id}>
                <img src={myListing.image} />
                <h4>{myListing.description}</h4>
                <p>Size: {myListing.size}</p>
                <button onClick={()=> handleDelete(myListing.id)}>Delete</button>
            </div>
        ))}
        </div>
    </div>
  )
}

export default MyListings