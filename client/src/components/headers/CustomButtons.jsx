import { Box,Button, Typography,styled} from '@mui/material'
import ShoppingCart from "@mui/icons-material/ShoppingCart"

// styling 
const Wrapper= styled(Box)`
  display:flex;
  margin: '0 3% 0 auto';
  & > button, & >p,& >div{
    margin-right:40px;
    font-size:16px;
    align-items:center;
  };
`
const Container = styled(Box)`
display: flex
`
const LoginButton = styled(Button)`
color: #2874f0;
background: #FFFFFF;
text-transform:none;
padding:5px 30px ;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;

`
    
const CustomButtons = () => {
  return (
   <Wrapper>
    <LoginButton variant="contained">Login</LoginButton>
    <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
    </Typography>
    <Typography style={{ marginTop: 3, width: 135 }}>
        More
    </Typography>
    <Container>
        <ShoppingCart/>
        <Typography style={{ marginLeft: 10 }}>
          Cart
        </Typography>
    </Container>
   </Wrapper>
  )
}

export default CustomButtons
