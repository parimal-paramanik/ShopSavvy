import React from 'react'
import { Box, Typography, styled } from "@mui/material"
import { navData } from '../../constant/data'

const Component= styled(Box)(({theme})=> ({
   display:"flex",
   margin:"55px 130px 0px 130px",
   justifyContent:"space-between",
   [theme.breakpoints.down('lg')] :{
    display:"none"
   }
}))
const Container= styled(Box)`
margin:12px 8px;
text-align:center;
`
const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;
const Navbar = () => {
    return (
        <Component>
            {
                navData.map((data,index) =>
                    <Container key={index}>
                        <img src={data.url} alt="navimage" style={{width:64}} />
                        <Text> {data.text}</Text>
                    </Container>
                )
            }
        </Component>
    )
}

export default Navbar
