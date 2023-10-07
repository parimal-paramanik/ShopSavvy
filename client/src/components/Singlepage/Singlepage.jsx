

import React from 'react'
import { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleProductDeatils } from '../../redux/actions/productActions'

import { Box, Typography ,styled} from '@mui/material'


const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const Singlepage = () => {
  const dispatch= useDispatch()
  const {id} = useParams();

 const {loading,product} = useSelector(state => state.getSingleProductDeatils)
 console.log(product)
  useEffect(()=>{
    if(product && id !==product.id)
     dispatch(getSingleProductDeatils(id))
  },[dispatch,id,loading,product])

  return (
    <Box>
      {
         product && Object.keys(product).length &&
        <Box>
            <Box>
              <img src= {product.detailUrl} alt ={product.title.sortTitle}/>
            </Box>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </RightContainer>
        </Box>
      }
    </Box>
  )
}

export default Singlepage
