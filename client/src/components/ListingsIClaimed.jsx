import React from 'react'
import { useState, useEffect } from "react"
import { Image, Card, CardBody, Button, Heading, Text, Badge, Divider, Stack, CardFooter  } from '@chakra-ui/react'

const ListingsIClaimed = ({user}) => {
    const [listingsIClaimed, setListingsIClaimed] = useState([])

    // fetch for listings where recipient id is my id
    useEffect(()=>{
        fetch("/listings-i-claimed")
        .then(response => response.json())
        .then((data)=>{
            setListingsIClaimed(data);
        })
    }, [])
    
    if (listingsIClaimed.length === 0) return null
    console.log("listings i claimed:", listingsIClaimed)

  return (
    <div className='listing-container-div'>
        <Heading marginLeft="1rem" size="md">Listings {user.name} Claimed</Heading>
        <div className='listing-container'>
        {listingsIClaimed.map((listingIClaimed)=>(
            <div className='listing-card' key={listingIClaimed.id}>
            <Card  height="400px" key={listingIClaimed.id}>
                <CardBody>
                {listingIClaimed.offer ? <Badge colorScheme="cyan">Offer</Badge> : <Badge colorScheme="purple">Request</Badge>}
                <br/>
                <br/>
                <Image marginLeft="2rem" width="50%" height="40%" borderRadius='lg' src={listingIClaimed.image} />
                <Heading size="md">{listingIClaimed.description}</Heading>
                <Text>Size: {listingIClaimed.size}</Text>
                <Text>Offered By: {listingIClaimed.creator.name}</Text>
                <CardFooter>
                <Stack margin="auto">
                <Divider marginTop="5px"/>
                {/* <Button 
                    width="100px"
                    backgroundColor="#cdeafe" 
                    onClick={()=> handleDelete(myListing.id)}
                    >Delete
                </Button> */}
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

export default ListingsIClaimed