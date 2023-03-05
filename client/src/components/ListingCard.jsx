import React from 'react'

const ListingCard = ({user, listing}) => {
  // const claim = () => {
  //   fetch((`/listing/${listing.id}`), 
  //   {method: "PATCH",
    
  //   })
      

  // }


  return (
    <div className="listing-card">
      {listing.offer ? <h3>Offer</h3> : <h3>Request</h3>}
        <img src={listing.image} />
        <h4>{listing.description}</h4>
        <p>Size: {listing.size}</p>
        <p>Posted By: {listing.creator.name}</p>
        { (listing.creator.id !== listing.recipient.id) || (listing.offer === false) || (listing.creator.id === user.id) ? null : <button 
        // onClick={claim}
        >Claim This Item</button>}
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