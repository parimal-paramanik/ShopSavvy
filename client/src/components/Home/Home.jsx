import React, { useEffect } from 'react'
import{Box, styled} from "@mui/material"
import Navbar from './Navbar'
import Banner from './Banner'
import Slide from './Slide'
import SideSlide from './SideSlide'
import { getProducts } from '../../redux/actions/productActions'
import Midsection from './Midsection'


import { useDispatch,useSelector } from 'react-redux'
const Component = styled(Box)`
    padding: 7px 7px;
    background: #F2F2F2;
`;

const Home = () => {
  // destructering products from getproduct 
  // const {products}= getProducts
  // const [watch,setWatch] = useState(false)

    const {products} = useSelector(state =>state.getProducts)
    console.log({products:products})

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
 
  // filter out only those products which has a id of "product2"   
  const allproducts = products.filter((product) => {
    return product.type === "all" ;
  });
  const menproducts = products.filter((product) => {
    return product.type === "men" ;
  });
  const womenproducts = products.filter((product) => {
    return product.type === "women" ;
  });
  const electronic = products.filter((product) => {
    return product.type === "all" ;
  });
  
  return (
    <>
   <Navbar/>
   <Component>
   <Banner/>
      <SideSlide products= {allproducts} title = "Offer Dhamakedar" watch = {true} />
      <Midsection  />
      <Slide products= {menproducts} title = "Mens Style"></Slide>
      <Midsection/>
      <Slide products= {womenproducts} title = "Women Styles"></Slide>
      <Midsection />
      <Slide products= {electronic} title= "Deal of the Day"></Slide> 
   
   </Component>
   </>
  )
}

export default Home
