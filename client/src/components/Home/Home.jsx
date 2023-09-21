import React, { useEffect } from 'react'
import{Box, styled} from "@mui/material"
import Navbar from './Navbar'
import Banner from './Banner'
import Slide from './Slide'
import { getProducts } from '../../redux/actions/productActions'

import { useDispatch,useSelector } from 'react-redux'
const Component = styled(Box)`
    padding: 7px 7px;
    background: #F2F2F2;
`;

const Home = () => {
  // destructering products from getproduct 
  // const {products}= getProducts

    const {products} = useSelector(state =>state.getProducts)
    console.log(products)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  
  return (
    <>
   <Navbar/>
   <Component>
   <Banner/>
   <Slide products= {products}></Slide>
   </Component>
   </>
  )
}

export default Home
