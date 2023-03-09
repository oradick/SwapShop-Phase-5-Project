import React, {useState, useEffect} from 'react'
import { 
  Image, Card, CardBody, CardFooter, Button, Heading, Text, Divider, Badge, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input, FormControl, FormLabel  } from '@chakra-ui/react'

const ListingCard = ({user, listing}) => {
  const [comments, setComments] = useState([])

  // states for opening and closing comment Modal form
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  // state for claim button on offers
  const [unclaimed, setUnclaimed] = useState(true)

  // fetch for comments
  useEffect(() =>{
    fetch("/comments")
    .then(response => response.json())
    .then((data)=>{
      setComments(data);
    }); 
  }, [])
  
  if (comments.length === 0) return null
  console.log(comments);

  // filter for comments that match a particular listing
  const filteredComments = comments.filter((comment) =>{
    return (comment.listing.id === listing.id)
  })

  // PATCH for claiming listings
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

  return (
    <div className="listing-card">
      <Card height="410px">
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
                  backgroundColor="#c4f1f9" 
                  color="#167289"
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
        {/* button and modal for comment pop-up */}
        <CardFooter>
          <Stack margin="auto">
            <Divider marginTop="5px"/>
              {listing.offer ? null : 
              <>
              <Button backgroundColor="#e9d9fd" color="#4d3d83" onClick={onOpen}>View Comments</Button>
              <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay/>
                <ModalContent>
                  <ModalHeader>All Comments</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                      {filteredComments.map((comment) =>(
                      <div className="comments">
                      <br/>
                      <Text color="#b695d0" as='sup'>{comment.user.name}</Text>
                      <Text>{comment.description}</Text>                      
                      </div>
                      )) 
                      }
                      <br/>
                      <FormControl>
                      <Input placeholder="Comment..."/>
                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Button>Post</Button>
                    </ModalFooter>
                </ModalContent>
              </Modal>
              </>
              }              
          </Stack>
        </CardFooter>
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