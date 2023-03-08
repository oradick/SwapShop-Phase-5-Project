import React from 'react'
import {  Button, Input, FormControl, Select } from '@chakra-ui/react'


const SearchFilter = ({listingType, setListingType, searchTerm, setSearchTerm,}) => {

    const handleTypeFilter = (e) => {
        setListingType(e.target.value)
        console.log(listingType)
    }
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        console.log(searchTerm)
    }

  return (
    <div className='search-filter'>
            <Select width="20rem" backgroundColor="white" value={listingType} onChange={handleTypeFilter}>
                <option value="all">All</option>
                <option value={true}>Offers</option>
                <option value={false}>Requests</option>
            </Select>
            <Input placeholder="Search Listings" width="50rem" backgroundColor="white" value={searchTerm} onChange={handleSearch}/>
    </div>
  )
}

export default SearchFilter