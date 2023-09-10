import React from 'react'
import{Box, styled} from "@mui/material"
import Navbar from './Navbar'
import Banner from './Banner'
const Component = styled(Box)`
    padding: 7px 7px;
    background: #F2F2F2;
`;

const Home = () => {
  return (
    <>
   <Navbar/>
   <Component>
   <Banner/>
   </Component>
   </>
  )
}

export default Home
