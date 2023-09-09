import React from 'react'
import { styled,Box,InputBase} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
// styles defined here
const SearchContainer = styled(Box)`
background:#fff;
width: 38%;
border-radius: 2px;
margin-left: 10px;
background-color: #fff;
display: flex;
`

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;
const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const Search = () => {
  return (
   <SearchContainer>
    <InputSearchBase placeholder="Search for products, brands and more"/>
    <SearchIconWrapper>
    <SearchIcon/>
   </SearchIconWrapper>
   </SearchContainer>
   
  )
}

export default Search
