import React, {useState} from 'react'
import { Image, Card, CardBody, CardFooter, Button, Heading, Text, Divider, Badge, Stack  } from '@chakra-ui/react'

const ListingCard = ({user, listing}) => {
  
  const [unclaimed, setUnclaimed] = useState(true)

  const claim = (id, user) => {
    fetch((`/listings/${id}`), {
    method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "creator_id": listing.creator_id,
        "recipient_id": user,
        "offer": listing.offer,
        "image": listing.image,
        "description": listing.description,
        "size": listing.size,
        "keywords": listing.keywords
      })
    })
    .then((response) => response.json())
    .then((claimedListing) => {
      setUnclaimed(!unclaimed)
      console.log(claimedListing.recipient.id);
    });

  }

  // my patch works, i need to get the button to reflect that the its no longer available and then have the listings that the user has claimed render on their profile page.

  return (
    <div className="listing-card">
      <Card height="400px">
        <CardBody>
      {listing.offer ? <Badge colorScheme="cyan">Offer</Badge> : <Badge colorScheme="purple">Request</Badge>}
        <br/>
        <br/>
        <Image  marginLeft="2rem" width="50%" height="40%" borderRadius='lg' src={listing.image} />
        <Heading size='md'>{listing.description}</Heading>
        <Text>Size: {listing.size}</Text>
        <Text fontSize='sm'>Posted By: {listing.creator.name}</Text>
        
        { (listing.creator.id !== listing.recipient.id) || (listing.offer === false) || (listing.creator.id === user.id) ? null :
           <CardFooter>
            <Stack margin="auto">
            <Divider marginTop="5px"/>
            { unclaimed ? (
            <Button 
              width="100px"
              backgroundColor="#cdeafe" 
              onClick={()=> claim(listing.id, user.id)}
              >Claim Item
            </Button>
            ) : (
              <Button 
              width="100px"
              >Claimed
            </Button>  
            )

            }
            </Stack>
         </CardFooter>
        }
        </CardBody>
      </Card>
    </div>
  )
}

export default ListingCard;

//claim button will only exist on items tht are requests and do not belong to the current user
//claim button logic: if the listing's creator === the listing's recipient, the listing is unclaimed and patch can occur to change recipient to current user's id. 
//onclick, the button should 
  // patch the recipient to the current user, 
  // change style to reflect that the item is claimed, 
  // and the listing should appear on the current user's profile page in a section called "my claims" * section title can be workshoped later i guess...