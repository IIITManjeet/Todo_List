import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { FcSearch } from 'react-icons/fc';
const Search = ({ searchInput, setSearchInput }) => {
 const searchHandler = (event) => {
  setSearchInput(event.target.value);
 };
 return (
  <div>
   <InputGroup>
    <InputGroup.Text>
     <FcSearch />
    </InputGroup.Text>
    <Form.Control type="text" onChange={searchHandler} value={searchInput} />
   </InputGroup>
  </div>
 )
}

export default Search;