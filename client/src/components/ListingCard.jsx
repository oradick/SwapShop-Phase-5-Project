import React from 'react'

const ListingCard = (props) => {
  return (
    <div className="listing-card">
        <img src={props.listing.image} />
        <h4>{props.listing.description}</h4>
        <p>Size: {props.listing.size}</p>
        <p>Posted By: {props.listing.creator.name}</p>
    </div>
  )
}

export default ListingCard