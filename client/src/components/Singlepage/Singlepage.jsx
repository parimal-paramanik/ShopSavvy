

import React from 'react'
import { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleProductDeatils } from '../../redux/actions/productActions'
import ProductDetail from './ProductDetail';
import ActionImage from './ActionImage';

import { Box, Typography ,Grid ,styled} from '@mui/material'


const RightContainer = styled(Grid)`
    margin-top: 50px;
    marfin-left :50px;
    & > p {
        margin-top: 10px;
    }
`;

const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
      margin: 0,
      textAlign:"center"
  }
}))

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Singlepage = () => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const dispatch= useDispatch()
  const {id} = useParams();

 const {loading,product} = useSelector(state => state.getSingleProductDeatils)
 console.log(product)
  useEffect(()=>{
    if(product && id !==product.id)
     dispatch(getSingleProductDeatils(id))
  },[dispatch,id,loading,product])

  return (
    <Component>
      <Box></Box>
      {
         product && Object.keys(product).length &&
        
           <Container container> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionImage product={product} />     
                    </Grid>
           
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}}  alt = "fuck"/></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </RightContainer>
                    </Container>
      
      }
    </Component>
  )
}

export default Singlepage
