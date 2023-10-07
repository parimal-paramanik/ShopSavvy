
import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 40px 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '80%',
    // height:'50%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const ActionImage = ({ product }) => {
  return (
        <LeftContainer>
            <Image src={product.detailUrl} /><br />
            <StyledButton style={{ marginRight: 10, background: '#ff9f00' }} variant="contained"><Cart />Add to Bag</StyledButton>
            <StyledButton style={{ background: 'green' }} variant="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionImage;