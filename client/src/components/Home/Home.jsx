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
      <SideSlide products= {products} title = "Offer Dhamakedar" watch = {true} />
      <Midsection  />
      <Slide products= {products} title = "Recomended"></Slide>
      <Midsection/>
      <Slide products= {products} title = "Mens Style"></Slide>
      <Slide products= {products} title = "Women Styles"></Slide>
      <Midsection />
      <Slide products= {products} title= "Deal of the Day"></Slide> 
   
   </Component>
   </>
  )
}

export default Home
