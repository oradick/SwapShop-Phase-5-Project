import React from 'react'
import { useState, useEffect } from "react"
import { Image, Card, CardBody, Button, Heading, Text, Badge, Divider, Stack, CardFooter  } from '@chakra-ui/react'


const MyListings = ({user, listings}) => {
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
        <Heading marginLeft="1rem" size="md">{user.name}'s Listings</Heading>
        <div className='listing-container'>
        {myListings.map((myListing)=>(
            <div className='listing-card' key={myListing.id}>
            <Card  height="400px" key={myListing.id}>
                <CardBody>
                {myListing.offer ? <Badge colorScheme="cyan">Offer</Badge> : <Badge colorScheme="purple">Request</Badge>}
                <Image height="180px" borderRadius='lg' src={myListing.image} />
                <Heading size="md">{myListing.description}</Heading>
                <Text>Size: {myListing.size}</Text>
                <CardFooter>
                <Stack margin="auto">
                <Divider marginTop="5px"/>
                <Button 
                    width="100px"
                    backgroundColor="#cdeafe" 
                    onClick={()=> handleDelete(myListing.id)}
                    >Delete
                </Button>
                </Stack>
                </CardFooter>
                </CardBody>
            </Card>
            </div>
        ))}
        </div>
    </div>
  )
}

export default MyListings